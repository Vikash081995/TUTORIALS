import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`).then(({ data }) => {
      let {
        rate: { remaining }
      } = data;
      setRequests(remaining);
    });
  };

  useEffect(() => {
    checkRequests();
  }, []);
  return (
    <GithubProvider.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubProvider.Provider>
  );
};

export { GithubProvider, GithubContext };
