import React, { useState, useRef, useEffect } from "react";
import Timestamp from "./Timestamp";
const Users = (props) => {
  const [hoverState, setHoverState] = useState(false);
  const [pos, setPos] = useState(false);
  const [color, setColor] = useState("");
  const [bounding, setBounding] = useState();
  const user = useRef();
  const handleHover = () => {
    setHoverState(true);
    setPos(user.current.getBoundingClientRect());
  };
  const handleHoverOut = () => {
    setHoverState(false);
  };
  useEffect(() => {}, []);
  useEffect(() => {
    if (user.current) {
    }
  });

  return (
    <div ref={user}>
      <div
        onMouseOver={(e) => {
          props.getPosition(e, null, props.users.name);
        }}
        onMouseOut={(e) => {
          props.handleMouseOut();
        }}
        className="userbar-image-container"
        src={props.users.image}
        alt=""
        style={{
          backgroundImage: props.users.grad,
        }}
      ></div>
    </div>
  );
};

export default Users;
