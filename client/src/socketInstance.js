import io from "socket.io-client";
export let getSocket = io();
export const getNewSocket = () => {
  getSocket = io();
};
