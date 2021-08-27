import { useReducer } from "react";
import Context from "./Context";
import axios from "axios";
import reducer from "./GithubReducer";
import { SET_LOADING, SET_USERS, SET_USER, SET_REPOS } from "../Types";

const GithubState = (props) => {
  let initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  };

  let [state, dispatch] = useReducer(reducer, initialState);

  let getUsers = async () => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      let res = await axios.get("https://api.github.com/users");
      dispatch({ type: SET_USERS, payload: res.data });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  let searchUsers = async (search) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      let res = await axios.get(
        `https://api.github.com/search/users?q=${search}`
      );
      dispatch({ type: SET_USERS, payload: res.data.items });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  let getUserInfo = async (user) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      let res = await axios.get(`https://api.github.com/users/${user}`);
      let repos = await axios.get(`https://api.github.com/users/${user}/repos`);
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({ type: SET_REPOS, payload: repos.data });
      dispatch({ type: SET_LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  return (
    <Context.Provider value={{ ...state, getUsers, searchUsers, getUserInfo }}>
      {props.children}
    </Context.Provider>
  );
};

export default GithubState;
