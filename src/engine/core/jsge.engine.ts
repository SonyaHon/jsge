import EventEmitter from "eventemitter3";
import { JSGELogger } from "../logger";
import { JSGEErrno, JSGEError } from "../types";
import { JSGEPlugin } from "./jsge.plugin";
import { World } from "../ecs/world";
import { Schedule, System } from "../ecs/types";

export class JSGEEngine extends EventEmitter {
  private readonly unregisteredPlugins: JSGEPlugin[] = [];
  private runner: null | (() => void) = null;

  public readonly ecs = new World();

  setRunner(runner: () => void) {
    if (this.runner !== null) {
      JSGELogger.warn("Runner is being redefined.");
    }
    this.runner = runner;
  }

  /**
   *  Register one or more plugins
   */
  addPlugin(...plugins: JSGEPlugin[]): JSGEEngine {
    if (plugins.length === 0) {
      throw new JSGEError(JSGEErrno.JSGE_EMPTY_ARRAY);
    }

    this.unregisteredPlugins.push(...plugins);
    return this;
  }

  addSystem(schedule: Schedule, ...systems: System[]): JSGEEngine {
    this.ecs.addSystems(schedule, systems);
    return this;
  }

  /**
   *  Start's the application
   */
  run(): JSGEEngine {
    this.unregisteredPlugins.forEach((plugin) => {
      const now = performance.now();
      plugin.register(this);
      JSGELogger.info(
        `${plugin.constructor.name} plugin is registered - ${
          performance.now() - now
        }`
      );
    });

    if (!this.runner) {
      throw new JSGEError(JSGEErrno.JSGE_NO_RUNNER_SET);
    }
    JSGELogger.info("All plugins are registered.");
    this.runner();
    return this;
  }
}
