import { mapObject, transformIterator } from "@latticexyz/utils";
import { Subject, filter, map } from "rxjs";
import { getEntityString, getEntitySymbol } from "./Entity";
import { OptionalTypes } from "./constants";
import {
  Component,
  ComponentValue,
  Entity,
  EntitySymbol,
  Indexer,
  Metadata,
  OverridableComponent,
  Override,
  Schema,
} from "./types";
import { isFullComponentValue, isIndexer } from "./utils";

function getComponentName<S extends Schema, M extends Metadata, T = unknown>(component: Component<S, M, T>) {
  return (
    component.metadata?.componentName ??
    component.metadata?.tableName ??
    component.metadata?.tableId ??
    component.metadata?.contractId ??
    component.id
  );
}

/**
 * Set the value for a given entity in a given component.
 *
 * @param component {@link defineComponent Component} to be updated.
 * @param entity {@link Entity} whose value in the given component should be set.
 * @param value Value to set, schema must match the component schema.
 *
 * @example
 * ```
 * setComponent(Position, entity, { x: 1, y: 2 });
 * ```
 */
export function setComponent<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  entity: Entity,
  value: ComponentValue<S, T>
) {
  const entitySymbol = getEntitySymbol(entity);
  const prevValue = getComponentValue(component, entity);
  for (const [key, val] of Object.entries(value)) {
    if (component.values[key]) {
      component.values[key].set(entitySymbol, val);
    } else {
      const isTableFieldIndex = component.metadata?.tableId && /^\d+$/.test(key);
      if (!isTableFieldIndex) {
        // If this key looks like a field index from `defineStoreComponents`,
        // we can ignore this value without logging anything.
        //
        // Otherwise, we should let the user know we found undefined data.
        console.warn(
          "Component definition for",
          getComponentName(component),
          "is missing key",
          key,
          ", ignoring value",
          val,
          "for entity",
          entity,
          ". Existing keys: ",
          Object.keys(component.values)
        );
      }
    }
  }
  component.update$.next({ entity, value: [value, prevValue], component });
}

/**
 * Update the value for a given entity in a given component while keeping the old value of keys not included in the update.
 *
 * @param component {@link defineComponent Component} to be updated.
 * @param entity {@link Entity} whose value in the given component should be updated.
 * @param value Partial value to be set, remaining keys will be taken from the existing component value.
 *
 * @remarks
 * This function fails silently during runtime if a partial value is set for an entity that
 * does not have a component value yet, since then a partial value will be set in the component for this entity.
 *
 * @example
 * ```
 * updateComponent(Position, entity, { x: 1 });
 * ```
 */
export function updateComponent<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  entity: Entity,
  value: Partial<ComponentValue<S, T>>,
  initialValue?: ComponentValue<S, T>
) {
  const currentValue = getComponentValue(component, entity);
  if (currentValue === undefined) {
    if (initialValue === undefined) {
      throw new Error(`Can't update component ${getComponentName(component)} without a current value or initial value`);
    }
    setComponent(component, entity, { ...initialValue, ...value });
  } else {
    setComponent(component, entity, { ...currentValue, ...value });
  }
}

/**
 * Remove a given entity from a given component.
 *
 * @param component {@link defineComponent Component} to be updated.
 * @param entity {@link Entity} whose value should be removed from this component.
 */
export function removeComponent<S extends Schema, M extends Metadata, T = unknown>(
  component: Component<S, M, T>,
  entity: Entity
) {
  const entitySymbol = getEntitySymbol(entity);
  const prevValue = getComponentValue(component, entity);
  for (const key of Object.keys(component.values)) {
    component.values[key].delete(entitySymbol);
  }
  component.update$.next({ entity, value: [undefined, prevValue], component });
}

/**
 * Check whether a component contains a value for a given entity.
 *
 * @param component {@link defineComponent Component} to check whether it has a value for the given entity.
 * @param entity {@link Entity} to check whether it has a value in the given component.
 * @returns true if the component contains a value for the given entity, else false.
 */
export function hasComponent<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  entity: Entity
): boolean {
  const entitySymbol = getEntitySymbol(entity);
  const map = Object.values(component.values)[0];
  return map.has(entitySymbol);
}

