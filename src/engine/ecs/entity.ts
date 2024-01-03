import { Constructor } from "../types";
import { World } from "./world";

export class Entity {
  constructor(
    public readonly id: number,
    private readonly world: World
  ) {}

  destroy() {
    this.world.destroy(this);
  }

  addComponent(...components: any[]) {
    this.world.addComponent(this, ...components);
  }

  getComponent<T>(component: Constructor<T>): T | undefined {
    return this.world.getComponent(this, component);
  }

  removeComponent(...components: Constructor<any>[]): void {
    this.world.removeComponent(this, ...components);
  }
}
