import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  codeLanguage: DS.attr('string'),
  imgURL: DS.attr('string'),
  codeURL: DS.attr('string'),
  gitURL: DS.attr('string'),
  dateCompleted: DS. attr('string'),
});
