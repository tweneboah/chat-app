
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

//Socket io requires the default http server so we have to create our express server then we pass to to the http sever so that we can use socketio

const io = socketio(server);


//Serving static files
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

//check if there is new user connected to our sever.
//To see the new user connected we have to connect it to our client side of the application

//Creating a count that will show to every user connected
//io.on accept a value call socket where we can have access to many methods eg to show connected user

//If there is 5 new user connected, this function will call 5 times

let count = 0;

io.on('connection', (socket) => {
    console.log('New WebSocket connection');
//We are creating all the events here then we will receive it on chat.js file

//socket.emit acc
socket.emit('countUpdated', count)

    socket.on('increment', () => {
       count++
       socket.emit('countUpdated', count);
       io.emit('countUpdated', count) //Live updating
    })
})



//SERVER
const port  = process.env.PORT || 5000;
server.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})