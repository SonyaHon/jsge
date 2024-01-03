import { JSGEEngine } from "../core/jsge.engine";
import { JSGEPlugin } from "../core/jsge.plugin";
import { Thenable } from "../types";

import * as raylib from "raylib";
import { JSGEEvent } from "../events";
import { Color } from "../utils/color";
import { Schedule } from "../ecs/types";

export class Window {
  private _width: number;
  private _height: number;
  private _title: string;
  private _clearColor: Color = Color.Darkgray;
  private _shouldRenderFps = false;

  private isWindowInit = false;

  constructor(width: number, height: number, title: string) {
    this._width = width;
    this._height = height;
    this._title = title;
  }

  init() {
    this.isWindowInit = true;
  }

  setDimensions(width: number, height: number) {
    if (this.isWindowInit) {
      raylib.SetWindowSize(width, height);
    }
    this._width = width;
    this._height = height;
  }

  setTitle(title: string) {
    if (this.isWindowInit) {
      raylib.SetWindowTitle(title);
    }
    this._title = title;
  }

  setClearColor(color: Color) {
    this._clearColor = color;
  }

  setRenderFps(value: boolean) {
    this._shouldRenderFps = value;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get title() {
    return this._title;
  }

  get clearColor() {
    return this._clearColor;
  }

  get shouldRenderFps() {
    return this._shouldRenderFps;
  }
}

export class JSGEWindowNativePlugin extends JSGEPlugin {
  private isRunning = true;
  private engine?: JSGEEngine;

  register(engine: JSGEEngine): Thenable<void> {
    this.engine = engine;

    engine.ecs.setResource(new Window(800, 600, "JSGE Window"));

    engine.on(JSGEEvent.Exit, () => {
      this.isRunning = false;
    });

    engine.setRunner(this.runner.bind(this));
  }

  runner() {
    const win = this.engine!.ecs.getResource(Window)!;
    raylib.InitWindow(win.width, win.height, win.title);
    raylib.SetTargetFPS(60);
    win.init();

    for (const system of this.engine!.ecs.systems[Schedule.Startup]) {
      system(this.engine!.ecs.commands);
    }

    while (this.isRunning && !raylib.WindowShouldClose()) {
      for (const system of this.engine!.ecs.systems[Schedule.Update]) {
        system(this.engine!.ecs.commands);
      }

      raylib.BeginDrawing();
      raylib.ClearBackground(win.clearColor);

      if (win.shouldRenderFps) {
        raylib.DrawFPS(5, 5);
      }

      for (const system of this.engine!.ecs.systems[Schedule.Render]) {
        system(this.engine!.ecs.commands);
      }

      raylib.EndDrawing();
    }

    for (const system of this.engine!.ecs.systems[Schedule.Teardown]) {
      system(this.engine!.ecs.commands);
    }

    raylib.CloseWindow();
  }
}
