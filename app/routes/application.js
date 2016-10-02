import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [Ember.Object.create({
      name: 'John'
    // }), Ember.Object.create({
    //   name: 'Charles'
    // }), Ember.Object.create({
    //   name: 'Richard'
    // }), Ember.Object.create({
    //   name: 'Sherlock'
    // }), Ember.Object.create({
    //   name: 'Ted'
    // }), Ember.Object.create({
    //   name: 'Brian'
    }), Ember.Object.create({
      name: 'Tom'
    })];
  }
});