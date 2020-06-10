type Main = {
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
type Details = {
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
  main: {
    nowPlaying: Main;
    upcoming: Main;
    popular: Main;
    latest: Main;
  };
  details: {
    detail: Details;
    similar: Details;
    cast: Details;
  };
};

type DataAction = ReturnType<typeof onData> | ReturnType<typeof onDetail>;

const mainContents = {
  popularity: 0,
  vote_count: 0,
  video: false,
  poster_path: "",
  id: 0,
  adult: false,
  backdrop_path: "",
  original_language: "",
  original_title: "",
  genre_ids: [],
  title: "",
  vote_average: 0,
  overview: "",
  release_date: "",
};
const detailContents = {
  adult: false,
  backdrop_path: "",
  genre_ids: [],
  id: 0,
  original_language: "",
  original_title: "",
  overview: "",
  poster_path: "",
  release_date: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
  popularity: 0,
};

const initialState: DataState = {
  main: {
    nowPlaying: mainContents,
    upcoming: mainContents,
    popular: mainContents,
    latest: mainContents,
  },
  details: {
    detail: detailContents,
    similar: detailContents,
    cast: detailContents,
  },
};

const ONDATA = "ONDATA" as const;
const ONDETAIL = "ONDETAIL" as const;

export const onData = (payload: any) => ({ type: ONDATA, payload });
export const onDetail = (payload: any) => ({ type: ONDETAIL, payload });

export default (state: DataState = initialState, action: DataAction) => {
  const { payload } = action;
  switch (action.type) {
    case ONDATA:
      return;
  }
};
