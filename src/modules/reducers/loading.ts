type LoadingAction = ReturnType<typeof onLoad>;
type LoadingState = {
  loading: boolean;
};

const ONLOAD = "ONLOAD" as const;

export const onLoad = (payload: boolean) => ({ type: ONLOAD, payload });

const initState: LoadingState = {
  loading: true,
};

export default (state: LoadingState = initState, action: LoadingAction) => {
  const { payload } = action;
  switch (action.type) {
    case ONLOAD:
      return { loading: payload };
    default:
      console.log("loading error");
      return state;
  }
};
