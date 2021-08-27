import { SET_LOADING, SET_USERS, SET_USER, SET_REPOS } from "../Types";

let reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: payload,
      };
    case SET_USER:
      return {
        ...state,
        user: payload,
      };
    case SET_REPOS:
      return {
        ...state,
        repos: payload,
      };
    default:
      return state;
  }
};

export default reducer;
