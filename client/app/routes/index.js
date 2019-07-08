import Route from '@ember/routing/route';

export default Route.extend({
    redirectTo: function() {
        this.transitionTo('dashboard');
    }
});
