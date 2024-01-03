import { DefaultPlugins, JSGEEngine, Schedule, Window } from "../../engine";

new JSGEEngine()
  .addPlugin(...DefaultPlugins)
  .addSystem(Schedule.Startup, (cmds) => {
    const win = cmds.getResource(Window);
    win.setDimensions(1280, 720);
    win.setTitle("Balls Demo");
    win.setRenderFps(true);
  })
  .run();
