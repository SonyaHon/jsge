import { Thenable } from "../types";
import { JSGEEngine } from "./jsge.engine";

export abstract class JSGEPlugin {
    abstract register(engine: JSGEEngine): Thenable<void>;
}