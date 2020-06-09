type HeaderAction = ReturnType<typeof onScroll> | ReturnType<typeof onSearch>;
type HeaderState = {
  scroll: boolean;
  search: boolean;
};

const SCROLL = "SCROLL" as const;
const SEARCH = "SEARCH" as const;

export const onScroll = (payload: boolean) => ({
  type: SCROLL,
  payload,
});
export const onSearch = (payload: boolean) => ({
  type: SEARCH,
  payload,
});

const initalState: HeaderState = {
  scroll: false,
  search: false,
};

export default (state: HeaderState = initalState, action: HeaderAction) => {
  const { payload } = action;
  switch (action.type) {
    case SCROLL:
      return { ...state, scroll: payload };
    case SEARCH:
      return { ...state, search: payload };
    default:
      console.log("header");
      return state;
  }
};
