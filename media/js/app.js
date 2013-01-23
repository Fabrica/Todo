(function(App) {

    $(function() {

        App.oldName = $('#username').val();

        App.Projects = new App.ProjectCollection();
        App.Projects.on('add', function(model) {
            var view = App.ProjectView.createView(model);
            $('.projects ul').append(view.$el);
        });

        App.Projects.fetch({
            add: true,
            success: function() {

                App.Collection = new App.TaskCollection();

                App.Collection.on('add', function(model) {
                    var view = App.TaskView.createView(model);
                    $('.tasks').prepend(view.$el);
                });

                App.Collection.fetch({
                    add: true,
                    success: function() {
                        App.Controller = new App.Router(App.Projects);
                        Backbone.history.start({pushState: true});
                        $('.showAllTasks').on('click', function() {
                            App.Controller.navigate('/', true);
                            return false;
                        });
                        $('.makeNew').on('submit', function(e) {
                            var date = new Date();
                            var task = {};
                            $(e.target).find('input').each( function() {
                                task[$(this).attr('name')] = $(this).val();
                            });
                            var model = new App.Task(task);
                            model.save({}, {
                                success: function(model, response, options) {
                                    App.Collection.add(model);
                                    $('#makeNewInput').val('').focus();
                                    App.socket.emit('add', model.toJSON());
                                },
                                error: function(model, xhr, options) {
                                    alert('Ошибка. '+xhr.status+':'+xhr.responseText);
                                }
                            });
                            return false;
                        });
                        $("#username").on('focusout', function() {
                            var name = $(this).val();
                            if ( name == App.oldName ) {
                                return false;
                            }
                            App.socket.emit('changeName', { oldName: App.oldName==''?'unknown':App.oldName, newName: name });
                            App.oldName = name;
                        });
                        $('#showingReady').click( function() {
                            var $body = $('body');
                            if ( $body.hasClass('hideReady') ) {
                                $body.removeClass('hideReady');
                                $(this).text('Показывать только новые');
                            }
                            else {
                                $body.addClass('hideReady');
                                $(this).text('Показывать все');
                            }
                            return false;
                        });

                        App.online();

                        App.initChat();

                    }
                });

            }
        });

    });

}(window['App']));