/*Michael Mitchell*/
/*SD2670*/
/*25AUG16*/
/*Final Project*/
/*Prof. Asam Mahmood*/

angular.module('accountFeederApp.services', []).
  factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getAccount = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
  
  /*I'll have to come back to this. No idea what this does.*/