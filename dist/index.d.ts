type Result<T, E> = {
    type: "success";
    value: T;
} | {
    type: "error";
    error: E;
};
declare function error<E>(error: E): {
    type: "error";
    error: E;
};
declare function success<T>(value: T): {
    type: "success";
    value: T;
};

export { type Result, error, success };
