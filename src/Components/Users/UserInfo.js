import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Repos from "./Repos";
import GithubContext from "../../Context/GithubContext/Context";

const UserInfo = (props) => {
  let stateData = useContext(GithubContext);
  let { getUserInfo, user, repos, loading } = stateData;
  useEffect(() => {
    let user = props.match.params.userId;
    getUserInfo(user);
  }, [props.match.params.userId]);

  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return loading ? (
    <div style={loadingStyle}>
      <Spinner />
    </div>
  ) : (
    <div>
      <Link to="/" className="btn btn-light">
        Back to Home
      </Link>
      Hireable:{" "}
      {user.hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={user.avatar_url}
            alt="profile img"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h2>{user.login}</h2>
          <p>{user.location && `Location: ${user.location}`}</p>
        </div>
        <div>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a
            href={user.html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noreferrer"
          >
            Github Profile
          </a>
          <ul>
            <li>
              {user.login && (
                <>
                  <strong>Username: </strong>
                  {user.login}
                </>
              )}
            </li>
            <li>
              {user.company && (
                <>
                  <strong>Work: </strong>
                  {user.company}
                </>
              )}
            </li>
            <li>
              {user.blog && (
                <>
                  <strong>Blog: </strong>
                  {user.blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {user.followers}</div>
        <div className="badge badge-success">Following: {user.following}</div>
        <div className="badge badge-light">
          Public Repos: {user.public_repos}
        </div>
        <div className="badge badge-primary">
          Public Gists: {user.public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default UserInfo;
