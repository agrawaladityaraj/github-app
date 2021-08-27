import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return repos.map((ele) => {
    return <RepoItem {...ele} key={ele.id} />;
  });
};

export default Repos;
