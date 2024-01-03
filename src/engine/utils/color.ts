import * as raylib from "raylib";
import { JSGEErrno, JSGEError } from "../types";
import { clamp, lerp } from "./math";

const colorChache = new Map();

export class Color implements raylib.Color {
  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number
  ) {}

  static lerp(from: Color, to: Color, factor: number): Color {
    return new Color(
      clamp(lerp(from.r, to.r, factor), 0, 255),
      clamp(lerp(from.g, to.g, factor), 0, 255),
      clamp(lerp(from.b, to.b, factor), 0, 255),
      clamp(lerp(from.a, to.a, factor), 0, 255)
    );
  }

  lerp(to: Color, factor: number): Color {
    return new Color(
      clamp(lerp(this.r, to.r, factor), 0, 255),
      clamp(lerp(this.g, to.g, factor), 0, 255),
      clamp(lerp(this.b, to.b, factor), 0, 255),
      clamp(lerp(this.a, to.a, factor), 0, 255)
    );
  }

  lerpMut(to: Color, factor: number) {
    this.r = clamp(lerp(this.r, to.r, factor), 0, 255);
    this.g = clamp(lerp(this.g, to.g, factor), 0, 255);
    this.b = clamp(lerp(this.b, to.b, factor), 0, 255);
    this.a = clamp(lerp(this.a, to.a, factor), 0, 255);
  }

  static fromRGBAObj(color: raylib.Color): Color {
    const cached = colorChache.get(color);
    if (cached) {
      return cached;
    }

    const c = new Color(color.r, color.g, color.b, color.a ?? 255);
    colorChache.set(color, c);
    return c;
  }

  static fromHex(color: string): Color {
    const cached = colorChache.get(color);
    if (cached) {
      return cached;
    }

    let result: [number, number, number, number] = [0, 0, 0, 255];
    switch (color.length) {
      case 4:
        result = [
          parseInt(`${color[1]}${color[1]}`, 16),
          parseInt(`${color[2]}${color[2]}`, 16),
          parseInt(`${color[3]}${color[3]}`, 16),
          255,
        ] as any;
        break;
      case 5:
        result = [
          parseInt(`${color[1]}${color[1]}`, 16),
          parseInt(`${color[2]}${color[2]}`, 16),
          parseInt(`${color[3]}${color[3]}`, 16),
          parseInt(`${color[4]}${color[4]}`, 16),
        ] as any;
        break;
      case 7:
        result = [
          parseInt(`${color[1]}${color[2]}`, 16),
          parseInt(`${color[3]}${color[4]}`, 16),
          parseInt(`${color[5]}${color[6]}`, 16),
          255,
        ] as any;
        break;
      case 9:
        result = [
          parseInt(`${color[1]}${color[2]}`, 16),
          parseInt(`${color[3]}${color[4]}`, 16),
          parseInt(`${color[5]}${color[6]}`, 16),
          parseInt(`${color[7]}${color[8]}`, 16),
        ] as any;
        break;
      default:
        throw new JSGEError(JSGEErrno.JSGE_STRING_IS_INVALID_HEX, {
          passedColor: color,
        });
    }

    const c = new Color(...result);
    colorChache.set(color, c);
    return c;
  }

  static fromI64(color: number): Color {
    const cached = colorChache.get(color);
    if (cached) {
      return cached;
    }

    const a = (color >> 0) & 0xff;
    const b = (color >> 8) & 0xff;
    const g = (color >> 16) & 0xff;
    const r = (color >> 24) & 0xff;

    const c = new Color(r, g, b, a);
    colorChache.set(color, c);
    return c;
  }

  intoJSONString(): string {
    return JSON.stringify(this);
  }

  intoHexString(ignoreAlpha = true): string {
    const c = `#${this.r.toString(16).padStart(2, "0")}${this.g
      .toString(16)
      .padStart(2, "0")}${this.b.toString(16).padStart(2, "0")}`;
    if (ignoreAlpha) {
      return c;
    }
    return c + `${this.a.toString(16).padStart(2, "0")}`;
  }

  brighten(factor = 0.2): Color {
    const coef = 255 * factor;
    return new Color(
      clamp(coef + this.r, 0, 255),
      clamp(coef + this.g, 0, 255),
      clamp(coef + this.b, 0, 255),
      clamp(coef + this.a, 0, 255)
    );
  }

  brightenMut(factor = 0.2) {
    const coef = 255 * factor;
    this.r = clamp(coef + this.r, 0, 255);
    this.g = clamp(coef + this.g, 0, 255);
    this.b = clamp(coef + this.b, 0, 255);
    this.a = clamp(coef + this.a, 0, 255);
  }

  darken(factor = 0.2): Color {
    const coef = 255 * factor;
    return new Color(
      clamp(coef - this.r, 0, 255),
      clamp(coef - this.g, 0, 255),
      clamp(coef - this.b, 0, 255),
      clamp(coef - this.a, 0, 255)
    );
  }

  darkenMut(factor = 0.2) {
    const coef = 255 * factor;
    this.r = clamp(coef - this.r, 0, 255);
    this.g = clamp(coef - this.g, 0, 255);
    this.b = clamp(coef - this.b, 0, 255);
    this.a = clamp(coef - this.a, 0, 255);
  }

  static get Lightgray() {
    return Color.fromRGBAObj(raylib.LIGHTGRAY);
  }
  static get Gray() {
    return Color.fromRGBAObj(raylib.GRAY);
  }
  static get Darkgray() {
    return Color.fromRGBAObj(raylib.DARKGRAY);
  }
  static get Yellow() {
    return Color.fromRGBAObj(raylib.YELLOW);
  }
  static get Gold() {
    return Color.fromRGBAObj(raylib.GOLD);
  }
  static get Orange() {
    return Color.fromRGBAObj(raylib.ORANGE);
  }
  static get Pink() {
    return Color.fromRGBAObj(raylib.PINK);
  }
  static get Red() {
    return Color.fromRGBAObj(raylib.RED);
  }
  static get Maroon() {
    return Color.fromRGBAObj(raylib.MAROON);
  }
  static get Green() {
    return Color.fromRGBAObj(raylib.GREEN);
  }
  static get Lime() {
    return Color.fromRGBAObj(raylib.LIME);
  }
  static get Darkgreen() {
    return Color.fromRGBAObj(raylib.DARKGREEN);
  }
  static get Skyblue() {
    return Color.fromRGBAObj(raylib.SKYBLUE);
  }
  static get Blue() {
    return Color.fromRGBAObj(raylib.BLUE);
  }
  static get Darkblue() {
    return Color.fromRGBAObj(raylib.DARKBLUE);
  }
  static get Purple() {
    return Color.fromRGBAObj(raylib.PURPLE);
  }
  static get Violet() {
    return Color.fromRGBAObj(raylib.VIOLET);
  }
  static get Darkpurple() {
    return Color.fromRGBAObj(raylib.DARKPURPLE);
  }
  static get Beige() {
    return Color.fromRGBAObj(raylib.BEIGE);
  }
  static get Brown() {
    return Color.fromRGBAObj(raylib.BROWN);
  }
  static get Darkbrown() {
    return Color.fromRGBAObj(raylib.DARKBROWN);
  }
  static get White() {
    return Color.fromRGBAObj(raylib.WHITE);
  }
  static get Black() {
    return Color.fromRGBAObj(raylib.BLACK);
  }
  static get Blank() {
    return Color.fromRGBAObj(raylib.BLANK);
  }
  static get Magenta() {
    return Color.fromRGBAObj(raylib.MAGENTA);
  }
  static get Raywhite() {
    return Color.fromRGBAObj(raylib.RAYWHITE);
  }
}
