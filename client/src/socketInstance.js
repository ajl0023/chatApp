import io from "socket.io-client";
export let getSocket = io("https://chat-app-tan.vercel.app");
//localhost:5500
export const getNewSocket = () => {
  getSocket = io("");
};
