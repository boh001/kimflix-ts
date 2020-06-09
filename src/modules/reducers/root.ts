import { combineReducers } from "redux";
import header from "./header";
import loading from "./loading";

const rootReducer = combineReducers({ loading, header });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
