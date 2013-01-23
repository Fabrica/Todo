var io = require('socket.io').listen(8080, { log: false });

io.sockets.on('connection', function (socket, data) {

    io.sockets.emit('Guest connected');

    socket.on('setName', function (data) {
        socket.name = data;
        console.log('Guest set name: '+data);
    });

    socket.on('changeName', function (data) {
        console.log(data.oldName+' change name to '+data.newName);
        socket.broadcast.emit('changeName', data);
    });

    socket.on('add', function (data) {
        console.log(data.author+' make new task: '+data.text);
        socket.broadcast.emit('add', data);
    });

    socket.on('disconnect', function () {
        console.log(socket.name+' is disconnected :(');
    });

    socket.on('chatSend', function(data) {
        console.log(data.user+' send to chat: '+data.text);
        socket.broadcast.emit('chatSend', data);
    });

});