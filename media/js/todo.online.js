(function(App) {

    App.online = function() {

        App.socket = io.connect('http://todo.dev:8080');

        App.socket.on('connect', function (data) {
            if ( App.oldName != '' ) {
                App.socket.emit('setName', App.oldName);
            }
        });

        App.socket.on('online', function (data) {
            console.log('is offline', data);
            //socket.emit('my other event', { my: 'data' });
        });

        App.socket.on('disconnect', function (data) {
            console.log('is offline', data);
            //socket.emit('my other event', { my: 'data' });
        });

        App.socket.on('add', function (data) {
            var model = new App.Task(data);
            App.Collection.add(model);
            App.addChatMessage(data.author, ' добавил задачу: "'+data.text+'" в проект "'+model.get('project')+'"', false);
        });

        App.socket.on('edit', function (data) {
            console.log('is changed:', data);
            //socket.emit('my other event', { my: 'data' });
        });

        App.socket.on('changeName', function (data) {
            App.addChatMessage(data.oldName, 'сменил имя на '+data.newName, false);
        });

        App.socket.on('chatSend', function(data) {
            App.addChatMessage(data.user, data.text, false);
        });

    }

}(window['App']));