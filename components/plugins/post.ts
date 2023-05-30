export const INITIAL_STATE = {
  loading: false,
  error: false,
  post: null,
};

export const post = (
  state: {
    loading?: boolean;
    error?: boolean;
    post?: any;
  },
  action: {
    type?: "FETCH_START" | "FETCH_SUCCESS" | "FETCH_ERROR";
    payload?: any;
  },
) => {
  switch (action.type) {
    case action.type = "FETCH_START":
      return {
        loading: true,
        error: false,
        post: null,
      };
    case action.type = "FETCH_SUCCESS":
      return {
        loading: false,
        error: false,
        post: action.payload,
      };
    case action.type = "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        post: action.payload,
      };
    default:
      return state;
  }
};
