import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useCallDispatch = (type: any) => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(type), []);
};
