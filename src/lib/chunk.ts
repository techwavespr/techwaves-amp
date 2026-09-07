export const chunk: <T>(arr: readonly T[], size: number) => T[][] = <T>(arr: readonly T[], size: number): T[][] => {
  if (!Array.isArray(arr) || size <= 0) return [];
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
};
