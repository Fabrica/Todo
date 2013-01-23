(function(App) {

    App.initChat = function() {

        $('#chat_send').on('keyup', function(e) {
            if (  e.keyCode != 13 ) {
                return false;
            }
            var text = $(this).val();
            if ( text == '' ) {
                return false;
            }
            App.addChatMessage(App.oldName, text);
            $(this).val('').focus();

        });

    };

    App.addChatMessage = function(user, text, send) {
        if ( typeof(send) != 'boolean' ) {
            send = true;
        }
        $('.chat_container').append('<p>'+user+': '+text+'</p>');
        if ( send ) {
            var a = App.socket.emit('chatSend', {user: user, text: text});
        }
    };

}(window['App']));