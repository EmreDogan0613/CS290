const EXPRESS = require("express");
const SOCKETIO = require("socket.io");
const app = EXPRESS();
const PORT = process.env.PORT || 3000;
const IO = SOCKETIO(PORT);
const PATH = require("path");
const randomWords = require('random-words');
app.listen(PORT,()=>console.log(`Servefr started on port ${PORT}`));

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



//app.listen(port, () => {
//    console.log(`Redirecting app listening on port ${port}!`);
//});s