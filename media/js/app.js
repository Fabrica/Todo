$(function() {

    var Task = Backbone.Model.extend({
        isReady: function() {
            return this.get('status') === 'ready';
        },

        toggleStatus: function() {
            var newStatus = this.isReady() ? 'wait' : 'ready';
            this.set('status', newStatus );
        },

        defaults: {
            visible: true
        }
    });

    var TaskCollection = Backbone.Collection.extend({
        model: Task,
        url: 'update.php',

        initialize: function () {
            this.on("change:status", function (model) {
                model.save();
            });
        },

        applyFilter: function(filter) {
            _.each(this.models, function(task) {
                task.set('visible', task.get('project') == filter);
            });
        }

    });

    var TaskView = Backbone.View.extend({

        events: {
            "change .statusBox": "changeBox"
        },

        initialize: function() {
            this.trackVisible();
        },

        changeBox: function() {
            this.model.toggleStatus();
        },

        trackVisible: function() {
            this.model.on("change:visible", function (model, visible) {
                if ( visible ) {
                    this.$el.show();
                } else {
                    this.$el.hide();
                }
            }, this);
        }

    }, {

        getData: function($this) {
            return {
                id:       $this.data('taskid'),
                status:   $this.find('input:checkbox').is(':checked') ? 'ready' : 'wait',
                text:     $this.find('.text').text(),
                author:   $this.find('.author').text(),
                datetime: $this.find('.datetime').text(),
                project:  $this.find('.project').text()
            };
        }
    });

    var Router = Backbone.Router.extend({

        routes: {
            ":filter": 'filter'
        },

        filter: function(filter) {
            Collection.applyFilter(filter);
            return filter;
        }

    });




    function initTasks() {
        var models = [];

        $(".task").each(function () {

            var data = TaskView.getData($(this));
            var taskModel = new Task(data);
            var taskView = new TaskView({
                model: taskModel
            });
            taskView.setElement(this);
            models.push(taskModel);
        });

        return models;
    }

    var Collection = new TaskCollection(initTasks());

    var Controller = new Router();

    Backbone.history.start({pushState: true});

    $('.projects a').on('click', function() {
        Controller.navigate($(this).attr('href'), true);
        return false;
    });





});