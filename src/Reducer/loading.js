const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

const startLoading = (payload) => ({ type: START_LOADING, payload });
const finishLoading = (payload) => ({ type: FINISH_LOADING, payload });

const initialState = {};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
  }
};

export { startLoading, finishLoading, loadingReducer };
