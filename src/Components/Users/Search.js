import React, { useState, useContext } from "react";
import GithubContext from "../../Context/GithubContext/Context";

const Search = () => {
  const [text, setText] = useState("");
  let stateData = useContext(GithubContext);
  let { searchUsers } = stateData;

  let handleChange = (e) => {
    setText(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={handleChange}
        />
        <input
          type="Submit"
          value="Search"
          className="btn btn-dark btn-block"
          readOnly
        />
      </form>
    </div>
  );
};

export default Search;
