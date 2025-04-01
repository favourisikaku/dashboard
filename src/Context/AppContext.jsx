import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const UserContext = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(true);

  const SideBarVisibility = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <AppContext.Provider
      value={{
        toggleSideBar,
        SideBarVisibility,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
