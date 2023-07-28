import { mapObject, transformIterator, uuid } from "@latticexyz/utils";
import { Subject } from "rxjs";
import { getComponentValue, removeComponent, setComponent, updateComponent } from "./Component";
import { getEntityString, getEntitySymbol } from "./Entity";
import { createIndexer } from "./Indexer";
import { createOverridableComponent } from "./OverridableComponent";
import { Has, HasValue, NotValue, runQuery } from "./Query";
import { Type } from "./constants";
import {
  Component,
  ComponentValue,
  Entity,
  EntitySymbol,
  Metadata,
  OverridableComponent,
  Schema,
  World,
} from "./types";

export type OverridableType<
  Overridable extends boolean,
  S extends Schema,
  M extends Metadata = Metadata,
  T = unknown
> = Overridable extends true ? OverridableComponent<S, M, T> : Component<S, M, T>;

export interface Options<Overridable extends boolean, M extends Metadata> {
  id?: string;
  metadata?: M;
  indexed?: boolean;
  overridable?: Overridable;
}

export function defineRawComponent<S extends Schema, M extends Metadata, T = unknown>(
  world: World,
  schema: S,
  options?: { id?: string; metadata?: M; indexed?: boolean }
) {
  if (Object.keys(schema).length === 0) throw new Error("Component schema must have at least one key");
  const id = options?.id ?? uuid();
  const values = mapObject(schema, () => new Map());
  const update$ = new Subject();
  const metadata = options?.metadata;
  const entities = () =>
    transformIterator((Object.values(values)[0] as Map<EntitySymbol, unknown>).keys(), getEntityString);
  let component = { values, schema, id, update$, metadata, entities, world } as Component<S, M, T>;
  if (options?.indexed) component = createIndexer(component);
  world.registerComponent(component as Component);
  return component;
}

/**
 * Components contain state indexed by entities and are one of the fundamental building blocks in ECS.
 * Besides containing the state, components expose an rxjs update$ stream, that emits an event any time the value
 * of an entity in this component is updated.
 *
 * @param world {@link World} object this component should be registered onto.
 * @param schema {@link Schema} of component values. Uses Type enum as bridge between typescript types and javascript accessible values.
 * @param options Optional: {
 *    id: descriptive id for this component (otherwise an autogenerated id is used),
 *    metadata: arbitrary metadata (eg. contractId for solecs mapped components),
 *    indexed: if this flag is set, an indexer is applied to this component (see {@link defineIndexer})
 * }
 * @returns Component object linked to the provided World
 *
 * @example
 * ```
 * const Position = defineComponent(world, { x: Type.Number, y: Type.Number }, { id: "Position" });
 * ```
 */
export function defineComponent<
  Overridable extends boolean,
  S extends Schema,
  M extends Metadata = Metadata,
  T = unknown
>(world: World, schema: S, options?: Options<Overridable, M>) {
  const rawComponent = defineRawComponent(world, schema, options);

  const component: OverridableType<Overridable, S, M> = options?.overridable
    ? createOverridableComponent(rawComponent)
    : (rawComponent as OverridableType<Overridable, S, M>);

  function set(entity: Entity, value: ComponentValue<S, T>) {
    setComponent(component, entity, value);
  }

  function get(entity: Entity): ComponentValue<S, T> | undefined;
  function get(entity: Entity, defaultValue?: ComponentValue<S, T>): ComponentValue<S, T>;

  function get(entity: Entity, defaultValue?: ComponentValue<S, T>) {
    return getComponentValue(component, entity) ?? defaultValue;
  }

  function getAll() {
    return runQuery([Has(component)]);
  }

  function getAllWith(value: Partial<ComponentValue<S>>) {
    return runQuery([HasValue(component, value)]);
  }

  function getAllWithout(value: Partial<ComponentValue<S>>) {
    return runQuery([Has(component), NotValue(component, value)]);
  }

  function remove(entity: Entity) {
    removeComponent(component, entity);
  }

  function clear() {
    const entities = runQuery([Has(component)]);
    entities.forEach((entity) => remove(entity));
  }

  function update(entity: Entity, value: Partial<ComponentValue<S, T>>, initialValue?: ComponentValue<S, T>) {
    updateComponent(component, entity, value, initialValue);
  }

  function has(entity: Entity) {
    const entitySymbol = getEntitySymbol(entity);
    const map = Object.values(component.values)[0];
    return map.has(entitySymbol);
  }

  function equals(entityA: Entity, entityB: Entity) {
    const a = get(entityA);
    const b = get(entityB);
    if (!a && !b) return true;
    if (!a || !b) return false;

    let equals = true;
    for (const key of Object.keys(a)) {
      equals = a[key] === b[key];
      if (!equals) return false;
    }
    return equals;
  }

  const context = {
    ...component,
    get,
    set,
    getAll,
    getAllWith,
    getAllWithout,
    remove,
    clear,
    update,
    has,
    equals,
  };
  console.log("component:", component);
  return context;
}

export default defineComponent;

export type NumberComponent = ReturnType<typeof defineNumberComponent>;
export function defineNumberComponent<Overridable extends boolean, M extends Metadata>(
  world: World,
  options?: Options<Overridable, M>
) {
  return defineComponent(world, { value: Type.Number }, options);
}

export function defineStringComponent<Overridable extends boolean, M extends Metadata>(
  world: World,
  options?: Options<Overridable, M>
) {
  return defineComponent(world, { value: Type.String }, options);
}

export function defineCoordComponent<Overridable extends boolean, M extends Metadata>(
  world: World,
  options?: Options<Overridable, M>
) {
  return defineComponent(world, { x: Type.Number, y: Type.Number }, options);
}

export function defineBoolComponent<Overridable extends boolean, M extends Metadata>(
  world: World,
  options?: Options<Overridable, M>
) {
  return defineComponent(world, { value: Type.Boolean }, options);
}
