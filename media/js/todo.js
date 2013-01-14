window.Todo = {

    Router: Backbone.Router.extend({
        routes: {
            ":filter": 'filter'
        },

        filter: function(filter) {
            console.log(this,filter,Todo);
            return filter;
        }

    }),

    Task: Backbone.Model.extend({
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
    }),

    TaskCollection: Backbone.Collection.extend({
        model: window.Todo.Task,
        url: 'update.php',

        initialize: function () {
            this.on("change:status", function (model) {
                model.save();
            });
            this.on("change", function (model) {
                console.log(model.el);
            });
        }

    }),

    Template: _.template($("#template-task").text()),

    TaskView: Backbone.View.extend({

        events: {
            "change .statusBox": "changeBox"
        },

        changeBox: function() {
            this.model.toggleStatus();
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
    })

};