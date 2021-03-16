import queryString from "query-string";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "./Input";
import Message from "./Message";
import { getSocket } from "./socketInstance";
import { UserContext } from "./UserContext";
import Users from "./Users";
const Chat = ({ location }) => {
  const [formattedMessages, setFormattedMessages] = useState([]);
  const [text, setText] = useState("");
  const [, setChat] = useState([]);
  const [users, setUsers] = useState([]);
  const { name, room } = queryString.parse(location.search);
  const [, setPosition] = useState({});
  const [, setHoverState] = useState(false);
  const [, setHoveredMessage] = useState({});
  const scrollToBottom = useRef(null);
  const history = useHistory();
  const scrollContainer = useRef();
  useEffect(() => {
    getSocket.emit("connectCheck", room, (data) => {
      if (!data) {
        history.push("/");
      }
    });
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      getSocket.emit("disconnectUser", name, room);
    });
    return () => {
      let tooltipContainer = document.getElementById("tooltip-container");
      let root = document.getElementById("root");
      while (tooltipContainer) {
        root.removeChild(tooltipContainer);
        tooltipContainer = document.getElementById("tooltip-container");
      }
      getSocket.emit("disconnectUser", name, room);
    };
  }, []);
  useEffect(() => {
    getSocket.on("getUsers", (data) => {
      setUsers(data);
    });
    getSocket.emit("getUsers", room);
    getSocket.on("getMessages", (message) => {
      setChat((messages) => {
        const messagesCopy = JSON.parse(JSON.stringify(messages));
        let messageObj = {};
        let lastMessageIndex = messagesCopy.length - 1;
        let prop =
          messagesCopy[lastMessageIndex] &&
          Object.getOwnPropertyNames(messagesCopy[lastMessageIndex])[0];
        if (prop !== "admin" && messages.length > 1) {
          let sentDate = message.sentAt;
          let recentDate =
            messagesCopy[lastMessageIndex][prop][
              messagesCopy[lastMessageIndex][prop].length - 1
            ].sentAt;
          let oneHour = 3.6 * Math.pow(10, 6);
          if (sentDate - recentDate >= oneHour) {
            let sentAtHours = new Date(message.sentAt).getHours();
            let sentAtMinutes = new Date(message.sentAt).getMinutes();
            let displayTime = `${
              sentAtHours === 0
                ? 12
                : sentAtHours > 12
                ? sentAtHours - 12
                : sentAtHours
            }:${sentAtMinutes < 10 ? "0" + sentAtMinutes : sentAtMinutes} ${
              sentAtHours > 12 ? "PM" : "AM"
            }`;
            messagesCopy.push({
              admin: [
                {
                  user: "admin",
                  text: displayTime,
                },
              ],
            });
            prop = "admin";
          }
        }
        if (lastMessageIndex >= 0 && prop === message.user) {
          messagesCopy[lastMessageIndex][message.user] = [
            ...messagesCopy[lastMessageIndex][message.user],
            message,
          ];
        } else {
          messageObj[message.user] = [message];
          messagesCopy.push(messageObj);
        }
        messagesCopy.forEach((messages) => {
          let prop = Object.getOwnPropertyNames(messages)[0];
          messages[prop].forEach((message) => {
            delete message.profile;
          });
          let lastIndex = messages[prop].length - 1;
          messages[prop][lastIndex].profile =
            messages[prop][lastIndex].gradient;
        });
        let toArray = messagesCopy.reduce((arr, message) => {
          let prop = Object.getOwnPropertyNames(message)[0];
          for (let i = 0; i < message[prop].length; i++) {
            arr.push(message[prop][i]);
          }
          return arr;
        }, []);
        setFormattedMessages(() => {
          return toArray;
        });
        return messagesCopy;
      });
    });
    getSocket.emit("initial", room);
  }, [location.search]);
  const getRef = () => {};
  const handleMouseOut = () => {
    setHoveredMessage(() => {
      return false;
    });
    let tooltipContainer = document.getElementById("tooltip-container");
    while (tooltipContainer.firstChild) {
      tooltipContainer.removeChild(tooltipContainer.firstChild);
    }
  };
  const getPosition = (pos, msg, user, currentUser) => {
    if (user || (msg && msg.user !== "admin")) {
      setHoveredMessage(() => {
        return {
          state: true,
          message: pos,
        };
      });
      let contentNode = document.createElement("p");
      let tooltipContainer = document.getElementById("tooltip-container");
      if (msg && msg.sentAt && !user) {
        contentNode.className = "timestamp-hover-currentUser";
        let sentAtHours = new Date(msg.sentAt).getHours();
        let sentAtMinutes = new Date(msg.sentAt).getMinutes();
        contentNode.innerHTML = `${
          sentAtHours === 0
            ? 12
            : sentAtHours > 12
            ? sentAtHours - 12
            : sentAtHours
        }:${sentAtMinutes < 10 ? "0" + sentAtMinutes : sentAtMinutes} ${
          sentAtHours > 12 ? "PM" : "AM"
        }`;
      } else if (user) {
        contentNode.className = "hover-user";
        contentNode.innerHTML = user;
      }
      tooltipContainer.style.position = "absolute";
      tooltipContainer.style.inset = "0px auto auto 0px";
      tooltipContainer.appendChild(contentNode);
      tooltipContainer.style.display = "block";
      let tooltipSize = tooltipContainer.getBoundingClientRect();
      let messagePos;
      if (user) {
        messagePos = pos.target.getBoundingClientRect();
      } else {
        messagePos = pos.target.getBoundingClientRect();
      }
      let timestampTop =
        messagePos.y + messagePos.height / 2 - tooltipSize.height / 2;
      tooltipContainer.style.transform = `translate(${`${
        currentUser
          ? messagePos.right
          : messagePos.left - tooltipContainer.getBoundingClientRect().width
      }px`},${`${timestampTop}px`})`;
    }
  };
  const handleScroll = () => {
    let tooltipContainer = document.getElementById("tooltip-container");
    setHoveredMessage((state) => {
      if (state.state) {
        let messagePos = state.message.target.getBoundingClientRect();
        let tooltipSize = tooltipContainer.getBoundingClientRect();
        let timestampTop =
          messagePos.y + messagePos.height / 2 - tooltipSize.height / 2;
        tooltipContainer.style.transform = `translate(${`${messagePos.right}px`},${`${timestampTop}px`})`;
        tooltipContainer.style.display = "block";
      }
      return state;
    });
  };
  const handleResize = () => {
    let tooltipContainer = document.getElementById("tooltip-container");
    setHoveredMessage((state) => {
      if (state.state) {
        let messagePos = state.message.target.getBoundingClientRect();
        let tooltipSize = tooltipContainer.getBoundingClientRect();
        let timestampTop =
          messagePos.y + messagePos.height / 2 - tooltipSize.height / 2;
        tooltipContainer.style.transform = `translate(${`${messagePos.right}px`},${`${timestampTop}px`})`;
        tooltipContainer.style.display = "block";
      }
      return state;
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    let tooltip = document.createElement("div");
    tooltip.setAttribute("id", "tooltip-container");
    document.getElementById("root").appendChild(tooltip);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleChange = (e) => {
    setText(e.target.innerText);
  };
  const handleSubmit = (e, ref) => {
    if (e.key === "Enter" || e.type === "click") {
      let target = ref.current.innerText.trim();
      if (target.length > 0) {
        getSocket.emit("getMessages", name, room, target);
      } else {
        return;
      }
    }
  };
  const timeStampFunc = (pos, msg) => {
    setHoverState(true);
    setPosition(pos);
    setHoveredMessage(msg);
  };
  const checkHoverState = (state) => {
    setHoverState(state);
  };
  const divRef = useRef(null);
  return (
    <>
      <div className="chat-wrapper">
        <div className="scrollRef-wrapper">
          <div className="chat-message-container">
            <div className="userbar-container">
              {users.map((user) => {
                return (
                  <Users
                    handleMouseOut={handleMouseOut}
                    getPosition={getPosition}
                    users={user}
                  />
                );
              })}
            </div>
            <div className="container-2">
              <p className="chat-header">{room}</p>
              <div
                onScroll={handleScroll}
                ref={scrollContainer}
                id="msg-box"
                className="chat-message-box"
              >
                <UserContext.Consumer>
                  {({ currentUser }) => {
                    console.log(currentUser);
                    return (
                      <div ref={divRef} className="chat-box-container">
                        {formattedMessages.map((msg) => {
                          return (
                            <Message
                              getRef={getRef}
                              key={msg.sentAt}
                              getPosition={getPosition}
                              handleMouseOut={handleMouseOut}
                              checkHoverState={checkHoverState}
                              timeStampFunc={timeStampFunc}
                              currentUser={currentUser}
                              location={location}
                              msg={msg}
                            />
                          );
                        })}
                        <div
                          id="bottom"
                          className="bottom-of-div"
                          ref={scrollToBottom}
                        ></div>
                      </div>
                    );
                  }}
                </UserContext.Consumer>
              </div>
              <div></div>
              <Input
                value={text}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
