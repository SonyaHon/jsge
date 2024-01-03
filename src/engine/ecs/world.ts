import { nanoid } from "nanoid";
import { Constructor, JSGEErrno, JSGEError } from "../types";
import { Commands, Maybe, QueryElement, Schedule, System } from "./types";
import { Entity } from "./entity";

export class World {
  private readonly resources = new Map();
  private registers = new Map<any, string[]>();
  private entities = new Set<string>();
  private componentData = new Map<Constructor<any>, Map<string, any>>();

  public commands: Commands = {
    setResource: this.setResource.bind(this),
    getResource: this.getResource.bind(this),
    spawn: this.spawn.bind(this),
    destroy: this.destroy.bind(this),
    addComponent: this.addComponent.bind(this),
    removeComponent: this.removeComponent.bind(this),
    getComponent: this.getComponent.bind(this),
    query: this.query.bind(this),
  };

  public systems: Record<Schedule, System[]> = {
    [Schedule.Startup]: [] as System[],
    [Schedule.Update]: [] as System[],
    [Schedule.Render]: [] as System[],
    [Schedule.Teardown]: [] as System[],
  };

  getResource<T>(resource: Constructor<T>): T {
    const result = this.resources.get(resource);
    if (!result) {
      throw new JSGEError(JSGEErrno.RESOURCE_NOT_FOUND, {
        resource: resource.name,
      });
    }
    return result;
  }

  setResource(resource: any) {
    this.resources.set(resource.constructor, resource);
  }

  addSystems(schedule: Schedule, systems: System[]) {
    this.systems[schedule].push(...systems);
    return this;
  }

  spawn(...components: any[]) {
    const eid = nanoid();
    for (const component of components) {
      const ctor = component.constructor;
      if (!this.componentData.has(ctor)) {
        this.componentData.set(ctor, new Map());
      }
      this.componentData.get(ctor)!.set(eid, component);
    }
    this.entities.add(eid);
    this.pushToRegisters(components, eid);
    return new Entity(eid, this);
  }

  private pushToRegisters(components: Constructor<any>[], eid: string) {
    for (const q of this.registers.keys()) {
      const exclude = q.exclude || [];
      const query = q.query;
      if (exclude.some((c: Constructor<any>) => components.includes(c))) {
        continue;
      }
      if (
        query.some(
          (c: Constructor<any> | Maybe<Constructor<any>>) =>
            !(c instanceof Maybe) && !components.includes(c)
        )
      ) {
        continue;
      }
      this.registers.get(q)!.push(eid);
    }
  }

  private buildRegister(opts: {
    query: (Constructor<any> | Maybe<Constructor<any>>)[];
    exclude: Constructor<any>[];
  }) {
    const eids = [];
    const excluded = opts.exclude || [];
    const excludedEntities = new Set(
      ...excluded.flatMap(
        (c: Constructor<any>) => this.componentData.get(c)?.keys() || []
      )
    );
    for (const eid of this.entities) {
      if (excludedEntities.has(eid)) {
        continue;
      }

      if (
        opts.query.every((c: Constructor<any> | Maybe<Constructor<any>>) => {
          if (c instanceof Maybe || c === Entity) {
            return true;
          } else {
            return this.componentData.get(c)?.has(eid);
          }
        })
      ) {
        eids.push(eid);
      }
    }
    this.registers.set(opts, eids);
  }

  private fetch(opts: {
    query: (Constructor<any> | Maybe<Constructor<any>>)[];
    exclude: Constructor<any>[];
  }) {
    const eids = this.registers.get(opts)!;
    const result: any[] = [];
    for (const eid of eids) {
      const entityResult = Array(opts.query.length);
      for (let i = 0; i < opts.query.length; i++) {
        let componentCtor = opts.query[i];
        if (componentCtor === Entity) {
          entityResult[i] = new Entity(eid, this);
          continue;
        }
        if (componentCtor instanceof Maybe) {
          componentCtor = componentCtor.value;
        }
        entityResult[i] = this.componentData.get(componentCtor)?.get(eid);
      }
      result.push(entityResult);
    }
    return result;
  }

  query(query: any[], exclude: any[]): any[] {
    const q = { query, exclude };
    if (!this.registers.has(q)) {
      this.registers.set(q, []);
      this.buildRegister(q);
    }
    return this.fetch(q);
  }

  addComponent(entity: Entity, ...components: any[]) {
    for (const component of components) {
      const ctor = component.constructor;
      if (!this.componentData.has(ctor)) {
        this.componentData.set(ctor, new Map());
      }
      this.componentData.get(ctor)!.set(entity.id, component);
    }

    const entityComponents: Constructor<any>[] = [];
    this.componentData.forEach((value, key) => {
      if (value.has(entity.id)) {
        entityComponents.push(key);
      }
    });

    this.registers.forEach((register, q) => {
      const exclude = q.exclude || [];
      const query = q.query;

      if (exclude.some((c: Constructor<any>) => entityComponents.includes(c))) {
        const index = register.indexOf(entity.id);
        if (index >= 0) {
          register.splice(index, 1);
        }
        return;
      }
      if (
        query.some(
          (c: Constructor<any> | Maybe<Constructor<any>>) =>
            !(c instanceof Maybe) && !entityComponents.includes(c)
        )
      ) {
        const index = register.indexOf(entity.id);
        if (index >= 0) {
          register.splice(index, 1);
        }
        return;
      }
      register.push(entity.id);
    });
  }

  removeComponent(entity: Entity, ...components: any[]) {
    for (const ctor of components) {
      this.componentData.get(ctor)?.delete(entity.id);
    }

    const entityComponents: Constructor<any>[] = [];
    this.componentData.forEach((value, key) => {
      if (value.has(entity.id)) {
        entityComponents.push(key);
      }
    });

    this.registers.forEach((register, q) => {
      const exclude = q.exclude || [];
      const query = q.query;

      if (exclude.some((c: Constructor<any>) => entityComponents.includes(c))) {
        const index = register.indexOf(entity.id);
        if (index >= 0) {
          register.splice(index, 1);
        }
        return;
      }
      if (
        query.some(
          (c: Constructor<any> | Maybe<Constructor<any>>) =>
            !(c instanceof Maybe) && !entityComponents.includes(c)
        )
      ) {
        const index = register.indexOf(entity.id);
        if (index >= 0) {
          register.splice(index, 1);
        }
        return;
      }
      register.push(entity.id);
    });
  }

  getComponent<T>(entity: Entity, component: Constructor<T>): T | undefined {
    return this.componentData.get(component)?.get(entity.id);
  }

  destroy(entity: Entity) {
    this.entities.delete(entity.id);
    for (const register of this.registers.keys()) {
      const reg = this.registers.get(register);
      if (reg) {
        const index = reg.indexOf(entity.id);
        if (index >= 0) {
          reg.splice(reg.indexOf(entity.id), 1);
        }
      }
    }
    this.componentData.forEach((value) => {
      value.delete(entity.id);
    });
  }
}
