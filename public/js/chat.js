//This is function that shows connected user because we embed client side script into our html

//This is where we call the functions on main file

//This file is the client and the main file is the server

const socket = io();
//We have to receive the event the server is returning to us

//All the event created by our sever is are store inside socket variab;e


socket.on('countUpdated', (count) => {
 //The callback receive all functions/varriables pass to it by emit event
 console.log('The count has updated', count)
});

document.querySelector('#increment').addEventListener('click', () => {
 console.log('Click')
 socket.emit('increment')
})

