type HeaderAction = ReturnType<typeof onScroll> | ReturnType<typeof onSearch>;
type HeaderState = {
  scroll: boolean;
  search: boolean;
};

const SCROLL = "SCROLL" as const;
const SEARCH = "SEARCH" as const;

export const onScroll = () => ({
  type: SCROLL,
});
export const onSearch = () => ({
  type: SEARCH,
});

const initalState: HeaderState = {
  scroll: false,
  search: false,
};
export default (state: HeaderState = initalState, action: HeaderAction) => {
  switch (action.type) {
    case SCROLL:
      return !state;
    case SEARCH:
      return !state;
    default:
      console.log("header");
      return state;
  }
};
