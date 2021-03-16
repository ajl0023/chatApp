const express = require("express");

const {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
  checkDuplicate,
  users,
} = require("./users");
const path = require("path");
const PORT = process.env.PORT || 5500;
const app = express();
const server = require("http").createServer(app);
server.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
const io = require("socket.io")(server);
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
io.use((socket, next) => {
  next();
});
io.on("connection", (socket) => {
  console.log(socket.user);
  socket.on("join", (name, room, id, callback) => {
    const user = {};
    user["name"] = name;
    user["room"] = room;
    user["id"] = id;
    let createUser = addUser(user);
    socket.emit("join", createUser);

    if (createUser.error) {
      callback(createUser);
      return;
    }
    callback("success");
    socket.join(room);

    io.in(room).emit("getUsers", getUsersInRoom(room));
    console.log(socket);
    // console.log(socket.to(room));
    console.log(room);

    console.log(socket.to(room).broadcast);

    // socket.to(room).broadcast.emit("getMessages", {
    //   user: "admin",
    //   text: `User ${name} has just joined`,
    // });
  });
  socket.on("initial", (room) => {
    socket.emit("getMessages", {
      user: "admin",
      text: `Welcome to room ${room}`,
    });
  });
  socket.on("getUsers", (room) => {
    const findUsers = getUsersInRoom(room);

    socket.emit("getUsers", findUsers);
  });
  socket.on("getMessages", (name, room, text) => {
    const getUsers = getUsersInRoom(room);
    const findUser = getUsers.find((users) => {
      if (users.id === socket.id) {
        return users;
      }
    });
    if (!findUser) {
      socket.emit("getMessages", {
        user: "admin",
        text: "You have been disconnected",
      });
      return;
    }
    io.in(room).emit("getMessages", {
      user: name,
      text: text,
      gradient: getUsersInRoom(room).find((user) => {
        if (name === user.name) {
          return user;
        }
      }),
      sentAt: Date.now(),
    });
  });
  socket.on("connectCheck", (room, callback) => {
    const getUsers = getUsersInRoom(room);
    const findUser = getUsers.find((users) => {
      if (users.id === socket.id) {
        return users;
      }
    });
    if (!findUser) {
      socket.emit("getMessages", {
        user: "admin",
        text: "you have been disconnected",
      });
    }

    callback(findUser);
  });
  socket.on("disconnectUser", (name, room) => {
    const user = removeUser(socket.id);
    socket.disconnect();
    if (user) {
      io.to(room).emit("getMessages", {
        user: "admin",
        text: `${name} has left.`,
      });
      io.to(room).emit("getUsers", getUsersInRoom(room));
    }
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

module.exports = app;
