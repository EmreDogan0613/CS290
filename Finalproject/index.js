        src="/socket.io/socket.io.js">
        
            var socket = io();

            socket.on("connect", function(){
                var textRoom = "textRoom";
                socket.emit('textRoom', textRoom);

            });


            // NODE
            var Btn = document.getElementById("Btn");
            var Txt = document.getElementById("Txt");
            var Messages = document.getElementById("Messages");


            Btn.addEventListener("click", function(){
                socket.emit("new message", Txt.value);
            });
            socket.on("news", function(data){
                Messages.innerHTML = Messages.innerHTML + "<br>" + data;
            });
            socket.on("new user", function(data){
                Messages.innerHTML = Messages.innerHTML + "<br>" + data;
            });


        