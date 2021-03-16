import React, { useRef } from "react";
const Users = (props) => {
  const user = useRef();
  return (
    <div ref={user}>
      <div
        onMouseOver={(e) => {
          props.getPosition(e, null, props.users.name);
        }}
        onMouseOut={() => {
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
