import { Constructor } from "../types";
import { Entity } from "./entity";

export type System = (commands: Commands) => void;

export enum Schedule {
    Startup,
    Update,
    Render,
    Teardown,
}

export class Maybe<T> {
  constructor(public value: T) {}
}

export function maybe<T>(v: T): Maybe<T> {
  return new Maybe(v);
}

export type QueryElement<T> = Constructor<T> | Maybe<Constructor<T>> | Entity;

export type Commands = {
  setResource<T>(resource: T): void;
  getResource<T>(resource: new (...args: any[]) => T): T;
  spawn(...components: any[]): Entity;
  destroy(entity: Entity): void;
  addComponent(entity: Entity, ...components: any[]): void;
  removeComponent(entity: Entity, ...components: any[]): void;
  getComponent<T>(entity: Entity, component: Constructor<T>): T | undefined;
  query<T1 extends QueryElement<any>, S extends QueryElement<any>[]>(
    query: [T1],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    T28 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
      T28,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
    T28 extends Maybe<infer X28 extends abstract new (...args: any) => any>
      ? InstanceType<X28> | undefined
      : T28 extends Constructor<any>
        ? InstanceType<T28>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    T28 extends QueryElement<any>,
    T29 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
      T28,
      T29,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
    T28 extends Maybe<infer X28 extends abstract new (...args: any) => any>
      ? InstanceType<X28> | undefined
      : T28 extends Constructor<any>
        ? InstanceType<T28>
        : never,
    T29 extends Maybe<infer X29 extends abstract new (...args: any) => any>
      ? InstanceType<X29> | undefined
      : T29 extends Constructor<any>
        ? InstanceType<T29>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    T28 extends QueryElement<any>,
    T29 extends QueryElement<any>,
    T30 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
      T28,
      T29,
      T30,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
    T28 extends Maybe<infer X28 extends abstract new (...args: any) => any>
      ? InstanceType<X28> | undefined
      : T28 extends Constructor<any>
        ? InstanceType<T28>
        : never,
    T29 extends Maybe<infer X29 extends abstract new (...args: any) => any>
      ? InstanceType<X29> | undefined
      : T29 extends Constructor<any>
        ? InstanceType<T29>
        : never,
    T30 extends Maybe<infer X30 extends abstract new (...args: any) => any>
      ? InstanceType<X30> | undefined
      : T30 extends Constructor<any>
        ? InstanceType<T30>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    T28 extends QueryElement<any>,
    T29 extends QueryElement<any>,
    T30 extends QueryElement<any>,
    T31 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
      T28,
      T29,
      T30,
      T31,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
    T28 extends Maybe<infer X28 extends abstract new (...args: any) => any>
      ? InstanceType<X28> | undefined
      : T28 extends Constructor<any>
        ? InstanceType<T28>
        : never,
    T29 extends Maybe<infer X29 extends abstract new (...args: any) => any>
      ? InstanceType<X29> | undefined
      : T29 extends Constructor<any>
        ? InstanceType<T29>
        : never,
    T30 extends Maybe<infer X30 extends abstract new (...args: any) => any>
      ? InstanceType<X30> | undefined
      : T30 extends Constructor<any>
        ? InstanceType<T30>
        : never,
    T31 extends Maybe<infer X31 extends abstract new (...args: any) => any>
      ? InstanceType<X31> | undefined
      : T31 extends Constructor<any>
        ? InstanceType<T31>
        : never,
  ][];
  query<
    T1 extends QueryElement<any>,
    T2 extends QueryElement<any>,
    T3 extends QueryElement<any>,
    T4 extends QueryElement<any>,
    T5 extends QueryElement<any>,
    T6 extends QueryElement<any>,
    T7 extends QueryElement<any>,
    T8 extends QueryElement<any>,
    T9 extends QueryElement<any>,
    T10 extends QueryElement<any>,
    T11 extends QueryElement<any>,
    T12 extends QueryElement<any>,
    T13 extends QueryElement<any>,
    T14 extends QueryElement<any>,
    T15 extends QueryElement<any>,
    T16 extends QueryElement<any>,
    T17 extends QueryElement<any>,
    T18 extends QueryElement<any>,
    T19 extends QueryElement<any>,
    T20 extends QueryElement<any>,
    T21 extends QueryElement<any>,
    T22 extends QueryElement<any>,
    T23 extends QueryElement<any>,
    T24 extends QueryElement<any>,
    T25 extends QueryElement<any>,
    T26 extends QueryElement<any>,
    T27 extends QueryElement<any>,
    T28 extends QueryElement<any>,
    T29 extends QueryElement<any>,
    T30 extends QueryElement<any>,
    T31 extends QueryElement<any>,
    T32 extends QueryElement<any>,
    S extends QueryElement<any>[],
  >(
    query: [
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15,
      T16,
      T17,
      T18,
      T19,
      T20,
      T21,
      T22,
      T23,
      T24,
      T25,
      T26,
      T27,
      T28,
      T29,
      T30,
      T31,
      T32,
    ],
    exclude?: S
  ): [
    T1 extends Maybe<infer X1 extends abstract new (...args: any) => any>
      ? InstanceType<X1> | undefined
      : T1 extends Constructor<any>
        ? InstanceType<T1>
        : never,
    T2 extends Maybe<infer X2 extends abstract new (...args: any) => any>
      ? InstanceType<X2> | undefined
      : T2 extends Constructor<any>
        ? InstanceType<T2>
        : never,
    T3 extends Maybe<infer X3 extends abstract new (...args: any) => any>
      ? InstanceType<X3> | undefined
      : T3 extends Constructor<any>
        ? InstanceType<T3>
        : never,
    T4 extends Maybe<infer X4 extends abstract new (...args: any) => any>
      ? InstanceType<X4> | undefined
      : T4 extends Constructor<any>
        ? InstanceType<T4>
        : never,
    T5 extends Maybe<infer X5 extends abstract new (...args: any) => any>
      ? InstanceType<X5> | undefined
      : T5 extends Constructor<any>
        ? InstanceType<T5>
        : never,
    T6 extends Maybe<infer X6 extends abstract new (...args: any) => any>
      ? InstanceType<X6> | undefined
      : T6 extends Constructor<any>
        ? InstanceType<T6>
        : never,
    T7 extends Maybe<infer X7 extends abstract new (...args: any) => any>
      ? InstanceType<X7> | undefined
      : T7 extends Constructor<any>
        ? InstanceType<T7>
        : never,
    T8 extends Maybe<infer X8 extends abstract new (...args: any) => any>
      ? InstanceType<X8> | undefined
      : T8 extends Constructor<any>
        ? InstanceType<T8>
        : never,
    T9 extends Maybe<infer X9 extends abstract new (...args: any) => any>
      ? InstanceType<X9> | undefined
      : T9 extends Constructor<any>
        ? InstanceType<T9>
        : never,
    T10 extends Maybe<infer X10 extends abstract new (...args: any) => any>
      ? InstanceType<X10> | undefined
      : T10 extends Constructor<any>
        ? InstanceType<T10>
        : never,
    T11 extends Maybe<infer X11 extends abstract new (...args: any) => any>
      ? InstanceType<X11> | undefined
      : T11 extends Constructor<any>
        ? InstanceType<T11>
        : never,
    T12 extends Maybe<infer X12 extends abstract new (...args: any) => any>
      ? InstanceType<X12> | undefined
      : T12 extends Constructor<any>
        ? InstanceType<T12>
        : never,
    T13 extends Maybe<infer X13 extends abstract new (...args: any) => any>
      ? InstanceType<X13> | undefined
      : T13 extends Constructor<any>
        ? InstanceType<T13>
        : never,
    T14 extends Maybe<infer X14 extends abstract new (...args: any) => any>
      ? InstanceType<X14> | undefined
      : T14 extends Constructor<any>
        ? InstanceType<T14>
        : never,
    T15 extends Maybe<infer X15 extends abstract new (...args: any) => any>
      ? InstanceType<X15> | undefined
      : T15 extends Constructor<any>
        ? InstanceType<T15>
        : never,
    T16 extends Maybe<infer X16 extends abstract new (...args: any) => any>
      ? InstanceType<X16> | undefined
      : T16 extends Constructor<any>
        ? InstanceType<T16>
        : never,
    T17 extends Maybe<infer X17 extends abstract new (...args: any) => any>
      ? InstanceType<X17> | undefined
      : T17 extends Constructor<any>
        ? InstanceType<T17>
        : never,
    T18 extends Maybe<infer X18 extends abstract new (...args: any) => any>
      ? InstanceType<X18> | undefined
      : T18 extends Constructor<any>
        ? InstanceType<T18>
        : never,
    T19 extends Maybe<infer X19 extends abstract new (...args: any) => any>
      ? InstanceType<X19> | undefined
      : T19 extends Constructor<any>
        ? InstanceType<T19>
        : never,
    T20 extends Maybe<infer X20 extends abstract new (...args: any) => any>
      ? InstanceType<X20> | undefined
      : T20 extends Constructor<any>
        ? InstanceType<T20>
        : never,
    T21 extends Maybe<infer X21 extends abstract new (...args: any) => any>
      ? InstanceType<X21> | undefined
      : T21 extends Constructor<any>
        ? InstanceType<T21>
        : never,
    T22 extends Maybe<infer X22 extends abstract new (...args: any) => any>
      ? InstanceType<X22> | undefined
      : T22 extends Constructor<any>
        ? InstanceType<T22>
        : never,
    T23 extends Maybe<infer X23 extends abstract new (...args: any) => any>
      ? InstanceType<X23> | undefined
      : T23 extends Constructor<any>
        ? InstanceType<T23>
        : never,
    T24 extends Maybe<infer X24 extends abstract new (...args: any) => any>
      ? InstanceType<X24> | undefined
      : T24 extends Constructor<any>
        ? InstanceType<T24>
        : never,
    T25 extends Maybe<infer X25 extends abstract new (...args: any) => any>
      ? InstanceType<X25> | undefined
      : T25 extends Constructor<any>
        ? InstanceType<T25>
        : never,
    T26 extends Maybe<infer X26 extends abstract new (...args: any) => any>
      ? InstanceType<X26> | undefined
      : T26 extends Constructor<any>
        ? InstanceType<T26>
        : never,
    T27 extends Maybe<infer X27 extends abstract new (...args: any) => any>
      ? InstanceType<X27> | undefined
      : T27 extends Constructor<any>
        ? InstanceType<T27>
        : never,
    T28 extends Maybe<infer X28 extends abstract new (...args: any) => any>
      ? InstanceType<X28> | undefined
      : T28 extends Constructor<any>
        ? InstanceType<T28>
        : never,
    T29 extends Maybe<infer X29 extends abstract new (...args: any) => any>
      ? InstanceType<X29> | undefined
      : T29 extends Constructor<any>
        ? InstanceType<T29>
        : never,
    T30 extends Maybe<infer X30 extends abstract new (...args: any) => any>
      ? InstanceType<X30> | undefined
      : T30 extends Constructor<any>
        ? InstanceType<T30>
        : never,
    T31 extends Maybe<infer X31 extends abstract new (...args: any) => any>
      ? InstanceType<X31> | undefined
      : T31 extends Constructor<any>
        ? InstanceType<T31>
        : never,
    T32 extends Maybe<infer X32 extends abstract new (...args: any) => any>
      ? InstanceType<X32> | undefined
      : T32 extends Constructor<any>
        ? InstanceType<T32>
        : never,
  ][];
};
