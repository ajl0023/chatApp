import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./Chat";
import Join from "./Join";
import "./myApp.css";
import { UserContext } from "./UserContext";

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUser = (user) => {
    setCurrentUser(user);
  };
  return (
    <Router>
      {" "}
      <UserContext.Provider
        value={{
          currentUser,
        }}
      >
        <Route
          path="/"
          exact
          render={(props) => (
            <Join getCurrentUser={getCurrentUser} {...props} />
          )}
        ></Route>
        <Route
          path="/chat"
          exact
          render={(props) => <Chat {...props} />}
        ></Route>
      </UserContext.Provider>
    </Router>
  );
};
export default App;
