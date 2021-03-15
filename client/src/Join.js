import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import io from "socket.io-client";
import { getNewSocket, getSocket } from "./socketInstance";
export default function SignIn(props) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [socket, setSocket] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getNewSocket();
    getSocket.on("connect", () => {
      
    });
    
    if (!getSocket.id) {
      io.connect();
    }

    getSocket.on("join", (data) => {
      if (data.error) {
        setError(data);
      }
    });
  }, []);
  const handleRoute = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      
      getSocket.emit(
        "join",
        name,
        room,
        getSocket.id,
        (resp) => {
          
          if (resp.error) {
            
            return;
          } else {
            
            history.push(`/chat?name=${name}&room=${room}`);
          }
        }
      
      );
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
 
  return (
    <div className="join-wrapper">
      <div
        onClick={() => {
          setError(false);
        }}
        className="join-container"
      >
        <h1 className="join-header">Join</h1>
        <div className="join-input-container">
          <div>
            <input
              className="input-field"
              placeholder="Name"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="input-field-room-container">
            <input
              className="input-field-room"
              onKeyDown={(e) => handleRoute(e)}
              placeholder="Room"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
            <div className={!error ? `inactive` : `error-container`}>
              <p className="error-message">{error.error}</p>
            </div>
          </div>
        </div>

        {/* <Link to={`/chat?name=${name}&room=${room}`} className="join-link"> */}
        <button
          className="join-signin-but"
          onClick={(e) =>
            !name || !room ? e.preventDefault() : handleRoute(e)
          }
          type="submit"
        >
          Sign In
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
