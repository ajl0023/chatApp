import io from "socket.io-client";
export let getSocket = io();
//localhost:5500
export const getNewSocket = () => {
  getSocket = io();
};
