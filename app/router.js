import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.resource('/', function() {});
  this.resource('resume', function() {});
  this.resource('portfolio', function() {});

  this.route('portfolio', function() {
    this.route('new');
  });
});

export default Router;
