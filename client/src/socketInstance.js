import io from "socket.io-client";
export let getSocket = io("http://localhost:5500");
export const getNewSocket = () => {
  getSocket = io("http://localhost:5500");
};
