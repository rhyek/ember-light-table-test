import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Controller.extend({
  columns: [{
    label: 'Name',
    valuePath: 'name'
  }]
});