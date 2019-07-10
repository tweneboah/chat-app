
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

//Socket io requires the default http server so we have to create our express server then we pass to to the http sever so that we can use socketio

const io = socketio(server);





//Serving static files
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

//check if there is new user connected to our sever.
//To see the new user connected we have to connect it to our client side of the application
io.on('connection', () => {
   console.log('New websocket connection')
})

//SERVER
const port  = process.env.PORT || 5000;
server.listen(port, () => {
 console.log(`Server is runing on port ${port}`)
})