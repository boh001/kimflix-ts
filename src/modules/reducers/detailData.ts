import produce from "immer";
import { createAction, handleActions } from "redux-actions";

type DetailDataAction = ReturnType<typeof onDetail>;

type SimilarDataAction = ReturnType<typeof onSimilar>;

type CastDataAction = ReturnType<typeof onCast>;

export type Detail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: any[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Similar = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type Cast = {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
};
type DetailsDataState = {
  detail: Detail;
  similar: Similar[];
  cast: Cast[];
};

const ONDETAIL = "ONDETAIL" as const;
const ONSIMILAR = "ONSIMILAR" as const;
const ONCAST = "ONCAST" as const;

export const onDetail = createAction(ONDETAIL, (payload: Detail) => payload);
export const onSimilar = createAction(
  ONSIMILAR,
  (payload: Similar[]) => payload
);
export const onCast = createAction(ONCAST, (payload: Cast[]) => payload);

const initialState: DetailsDataState = {
  detail: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  similar: [],
  cast: [],
};
export default handleActions<DetailsDataState, any>(
  {
    [ONDETAIL]: (state, { payload }: DetailDataAction) =>
      produce(state, (draft) => {
        draft.detail = payload;
      }),

    [ONSIMILAR]: (state, { payload }: SimilarDataAction) =>
      produce(state, (draft) => {
        console.log(payload);

        draft.similar.concat(payload);
      }),

    [ONCAST]: (state, { payload }: CastDataAction) =>
      produce(state, (draft) => {
        draft.cast.concat(payload);
      }),
  },
  initialState
);
