import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUsers from "../Redux/Action/Users";
import CardComponent from "./CardComponent";

const UserComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "Leanne Graham",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
          },
        },
      ])
    );
  }, []);

  return (
    <>
      {users.length > 0 && users.map((user) => <h1>{user.name}</h1>)}
      {users.length === 0 && <p>No users available!</p>}
    </>
  );
};

export default UserComponent;
