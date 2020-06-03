import { useCallback } from "react";

export default (fns: Function, e?: any, deps?: any) =>
  useCallback((e) => fns(e), [deps]);
