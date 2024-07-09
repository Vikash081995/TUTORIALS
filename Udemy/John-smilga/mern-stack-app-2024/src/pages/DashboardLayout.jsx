import { useState, useContext, createContext } from "react";

import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { checkDefaulttheme } from "./../App";

const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
const DashboardLayout = () => {
  const user = { name: "john" };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarktheme, setIsDarkTheme] = useState(checkDefaulttheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarktheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = (async = () => {
    console.log("logout user");
  });

  return (
    <DashboardContext.Provider
      value={{
        user,
        isDarktheme,
        toggleDarkTheme,
        showSidebar,
        toggleSidebar,
        logoutUser
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page"></div>
          </div>
        </main>
        <Outlet />
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
