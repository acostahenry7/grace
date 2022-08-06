var config = require('./server/config.js')
var express = require('express')
const http = require('http');
const socketio = require('socket.io')
const session = require('express-session');
const gravatar = require('gravatar');

var app = config(express())
const server = http.createServer(app);
const io = socketio(server)


const { joinUser, getCurrentUser, userLeaves } = require('./helpers/users.js')

userIcon = gravatar.url('steve.captain.termic@gmail.com', {d: 'identicon'})
const botName = "EIE Bot"

const formatMessage = require('./helpers/messages.js')

io.on('connection', socket => {
    //Set Username and Room
    socket.on('joinRoom', ({username, email, room}) => {

      const user = joinUser(socket.id, username, email, room)

      socket.join(user.room)
      console.log(user);
      //User has joined the chat
      socket.broadcast
      .to(user.room)
      .emit('message',formatMessage(user.id,botName, gravatar.url(user.email, {d: 'identicon'}) ,` ${user.username} has joined the chat`))
    })


    //Listen for Chat Messages
    socket.on('chatMessage', msg => {
         const user = getCurrentUser(socket.id)

        io
        .to(user.room)
        .emit('message', formatMessage(user.id , user.username, gravatar.url(user.email, {d: 'identicon'}),msg))
    })

    //User has left the chat
    socket.on('disconnect' , () => {
        const user = userLeaves(socket.id)
        if (user) {
          io
          .to(user.room)
          .emit('message', formatMessage(user.id, botName , gravatar.url('josevalentin02@gmail.com', {d: 'identicon'}),` ${user.username} has left the chat`))
        }

    })
})

server.listen(app.get('port'), () => {
    console.log("Server listening on port ", app.get('port'))
})
