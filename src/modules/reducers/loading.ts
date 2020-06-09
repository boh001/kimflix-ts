type LoadingAction = ReturnType<typeof loading>;
type LoadingState = {
  loading: boolean;
};

const LOADING = "LOADING" as const;

const loading = (payload: boolean) => ({ type: LOADING, payload });

const InitState: LoadingState = {
  loading: true,
};
export {};

export default (state: LoadingState = InitState, action: LoadingAction) => {
  const { payload } = action;
  switch (action.type) {
    case LOADING:
      return { loading: payload };
    default:
      console.log("loading error");
      return state;
  }
};
