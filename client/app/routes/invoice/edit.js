import Route from '@ember/routing/route';

export default Route.extend({
    model(params, queryParams, transition) {
        var rowid = queryParams.to.params['invoice_id'];
        return this.get('store').findRecord('invoice', rowid);
    },
    actions: {
        updateInvoice(invoice) {
            var self = this;
            invoice.save().then(function(resp) {
                self.transitionTo('/dashboard');
            }).catch(function(reason) {
                console.log(reason);
            });
        }
    }
});
