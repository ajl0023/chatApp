const users = [];
const ids = [];
const addUser = ({ id, name, room, image }) => {
  name = name.trim();
  room = room.trim();
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return {
      error: "Username already taken",
    };
  }
  if (!name || !room) {
    return { error: "Username and room are required" };
  }
  const user = {
    id,
    name,
    room,
    grad: `linear-gradient(hsla(${Math.random() * 360}, 100%, 50%, 1),hsla(${
      Math.random() * 360
    }, 100%, 50%, 1))`,
  };
  users.push(user);

  return { user };

  // if (existingUser) {
  //   return { error: "Username is taken." };
  // }
};
const getUser = (id) => users.find((user) => user.id === id);
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
const checkDuplicate = (room) => {
  let filteredByRoom = users.filter((user) => {
    if (user.room === room) {
      return user;
    }
  });

  //
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};
const socketConnected = (id) => {
  ids.push(id);
};

module.exports = {
  socketConnected,
  users,
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
  checkDuplicate,
};
