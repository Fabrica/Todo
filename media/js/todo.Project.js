(function(App) {


    App.Project = Backbone.Model.extend({

        defaults: {
            active: null,
            todo: 0,
            all: 0
        },

        changeCount: function(count) {
            this.set('todo', this.get('todo')+count);
        },

        addTask: function() {
            this.set('all', this.get('all')+1);
            this.set('todo', this.get('todo')+1);
        }
    });


    App.ProjectCollection = Backbone.Collection.extend({
        model: App.Project,
        url: '/api/Project.php'
    });


    var ProjectTemplate = false;


    App.ProjectView = Backbone.View.extend({

        events: {
            "click a": function(e,a) {
                App.Controller.navigate('/'+this.model.get('project'), true);
                return false;
            }
        },

        render: function() {
            if ( !ProjectTemplate ) {
                ProjectTemplate = _.template($("#template-project").text());
            }
            var data = this.model.toJSON();
            var markUp = ProjectTemplate(data);
            this.setElement($(markUp).get(0));
        },

        initialize: function() {
            this.trackActive();
            this.trackCount();
        },

        trackActive: function() {
            this.model.on("change:active", function (model, active) {
                if ( active ) {
                    this.$el.find('a').addClass('active');
                } else {
                    this.$el.find('a').removeClass('active');
                }
            }, this);
        },

        trackCount: function() {
            (function (project) {
                project.model.on('change:todo', function(model, todo) {
                    project.$el.find('.projects-count-todo').text(todo);
                });
            })(this);
            (function (project) {
                project.model.on('change:all', function(model, all) {
                    project.$el.find('.projects-count-all').text(all);
                });
            })(this);
        }

    }, {
        createView: function(model) {
            var view = new App.ProjectView({
                model: model
            });
            view.render();
            return view;
        }
    });


}(window['App']));