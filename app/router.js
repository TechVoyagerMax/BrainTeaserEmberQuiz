import EmberRouter from '@ember/routing/router';
import config from 'brain-teaser/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('matematika');
  this.route('biologija');
  this.route('istorija');
  this.route('geografija');
  this.route('it');
  this.route('menadzment');
  this.route('poznatelicnosti');
  this.route('stranifilmovi');
  this.route('domacifilmovi');
  this.route('oi21');
  this.route('oi20');
  this.route('naucnici');
  this.route('dinosaurusi');
  this.route('periodnisistemi');
  this.route('haripoter');
  this.route('prijatelji');
  this.route('poznatipisci');
  this.route('grckamitologija');
  this.route('rimskamitologija');
  this.route('egipatskamitologija');
  this.route('zastave');
  this.route('glavnigradovi');
  this.route('knjizevnost');
  this.route('decijikviz');
  this.route('muzika');
  this.route('brendovi');
  this.route('rezultati');
});
