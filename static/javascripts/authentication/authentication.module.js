(function () {
  'use strict';

  // define thinkster.authentication module and its dependencies
  angular
    .module('thinkster.authentication', [
      'thinkster.authentication.controllers',
      'thinkster.authentication.services'
    ]);

  // define thinkster.authentication.controllers with no dependencies
  angular
    .module('thinkster.authentication.controllers', []);

  // define thinkster.authentication.controllers with no dependencies
  angular
    .module('thinkster.authentication.services', ['ngCookies']);
})();
