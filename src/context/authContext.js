import React, { useState } from "react";
const AuthContext = React.createContext({
  token: localStorage.getItem("authTokens"),
  lang: localStorage.getItem("language"),
  isLoggedIn: true,
  role: "",
  profileImageLink: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const intialToken = localStorage.getItem("authTokens");
  const [token, setToken] = useState(intialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("authTokens", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.clear();
  };

  const contextValue = {
    token: token,
    isLoggedIn: true, // userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
