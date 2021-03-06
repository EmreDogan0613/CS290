//please god let this upload correctly

const EXPRESS = require("express");
const SOCKETIO = require("socket.io");
const app = EXPRESS();
const server = require(http).server(app);
//const PORT = process.env.PORT || 3000;
//const http= require("http");
const IO = SOCKETIO(server);
const PATH = require("path");
const randomWords = require('random-words');


//app.listen(server,()=>console.log(`Server started on port ${server}`));

var users = {};
var name = '';

app.get('/', function(req, res){
    
    res.sendFile(PATH.join(__dirname, "/index.html"));
});

// socket
IO.sockets.on("connection", function(socket){
    users[socket.id] = randomWords({exactly:1, wordsPerString:2, separator:' '});
    // node
    socket.on("chatRoom", function(room){
        socket.join(room);
        socket.broadcast.in(room).emit("new user", users[socket.id] + " new user has joined");
    });

    socket.on("new message", function(data){
        IO.sockets.in("chatRoom").emit('news', users[socket.id] + ": "+ data);
    });

});

server.listen(process.env.PORT || 5000);

