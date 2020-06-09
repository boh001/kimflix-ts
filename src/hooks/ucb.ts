import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useCallDispatch = (type: any) => {
  const dispatch = useDispatch();
  console.log(type);

  return useCallback(() => dispatch(type), [type]);
};
