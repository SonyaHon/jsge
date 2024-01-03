import {
  Circle,
  DefaultPlugins,
  JSGEEngine,
  Schedule,
  Shape,
  Transform2D,
  Vector2D,
  Velocity,
  Window,
  rng,
} from "../../engine";
import { Layer } from "../../engine/jsge.components";

function ballBundle(window: Window) {
  return [
    new Transform2D({
      position: new Vector2D(window.width / 2, window.height / 2),
    }),
    new Shape({
      shape: new Circle(rng.getUniformInterval(10, 20)),
      color: rng.getRandomColor(),
    }),
    new Layer(0),
    new Velocity(
      new Vector2D(rng.getUniformInterval(-5, 5), rng.getUniformInterval(-5, 5))
        .normalize()
        .mult(rng.getUniformInterval(100, 200))
    ),
  ];
}

new JSGEEngine()
  .addPlugin(...DefaultPlugins)
  .addSystem(Schedule.Startup, (cmds) => {
    const win = cmds.getResource(Window);
    win.setDimensions(1280, 720);
    win.setTitle("Balls Demo");
    win.setRenderFps(true);

    for (let i = 0; i < 10_000; i++) {
      cmds.spawn(...ballBundle(win));
    }
  })
  .addSystem(Schedule.Update, (cmds) => {
    const win = cmds.getResource(Window);
    for (const [transform, velocity] of cmds.query([Transform2D, Velocity])) {
      if (transform.position.x > win.width || transform.position.x < 0) {
        velocity.value.x *= -1;
      }
      if (transform.position.y > win.height || transform.position.y < 0) {
        velocity.value.y *= -1;
      }
    }
  })
  .run();
