import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    deleteProject(portfolio){
      portfolio.deleteRecord();
      portfolio.save();
    },
    expand: function(){
      this.set('isExpanded', true);
  },
    contract: function(){
      this.set('isExpanded', false);
    },
  }
});
