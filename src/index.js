"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const { Server } = require("socket.io");

    let users = [];

    const socketIO = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET, POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    //User arrive sur la page login
    socketIO.on("connection", (socket) => {
      console.log(`⚡: ${socket.id} user just connected!`);
      socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
      });

      //Listens when a new user joins the server
      socket.on("newUser", (data) => {
        //Adds the new user to the list of users
        users.push(data);
        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit("newUserResponse", users);
      });

      socket.on("questions", (data) => {
        //Adds the new user to the list of users

        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit("adminQuestions", data);
      });

      socket.on("disconnect", () => {
        console.log("🔥: A user disconnected");
        //Updates the list of users when a user disconnects from the server
        users = users.filter((user) => user.socketID !== socket.id);
        // console.log(users);
        //Sends the list of users to the client
        socketIO.emit("newUserResponse", users);
        socket.disconnect();
      });
    });
  },
};
