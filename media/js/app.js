(function(App) {

    $(function() {

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
                    }
                });

            }
        });

    });

}(window['App']));