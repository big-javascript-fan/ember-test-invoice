import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    amount: DS.attr('number'),
    createdDate: DS.attr('string')
});
