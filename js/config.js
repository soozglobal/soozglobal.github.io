var sooz = angular.module('sooz', ['FBAngular', 'ui.router', 'angular-loading-bar', 'ngLoadScript']);

sooz.provider('sets', function (){
	var sets= [
	'feelingblue', 'feelinghome', 'feelingclose', 'feelingstairs',
	'archibald', 'jossa', 'joyce', 'kuns', 'montoya', 'riley', 'sab', 'tran', 'trananne'
	];
	// var sets= ['feelingblue'];
	var random;
	return {
		set: function () {
			random = sets[Math.round(Math.random() * (sets.length - 1))];
		},
		$get: function () {
			// console.log("$get: " + random);
			return {
				'random' : random,
				set : function () {
					random = sets[Math.round(Math.random() * (sets.length - 1))];
					return random;
				},
				get : function () {
					return random;
				}
			};
		}
	};
});

sooz.config(['$stateProvider', '$urlRouterProvider', 'setsProvider',  function ($stateProvider, $urlRouterProvider, setsProvider) {


	$urlRouterProvider.rule(function($injector, $location) {

		var path = $location.path();
		var hasTrailingSlash = path[path.length-1] === '/';

		if(hasTrailingSlash) {

          //if last character is a slash, return the same url without the slash  
          var newPath = path.substr(0, path.length - 1);
          return newPath;
      }

  });

	$urlRouterProvider.otherwise('/');
	setsProvider.set();
	$stateProvider
	.state('root', {
		url : "/{name}",
		views: {
			"postContainer": {
				templateUrl: 'templates/tmp.posts.html',
				controller: 'postsController'
			},

			"canvasContainer": {
				templateUrl: function (stateParams) {
					if (angular.isDefined(stateParams.name) && stateParams.name !== 'p' && stateParams.name !== '') {
						return 'canvas/cnv.' + stateParams.name + '.html';
					} else {
						// console.log("config: " + setsProvider.$get().random);
						return 'canvas/cnv.'+setsProvider.$get().random+'.html';
						// return 'canvas/cnv.url0.html';
					}
					
				},
				controller: 'canvasController'
			},

			"mediaContainer": {
				templateUrl: 'templates/tmp.media.html',
				controller: 'mediaController'
			}
		}
	})

	.state('root.singlePost', {
		url: "/{post:[0-9]{12}}",
		views: {
			"postContainer@": {
				templateUrl: 'templates/tmp.single.html',
				controller: 'postSingleController'
			}
		}
	});

	
}]);