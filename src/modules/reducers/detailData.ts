import produce from "immer";
import { createAction, handleActions } from "redux-actions";

type DataAction =
  | ReturnType<typeof onDetail>
  | ReturnType<typeof onSimilar>
  | ReturnType<typeof onCast>;

type Detail = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
};
type DataState = {
  detail: Detail[];
  similar: Detail[];
  cast: Detail[];
};

const ONDETAIL = "ONDETAIL" as const;
const ONSIMILAR = "ONSIMILAR" as const;
const ONCAST = "ONCAST" as const;

export const onDetail = createAction(ONDETAIL, (payload: Detail[]) => payload);
export const onSimilar = createAction(
  ONSIMILAR,
  (payload: Detail[]) => payload
);
export const onCast = createAction(ONCAST, (payload: Detail[]) => payload);

const initialState: DataState = {
  detail: [],
  similar: [],
  cast: [],
};
export default handleActions<DataState, any>(
  {
    [ONDETAIL]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.detail = payload;
      }),

    [ONSIMILAR]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.similar = payload;
      }),

    [ONCAST]: (state, { payload }: DataAction) =>
      produce(state, (draft) => {
        draft.cast = payload;
      }),
  },
  initialState
);
