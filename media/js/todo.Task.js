(function(App) {

    App.Task = Backbone.Model.extend({

        url: '/api/Task.php',
        defaults: {
            visible: true
        },

        setStatusTrue: function() {
            this.set('status', 'ready');
        },

        setStatusFalse: function() {
            this.set('status', 'false');
        },

        isReady: function() {
            return this.get('status') === 'ready';
        }

    });

    App.TaskCollection = Backbone.Collection.extend({
        model: App.Task,
        url: '/api/Task.php',

        initialize: function () {

            this.on('add', function(model) {
                var projects = App.Projects.where({project: model.get('project')});
                projects[0].addTask();
                if ( model.get('status') == 'ready' ) {
                    projects[0].changeCount(-1);
                }
            });

            this.on("change:status", function (model) {
                model.save();
                var project = model.get('project');
                var findProjects = App.Projects.where({project: project});
                findProjects[0].changeCount(model.isReady()?-1:1);
            });

            (function (tasks) {
                App.Projects.on('change:active', function(model, active) {
                    var project = model.get('project');
                    if ( active ) {
                        tasks.showProject(project);
                    }
                    else {
                        tasks.hideProject(project);
                    }
                });
            })(this);

        },

        showProject: function(project) {
            var models = this.where({project: project});
            _.each(models, function(task) {
                task.set('visible', true);
            });
        },

        hideProject: function(project) {
            var models = this.where({project: project});
            _.each(models, function(task) {
                task.set('visible', false);
            });
        }

    });

    var TaskTemplate = false;

    App.TaskView = Backbone.View.extend({

        events: {
            "change .statusBox": function(e) {
                if ( $(e.target).is(':checked') ) {
                    this.model.setStatusTrue();
                }
                else {
                    this.model.setStatusFalse();
                }
            }
        },

        initialize: function() {
            this.trackVisible();
            this.trackStatus();
        },

        trackVisible: function() {
            this.model.on("change:visible", function (model, visible) {
                if ( visible ) {
                    this.$el.show();
                } else {
                    this.$el.hide();
                }
            }, this);
        },

        trackStatus: function() {
            this.model.on("change:status", function (model, status) {
                if ( status == 'ready' ) {
                    this.$el.addClass('allReady').find('input:checkbox').attr({checked:'checked'});
                }
                else {
                    this.$el.removeClass('allReady').find('input:checkbox').removeAttr('checked');
                }
            }, this);
        },

        render: function() {
            if ( !TaskTemplate ) {
                TaskTemplate = _.template($("#template-task").text());
            }
            var data = this.model.toJSON();
            var markUp = TaskTemplate(data);
            this.setElement($(markUp).get(0));
        }

    }, {

        createView: function(model) {
            var view = new App.TaskView({
                model: model
            });
            view.render();
            return view;
        }
    });

}(window['App']));