/**
 * Get the value of a given entity in the given component.
 * Returns undefined if no value or only a partial value is found.
 *
 * @param component {@link defineComponent Component} to get the value from for the given entity.
 * @param entity {@link Entity} to get the value for from the given component.
 * @returns Value of the given entity in the given component or undefined if no value exists.
 */
export function getComponentValue<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  entity: Entity
): ComponentValue<S, T> | undefined {
  const value: Record<string, unknown> = {};
  const entitySymbol = getEntitySymbol(entity);

  // Get the value of each schema key
  const schemaKeys = Object.keys(component.schema);
  for (const key of schemaKeys) {
    const val = component.values[key].get(entitySymbol);
    if (val === undefined && !OptionalTypes.includes(component.schema[key])) return undefined;
    value[key] = val;
  }

  return value as ComponentValue<S, T>;
}

/**
 * Get the value of a given entity in the given component.
 * Throws an error if no value exists for the given entity in the given component.
 *
 * @param component {@link defineComponent Component} to get the value from for the given entity.
 * @param entity {@link Entity} of the entity to get the value for from the given component.
 * @returns Value of the given entity in the given component.
 *
 * @remarks
 * Throws an error if no value exists in the component for the given entity.
 */
export function getComponentValueStrict<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  entity: Entity
): ComponentValue<S, T> {
  const value = getComponentValue(component, entity);
  if (!value) throw new Error(`No value for component ${getComponentName(component)} on entity ${entity}`);
  return value;
}

/**
 * Compare two {@link ComponentValue}s.
 * `a` can be a partial component value, in which case only the keys present in `a` are compared to the corresponding keys in `b`.
 *
 * @param a Partial {@link ComponentValue} to compare to `b`
 * @param b Component value to compare `a` to.
 * @returns True if `a` equals `b` in the keys present in a or neither `a` nor `b` are defined, else false.
 *
 * @example
 * ```
 * componentValueEquals({ x: 1, y: 2 }, { x: 1, y: 3 }) // returns false because value of y doesn't match
 * componentValueEquals({ x: 1 }, { x: 1, y: 3 }) // returns true because x is equal and y is not present in a
 * ```
 */
export function componentValueEquals<S extends Schema, T = unknown>(
  a?: Partial<ComponentValue<S, T>>,
  b?: ComponentValue<S, T>
): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;

  let equals = true;
  for (const key of Object.keys(a)) {
    equals = a[key] === b[key];
    if (!equals) return false;
  }
  return equals;
}

/**
 * Util to create a tuple of a component and value with matching schema.
 * (Used to enforce Typescript type safety.)
 *
 * @param component {@link defineComponent Component} with {@link ComponentSchema} `S`
 * @param value {@link ComponentValue} with {@link ComponentSchema} `S`
 * @returns Tuple `[component, value]`
 */
export function withValue<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>,
  value: ComponentValue<S, T>
): [Component<S, Metadata, T>, ComponentValue<S, T>] {
  return [component, value];
}

/**
 * Get a set of entities that have the given component value in the given component.
 *
 * @param component {@link defineComponent Component} to get entities with the given value from.
 * @param value look for entities with this {@link ComponentValue}.
 * @returns Set with {@link Entity Entities} with the given component value.
 */
export function getEntitiesWithValue<S extends Schema>(
  component: Component<S> | Indexer<S>,
  value: Partial<ComponentValue<S>>
): Set<Entity> {
  // Shortcut for indexers
  if (isIndexer(component) && isFullComponentValue(component, value)) {
    return component.getEntitiesWithValue(value);
  }

  // Trivial implementation for regular components
  const entities = new Set<Entity>();
  for (const entity of getComponentEntities(component)) {
    const val = getComponentValue(component, entity);
    if (componentValueEquals(value, val)) {
      entities.add(entity);
    }
  }
  return entities;
}

/**
 * Get a set of all entities of the given component.
 *
 * @param component {@link defineComponent Component} to get all entities from
 * @returns Set of all entities in the given component.
 */
