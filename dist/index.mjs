// src/index.ts
function error(error2) {
  return { type: "error", error: error2 };
}
function success(value) {
  return { type: "success", value };
}
export {
  error,
  success
};
//# sourceMappingURL=index.mjs.map