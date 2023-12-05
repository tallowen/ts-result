export type Result<T, E> =
  | { type: "success"; value: T }
  | { type: "error"; error: E };

export function error<E>(error: E): { type: "error"; error: E } {
  return { type: "error", error };
}

export function success<T>(value: T): { type: "success"; value: T } {
  return { type: "success", value };
}