export function getComponentEntities<S extends Schema, T = unknown>(
  component: Component<S, Metadata, T>
): IterableIterator<Entity> {
  return component.entities();
}

/**
 * An overridable component is a mirror of the source component, with functions to lazily override specific entity values.
 * Lazily override means the values are not actually set to the source component, but the override is only returned if the value is read.
 *
 * - When an override for an entity is added to the component, the override is propagated via the component's `update$` stream.
 * - While an override is set for a specific entity, no updates to the source component for this entity will be propagated to the `update$` stream.
 * - When an override is removed for a specific entity and there are more overrides targeting this entity,
 * the override with the highest nonce will be propagated to the `update$` stream.
 * - When an override is removed for a specific entity and there are no more overrides targeting this entity,
 * the non-overridden underlying component value of this entity will be propagated to the `update$` stream.
 *
 * @param component {@link defineComponent Component} to use as underlying source for the overridable component
 * @returns overridable component
 */
export function overridableComponent<S extends Schema, M extends Metadata, T = unknown>(
  component: Component<S, M, T>
): OverridableComponent<S, M, T> {
  let nonce = 0;

  // Map from OverrideId to Override (to be able to add multiple overrides to the same Entity)
  const overrides = new Map<string, { update: Override<S, T>; nonce: number }>();

  // Map from EntitySymbol to current overridden component value
  const overriddenEntityValues = new Map<EntitySymbol, Partial<ComponentValue<S, T>> | null>();

  // Update event stream that takes into account overridden entity values
  const update$ = new Subject<{
    entity: Entity;
    value: [ComponentValue<S, T> | undefined, ComponentValue<S, T> | undefined];
    component: Component<S, Metadata, T>;
  }>();

  // Add a new override to some entity
  function addOverride(id: string, update: Override<S, T>) {
    overrides.set(id, { update, nonce: nonce++ });
    setOverriddenComponentValue(update.entity, update.value);
  }

  // Remove an override from an entity
  function removeOverride(id: string) {
    const affectedEntity = overrides.get(id)?.update.entity;
    overrides.delete(id);

    if (affectedEntity == null) return;

    // If there are more overries affecting this entity,
    // set the overriddenEntityValue to the last override
    const relevantOverrides = [...overrides.values()]
      .filter((o) => o.update.entity === affectedEntity)
      .sort((a, b) => (a.nonce < b.nonce ? -1 : 1));

    if (relevantOverrides.length > 0) {
      const lastOverride = relevantOverrides[relevantOverrides.length - 1];
      setOverriddenComponentValue(affectedEntity, lastOverride.update.value);
    } else {
      setOverriddenComponentValue(affectedEntity, undefined);
    }
  }

  // Internal function to get the current overridden value or value of the source component
  function getOverriddenComponentValue(entity: Entity): ComponentValue<S, T> | undefined {
    const originalValue = getComponentValue(component, entity);
    const entitySymbol = getEntitySymbol(entity);
    const overriddenValue = overriddenEntityValues.get(entitySymbol);
    return (originalValue || overriddenValue) && overriddenValue !== null // null is a valid override, in this case return undefined
      ? ({ ...originalValue, ...overriddenValue } as ComponentValue<S, T>)
      : undefined;
  }

  const valueProxyHandler: (key: keyof S) => ProxyHandler<(typeof component.values)[typeof key]> = (key: keyof S) => ({
    get(target, prop) {
      // Intercept calls to component.value[key].get(entity)
      if (prop === "get") {
        return (entity: EntitySymbol) => {
          const originalValue = target.get(entity);
          const overriddenValue = overriddenEntityValues.get(entity);
          return overriddenValue && overriddenValue[key] != null ? overriddenValue[key] : originalValue;
        };
      }

      // Intercept calls to component.value[key].has(entity)
      if (prop === "has") {
        return (entity: EntitySymbol) => {
          return target.has(entity) || overriddenEntityValues.has(entity);
        };
      }

      // Intercept calls to component.value[key].keys()
      if (prop === "keys") {
        return () => new Set([...target.keys(), ...overriddenEntityValues.keys()]).values();
      }

      return Reflect.get(target, prop, target);
    },
  });

  const partialValues: Partial<Component<S, M, T>["values"]> = {};
  for (const key of Object.keys(component.values) as (keyof S)[]) {
    partialValues[key] = new Proxy(component.values[key], valueProxyHandler(key));
  }
  const valuesProxy = partialValues as Component<S, M, T>["values"];

  const overriddenComponent = new Proxy(component, {
    get(target, prop) {
      if (prop === "addOverride") return addOverride;
      if (prop === "removeOverride") return removeOverride;
      if (prop === "values") return valuesProxy;
      if (prop === "update$") return update$;
      if (prop === "entities")
        return () =>
          new Set([
            ...transformIterator(overriddenEntityValues.keys(), getEntityString),
            ...target.entities(),
          ]).values();

      return Reflect.get(target, prop);
    },
    has(target, prop) {
      if (prop === "addOverride" || prop === "removeOverride") return true;
      return prop in target;
    },
  }) as OverridableComponent<S, M, T>;

  // Internal function to set the current overridden component value and emit the update event
  function setOverriddenComponentValue(entity: Entity, value?: Partial<ComponentValue<S, T>> | null) {
    const entitySymbol = getEntitySymbol(entity);
    // Check specifically for undefined - null is a valid override
    const prevValue = getOverriddenComponentValue(entity);
    if (value !== undefined) overriddenEntityValues.set(entitySymbol, value);
    else overriddenEntityValues.delete(entitySymbol);
    update$.next({ entity, value: [getOverriddenComponentValue(entity), prevValue], component: overriddenComponent });
  }

  // Channel through update events from the original component if there are no overrides
  component.update$
    .pipe(
      filter((e) => !overriddenEntityValues.get(getEntitySymbol(e.entity))),
      map((update) => ({ ...update, component: overriddenComponent }))
    )
    .subscribe(update$);

  return overriddenComponent;
}

