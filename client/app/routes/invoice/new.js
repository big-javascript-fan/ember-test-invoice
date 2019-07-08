import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('invoice');
    },

    actions: {
        createInvoice() {
            let invoice = this.modelFor(this.routeName);
            var self = this;
            invoice.save().then(function(resp) {
                self.transitionTo('/dashboard');
            }).catch(function(reason) {
                console.log(reason);
            });
        }
    }
});
