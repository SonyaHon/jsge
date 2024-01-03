import { JSGEShapeDrawingPlugin } from "./jsge.shape-drawing.plugin";
import { JSGEVelocityPlugin } from "./jsge.velocity.plugin";
import { JSGEWindowNativePlugin } from "./jsge.window-native.plugin";

export const DefaultPlugins = [
  new JSGEWindowNativePlugin(),
  new JSGEShapeDrawingPlugin(),
  new JSGEVelocityPlugin(),
];
