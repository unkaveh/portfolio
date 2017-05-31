import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteProject(portfolio){
      portfolio.deleteRecord();
      portfolio.save();
    },
  },
});
