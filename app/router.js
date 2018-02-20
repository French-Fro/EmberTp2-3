import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ex1', function() {
    this.route('step');
  });
  this.route('step');
  this.route('contacts', function() {
    this.route('add');
  });
  this.route('test-add-contact');
});

export default Router;
