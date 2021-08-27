import React, { useEffect, useContext } from "react";
import Card from "./Card";
import Search from "./Search";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/GithubContext/Context";

const Users = () => {
  let stateData = useContext(GithubContext);
  let { getUsers, users, loading, searchUsers } = stateData;
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  };
  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div>
      <Search searchUsers={searchUsers} />
      {loading ? (
        <div style={loadingStyle}>
          <Spinner />
        </div>
      ) : (
        <div style={userStyle}>
          {users.map((ele) => {
            return (
              <Card
                avatar_url={ele.avatar_url}
                login={ele.login}
                key={ele.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
