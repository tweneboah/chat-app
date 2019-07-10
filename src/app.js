
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

// let count = 0;

// io.on('connection', (socket) => {
//     console.log('New WebSocket connection');
// //We are creating all the events here then we will receive it on chat.js file

// //socket.emit acc
// socket.emit('countUpdated', count)

//     socket.on('increment', () => {
//        count++
//        socket.emit('countUpdated', count);
//        io.emit('countUpdated', count) //Live updating
//     })
// })

//==========PART 2=====

//Printing welcome message to users
//io.on accept 2 arguments; event type and callback

io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    //socket.emit accept the name of the event. The name can be anyting but when calling on the client side you must use the same name and the next argument is the actual method

    //On the client side we receive the type of event the server is emitting as socket.on
    //This how the code looks like on the client side 
    /** 
    socket.on('emma', (message) => {
      console.log(message)
    })
    */
    
    //You could see that it accept two arguments: 1. the name of event passed by the emmiter and the callback function. this callback function display the results of the emmit
    socket.emit('emma', 'Welcome!')

})

//SERVER
const port  = process.env.PORT || 5000;
server.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})