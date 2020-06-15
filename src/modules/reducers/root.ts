import { combineReducers } from "redux";
import header from "./header";
import loading from "./loading";
import data from "./data";

const rootReducer = combineReducers({ loading, header, data });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
