import { useState, useEffect } from "react";

export const includeUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};
