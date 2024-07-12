import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max ",
      image: "https://images.pexel.com/",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
