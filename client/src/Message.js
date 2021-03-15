import React, { useState, useEffect, useRef, useContext } from "react";
import Timestamp from "./Timestamp";
import Tippy from "@tippyjs/react";

import { UserContext } from "./UserContext";
const Message = ({
  msg,
  currentUser,
  getRef,
  timeStampFunc,
  checkHoverState,
  getPosition,
  handleMouseOut,
}) => {
  const [, setHoverTime] = useState(false);

  const [pos, setPos] = useState({});
  const [userPos, setUserPos] = useState(false);

  const messageRef = useRef();
  const incomingRef = useRef();
  const users = useContext(UserContext);
  const sender = users.filter((user) => {
    if (user.name === msg.user) {
      return user;
    }
  });

  const bottom = document.getElementById("bottom");

  useEffect(() => {
    bottom.scrollIntoView({ block: "end" });
  }, []);
  const handleUser = (user) => {
    if (user === currentUser) {
      return "currentUser-text-container";
    }
    if (user === "admin") {
      return "admin-text-container";
    } else {
      return "incoming-text-container";
    }
  };
  const handleTextStyle = (user) => {
    if (user === currentUser) {
      return "currentUser-message";
    }
    if (user === "admin") {
      return "admin-message";
    } else {
      return "incoming-message";
    }
  };

  let sentAt = new Date(msg.sentAt);

  const handleUserHover = () => {
    setUserPos(true);
  };
  const handleUserOut = () => {
    setUserPos(false);
  };
  const photoRef = useRef();
  let userPosRef;
  if (messageRef.current) {
    userPosRef = messageRef.current.getBoundingClientRect();
  }

  return (
    <div className="messages">
  
      <div id={msg.sentAt} className={handleUser(msg.user)}>
        <div ref={messageRef} className="message-profile-container">
          {msg.user !== "admin" && msg.user !== currentUser ? (
            <span
              onMouseEnter={(e) => {
                getPosition(e, msg, msg.user, currentUser === msg.user);
              }}
              onMouseLeave={() => {
                handleMouseOut();
              }}
              style={{
                backgroundImage: msg.profile && msg.profile.grad,
              }}
              className="profile-picture-container"
            ></span>
          ) : null}

          <p
            onMouseEnter={(e) => {
              getPosition(e, msg, null, currentUser === msg.user);
            }}
            onMouseLeave={() => {
              handleMouseOut();
            }}
            className={handleTextStyle(msg.user)}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          ></p>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Message;
