import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('materialization');
  this.route('add-children');
  this.route('unload');
  this.route('destroy');
  this.route('unused-relationships');
});

export default Router;
