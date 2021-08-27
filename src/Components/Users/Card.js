/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ avatar_url, login }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="Profile Image"
        className="round-img"
        style={{ width: "120px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default Card;
