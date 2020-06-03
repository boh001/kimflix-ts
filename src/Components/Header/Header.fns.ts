import { useDispatch } from "react-redux";
import { onScroll, onSearch } from "modules/reducers/header";
import ucb from "hooks/ucb";

const dispatch = useDispatch();

export const wheelScroll = ucb(() => dispatch(onScroll()));
export const clickSearch = ucb(() => dispatch(onSearch()));
