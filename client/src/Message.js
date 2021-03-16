import React, { useEffect, useRef } from "react";
const Message = ({ msg, currentUser, getPosition, handleMouseOut }) => {
  const messageRef = useRef();
  const bottom = document.getElementById("bottom");
  useEffect(() => {
    bottom.scrollIntoView({ block: "end" });
  }, []);
  const handleUser = (msg) => {
    if (msg.id === currentUser) {
      return "currentUser-text-container";
    }
    if (msg.user === "admin") {
      return "admin-text-container";
    } else {
      return "incoming-text-container";
    }
  };
  const handleTextStyle = (msg) => {
    if (msg.id === currentUser) {
      return "currentUser-message";
    }
    if (msg.user === "admin") {
      return "admin-message";
    } else {
      return "incoming-message";
    }
  };
  let userPosRef;
  if (messageRef.current) {
    userPosRef = messageRef.current.getBoundingClientRect();
  }
  return (
    <div className="messages">
      <div id={msg.sentAt} className={handleUser(msg)}>
        <div ref={messageRef} className="message-profile-container">
          {msg.user !== "admin" && msg.id !== currentUser ? (
            <span
              onMouseEnter={(e) => {
                getPosition(e, msg, msg.user, currentUser === msg.id);
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
              getPosition(e, msg, null, currentUser === msg.id);
            }}
            onMouseLeave={() => {
              handleMouseOut();
            }}
            className={handleTextStyle(msg)}
            dangerouslySetInnerHTML={{ __html: msg.text }}
          ></p>
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Message;
