export function createRange(length: number): number[];
export function createRange<T>(length: number, mapFn: (index: number) => T): T[];
export function createRange<T = number>(
  length: number,
  mapFn?: (index: number) => T
): T[] {
  return Array.from({ length }, (_, i) => (mapFn ? mapFn(i) : (i as T)));
}
