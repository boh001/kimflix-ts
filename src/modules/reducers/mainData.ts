import produce from "immer";
import { createAction, handleActions } from "redux-actions";

type DataAction =
  | ReturnType<typeof onNowPlaying>
  | ReturnType<typeof onUpcoming>
  | ReturnType<typeof onPopular>;

export type Main = {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: string[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
};

type DataState = {
  nowPlaying: Main[];
  upcoming: Main[];
  popular: Main[];
};
const ONNOWPLAYING = "ONNOWPLAYING" as const;
const ONUPCOMING = "ONUPCOMING" as const;
const ONPOPULAR = "ONPOPULAR" as const;

export const onNowPlaying = createAction(
  ONNOWPLAYING,
  (payload: Main[]) => payload
);
export const onUpcoming = createAction(
  ONUPCOMING,
  (payload: Main[]) => payload
);
export const onPopular = createAction(ONPOPULAR, (payload: Main[]) => payload);

const initialState: DataState = {
  nowPlaying: [],
  upcoming: [],
  popular: [],
};
export default handleActions<DataState, any>(
  {
    [ONNOWPLAYING]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.nowPlaying = payload;
      }),
    [ONUPCOMING]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.upcoming = payload;
      }),

    [ONPOPULAR]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.popular = payload;
      }),
  },
  initialState
);
