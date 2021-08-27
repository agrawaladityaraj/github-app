import { createContext } from "react";

let GithubContext = createContext({
  users: [],
  loading: false,
  user: {},
  repos: [],
});

export default GithubContext;