function getLocalCacheId(component: Component, uniqueWorldIdentifier?: string): string {
  return `localcache-${uniqueWorldIdentifier}-${component.id}`;
}

export function clearLocalCache(component: Component, uniqueWorldIdentifier?: string): void {
  localStorage.removeItem(getLocalCacheId(component, uniqueWorldIdentifier));
}

// Note: Only proof of concept for now - use this only for component that do not update frequently
export function createLocalCache<S extends Schema, M extends Metadata, T = unknown>(
  component: Component<S, M, T>,
  uniqueWorldIdentifier?: string
): Component<S, M, T> {
  const { world, update$, values } = component;
  const cacheId = getLocalCacheId(component as Component, uniqueWorldIdentifier);
  let numUpdates = 0;
  const creation = Date.now();

  // On creation, check if this component has locally cached values
  const encodedCache = localStorage.getItem(cacheId);
  if (encodedCache) {
    const cache = JSON.parse(encodedCache) as [string, [Entity, unknown][]][];
    const state: { [entity: Entity]: { [key: string]: unknown } } = {};

    for (const [key, values] of cache) {
      for (const [entity, value] of values) {
        state[entity] = state[entity] || {};
        state[entity][key] = value;
      }
    }

    for (const [entityId, value] of Object.entries(state)) {
      const entity = world.registerEntity({ id: entityId });
      setComponent(component, entity, value as ComponentValue<S, T>);
    }

    console.info("Loading component", getComponentName(component), "from local cache.");
  }

  // Flush the entire component to the local cache every time it updates.
  // Note: this is highly unperformant and should only be used for components that
  // don't update often and don't have many values
  const updateSub = update$.subscribe(() => {
    numUpdates++;
    const encoded = JSON.stringify(
      Object.entries(mapObject(values, (m) => [...m.entries()].map((e) => [getEntityString(e[0]), e[1]])))
    );
    localStorage.setItem(cacheId, encoded);
    if (numUpdates > 200) {
      console.warn(
        "Component",
        getComponentName(component),
        "was locally cached",
        numUpdates,
        "times since",
        new Date(creation).toLocaleTimeString(),
        "- the local cache is in an alpha state and should not be used with components that update frequently yet"
      );
    }
  });
  component.world.registerDisposer(() => updateSub?.unsubscribe());

  return component;
}
