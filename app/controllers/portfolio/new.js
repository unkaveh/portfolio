import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    publishProject: function() {
      var newProject = this.store.createRecord('portfolio', {
        title: this.get('title'),
        description: this.get('description'),
        codeLanguage: this.get('codeLanguage'),
        imgURL: this.get('imgURL'),
        codeURL: this.get('codeURL'),
        dateCompleted: this.get('dateCompleted'),
      });
      newProject.save();
      this.transitionTo('portfolio');
    },
    
  },
});
