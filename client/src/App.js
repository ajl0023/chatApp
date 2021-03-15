import React, { useEffect, useState } from "react";

import "./myApp.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import io from "socket.io-client";

import Join from "./Join";
import Chat from "./Chat";
import { UserContext } from "./UserContext";
//change

const App = () => {
  const [socketId, setSocketId] = useState("online");

  const [socket, setSocket] = useState([]);
  const [socketState, setSocketState] = useState(false);
  useEffect(() => {}, [socketState]);
  const getSocket = (socket) => {
    setSocket(socket);
  };
  return (
    <Router>
      {" "}
      <Route
        path="/"
        exact
        render={(props) => (
          <Join getSocket={getSocket} socket={socket} {...props} />
        )}
      ></Route>
      <Route
        path="/chat"
        exact
        render={(props) => (
          <Chat  socket={socket} {...props} />
        )}
      ></Route>
    </Router>
  );
};

export default App;
