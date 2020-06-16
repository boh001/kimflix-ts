type VideoAction =
  | ReturnType<typeof onPlay>
  | ReturnType<typeof onSound>
  | ReturnType<typeof onEnd>;
type VideoState = {
  play: boolean;
  end: boolean;
  sound: boolean;
};
const ONPLAY = "ONPLAY" as const;
const ONSOUND = "ONSOUND" as const;
const ONEND = "ONEND" as const;

export const onPlay = (payload: boolean) => ({ type: ONPLAY, payload });
export const onSound = (payload: boolean) => ({ type: ONSOUND, payload });
export const onEnd = (payload: boolean) => ({ type: ONEND, payload });

const initalState: VideoState = {
  play: false,
  end: false,
  sound: false,
};

export default (state: VideoState = initalState, action: VideoAction) => {
  const { payload } = action;
  switch (action.type) {
    case ONPLAY:
      return { ...state, play: payload };
    case ONSOUND:
      return { ...state, end: payload };
    case ONEND:
      return { ...state, sound: payload };
    default:
      return state;
  }
};
