const express = require("express");
const socketIO = require("socket.io");

// Creating an instance of an express app
const app = express();

// Create an endpoint for an http client to request -> http://localhost:3000
const http = require("http");

app.get("/", (req, res) => {
  // Path to the folder of the executing file
  res.sendFile("chat.html", { root: __dirname }); 
});

// Start running the server (start listening)
const httpServer = http.createServer(app).listen(3000);

// Taking the web server and enhancing it with socketio functionality
const io = socketIO(httpServer);

// Variable to hold the number of currently connected clients
let counter = 0;

//Waits for a connection from client
io.on("connection", (socket) => {
  
  // Emit clientConnected event to all listeners 
    console.log("A client has connected!");
    counter++;
    io.emit("clientsConnected", counter);

  // Send back a message to the newly connected client
  socket.emit("welcome", (message = "Welcome to the Chat Server!!"));

  // Capture when a message arrives from the client
  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", message);
  });

  // Provides live update for current server time when user connects
  setInterval(() => io.emit("time", new Date().toTimeString()), 1000);

  socket.on("disconnect", () => {
    console.log("Client disconnected!");
    counter--;
    io.emit("clientDisconnected", counter);
    console.log(counter);
  });
});
