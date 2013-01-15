(function(App) {

    App.Router = Backbone.Router.extend({

        routes: {
            "" : 'showAll',
            ":filter": 'filter'
        },

        initialize: function(Projects) {
            this.Projects = Projects;
        },

        Projects: {},

        filter: function(filter) {
            _.each(this.Projects.models, function(project) {
                project.set('active', project.get('project') == filter ? true : false);
            });
            return filter;
        },

        showAll: function() {
            _.each(this.Projects.models, function(project) {
                project.set('active', true);
            });
        }

    });

}(window['App']));