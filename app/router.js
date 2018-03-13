import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('resume');
  this.route('portfolio');

  this.route('portfolio', function() {
    this.route('new');
  });
});

export default Router;
