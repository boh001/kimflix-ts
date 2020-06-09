import { useDispatch } from "react-redux";
import { onScroll, onSearch } from "modules/reducers/header";
import { useCallback } from "react";

// export const useWheelScroll = () => {
//   const dispatch = useDispatch();
//   return useCallback(() => dispatch(onScroll()), []);
// };
// export const useClickSearch = () => {
//   const dispatch = useDispatch();
//   return useCallback(() => dispatch(onSearch()), []);
// };
