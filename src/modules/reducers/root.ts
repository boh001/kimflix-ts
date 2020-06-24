import { combineReducers } from "redux";
import header from "./header";
import loading from "./loading";
import video from "./video";
import mainData from "./mainData";
import detailData from "./detailData";

const rootReducer = combineReducers({
  loading,
  header,
  video,
  mainData,
  detailData,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
