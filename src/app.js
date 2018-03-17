import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-messages';

import Router from './config/router';

import EventsIndexCtrl from './controllers/events/index';
import EventsNewCtrl from './controllers/events/new';
import EventsShowCtrl from './controllers/events/show';
import EventsEditCtrl from './controllers/events/edit';
import PlacesIndexCtrl from './controllers/places/index';

import 'bulma';
import Event from './services/Event';
import Place from './services/Place';

angular.module('starGazer', ['ui.router', 'ngMessages'])
  .config(Router)
  .controller('EventsIndexCtrl', EventsIndexCtrl)
  .controller('EventsNewCtrl', EventsNewCtrl)
  .controller('EventsShowCtrl', EventsShowCtrl)
  .controller('EventsEditCtrl', EventsEditCtrl)
  .controller('PlacesIndexCtrl', PlacesIndexCtrl)
  .service('Event', Event)
  .service('Place', Place);
