import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.get('store').findAll('invoice');
    },
    actions: {
        editInvoice(record) {
            this.transitionTo('invoice.edit', record);
        },
        deleteInvoice(record) {
            let confirmation = confirm('Are you sure you want to delete this invoice?');

            if(confirmation) {
                record.destroyRecord();

                if(this.get('routeName') !== 'dashboard' ) {
                    this.transitionTo('dashboard');
                }
            }
        }
    }
});
