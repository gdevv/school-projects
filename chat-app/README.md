# 💬 chat-app

## Table of Contents
[About](#about)\
[Installation](#installation)\
[Documentation](#documentation)\
[Author](#author)\
[License](#license)

## About

### Overview
For one of our assignments in Cross-Platform Development, we were tasked with using an npm package called `socket.io` to create a web-based chat application whereby users (clients) can communicate with other users (clients) with the messages being managed by a central location (server).

### Requirements
* Display the number of currently connected clients. 
* As clients connect or disconnect to the server, inform all clients of a change in the number of clients connected.
* Modify the client such that a connection doesn't immediately occur, connection should instead happen when a `Connect` button is clicked on the UI.
* Modify the client such that the client is disconneced programatically without closing the client tab or window. Disconnection should happen when a `Disconnect` button is clicked on the UI.
* Add some UI functionality that will prevent the user from acting on the UI depending on whether the client is currently connected or not.

## Installation
Install dependencies.
```
npm install
```

Run the program.
```
npm start
```
Go to Localhost:3000

## Documentation
Example UI with two users in the chat:\
<img width="1000px" src="https://user-images.githubusercontent.com/72951538/158426695-5d622323-3c74-4037-827c-071c3506c5dc.png" >

## Author
### Georgie Deverill
[GitHub](https://github.com/gdevv)\
[LinkedIn](https://www.linkedin.com/in/georgie-deverill-044833121/)

## License
Distributed under the [GNU General Public License version 3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)
