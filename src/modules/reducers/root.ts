import { combineReducers } from "redux";
import header from "./header";
import loading from "./loading";
import data from "./data";
import video from "./video";

const rootReducer = combineReducers({ loading, header, data, video });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
