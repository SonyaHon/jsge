export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(from: number, to: number, factor: number): number {
  return from * (1 - factor) + to * factor;
}
