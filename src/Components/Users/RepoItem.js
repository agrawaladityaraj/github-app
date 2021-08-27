import React from "react";

const RepoItem = ({ name, html_url }) => {
  return (
    <div className="card">
      <h3>
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
