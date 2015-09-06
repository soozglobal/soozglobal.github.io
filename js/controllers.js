sooz.controller('mainController', ['$scope', 'tourService', '$state', '$http', '$stateParams', '$window', '$timeout', 'windowService', 'Fullscreen', 'sets', function($scope, tourService, $state, $http, $stateParams, $window, $timeout, windowService, Fullscreen, sets) {

	$scope.mobile = windowService.mobile();
	$scope.active = windowService.active();
	$scope.state = windowService.state();
	$scope.txtIsActive = 0;
	$scope.params = $stateParams;
	
	$scope.random = function() {
		if (angular.isDefined($stateParams.post)) {
			return "/#/p/" + $stateParams.post;
		} else {
			return "/#/";
		}
		
	};

	$scope.isIE = typeof document.documentMode == "number" || new Function("return/*@cc_on!@*/!1")( );

	$scope.width = windowService.width;
	$scope.height = windowService.height;

	$scope.ip = false;

	$http.get("https://api.ipify.org/")
	.success(function (response) {
		$scope.ip = response;
	});

	// If url is of post type, activate text panel
	$scope.$watch(
		function(scope) {
			return $stateParams.post;
		},
		function(newValue, oldValue) {
			if ( angular.isDefined($stateParams.post) ) {
				if (newValue.length === 12) {
					$scope.txtIsActive = 1;
					$scope.state = 3;
				}
			}
		}
		);

	$scope.refresh = function (){
		sets.set();
		$state.reload();
	};

	$scope.goFullscreen = function () {
		// console.log('active');
		if (Fullscreen.isEnabled())
			Fullscreen.cancel();
		else
			Fullscreen.all();
	};


	$scope.toggleTxt = function () {
		if ($scope.txtIsActive === 0) {
			$scope.txtIsActive = 1;
		} else{
			$scope.txtIsActive = 0;
		}
	};


	$scope.bool = function (value) {
		if (value) {
			return 1;
		} else {
			return 0;
		}
	};
	
	$scope.setState = function (value) {
		$scope.state = value;
		$scope.active = true;
	};

	$scope.tourStep = tourService.get();
	$scope.setTourStep = function (value){
		tourService.set(value);
	};

	$scope.$watch(
		function(scope) {
			return tourService.get();
		},
		function(newValue, oldValue) {
			$scope.tourStep = newValue;
		}
		);

}]);

sooz.controller('postSingleController', ['$scope', '$http', '$state', '$stateParams', 'tourService', function($scope, $http, $state, $stateParams, tourService){

	$scope.id = $stateParams.post;
	$scope.currentPost = false;

	$http.jsonp("https://api.tumblr.com/v2/blog/soozglobal.tumblr.com/posts/text?api_key=ptyTcbAejsGbUF5s8TAjVsilOgb30A95jrBrLBJoNiKO7ZNrDK&callback=JSON_CALLBACK&id=" + $scope.id)
	.success(function (response) {
		if(response.meta.status !== 404){
			$scope.currentPost = response.response.posts[0];
		}
		else{
			$state.go('root');

		}
	})
	.error(function (response){
		console.log('error');
	});

	$scope.tourStep = tourService.get();
	$scope.setTourStep = function (value){
		tourService.set(value);
	};

}]);

sooz.controller('postsController', ['$scope', 'tourService', '$http', 'articleService', function($scope, tourService, $http, articleService){

	$scope.allPosts = [];
	$http.jsonp("https://api.tumblr.com/v2/blog/soozglobal.tumblr.com/posts/text?api_key=ptyTcbAejsGbUF5s8TAjVsilOgb30A95jrBrLBJoNiKO7ZNrDK&callback=JSON_CALLBACK")
	.success(function (response) {
		$scope.allPosts = response.response.posts;
		// console.log($scope.allPosts);
	});

	$scope.$watch(function(scope) { return articleService.get(); },
		function(newValue, oldValue) {
			$scope.number = newValue;
		}
		);

	$scope.nextArticle = function() {
		if ($scope.number == $scope.allPosts.length) {
			articleService.set(1);
		} else{
			articleService.inc();
		}
	};

	$scope.prevArticle = function() {
		if ($scope.number === 1) {
			articleService.set($scope.allPosts.length);
		} else{
			articleService.dec();
		}
	};

	$scope.tourStep = tourService.get();
	$scope.setTourStep = function (value){
		tourService.set(value);
	};
}]);

sooz.controller('canvasController', ['$scope', '$http', '$stateParams', 'sets',  function($scope, $http, $stateParams, sets){
	$scope.multicanvas = Math.random();

	$scope.imagesAll = [];
	$scope.imagesSelected = [];

	$scope.set= sets.get();

	if (angular.equals({}, $stateParams) || $stateParams.name === '' || $stateParams.name === 'p'){
		$http.jsonp("https://api.tumblr.com/v2/blog/soozglobal.tumblr.com/posts/?api_key=ptyTcbAejsGbUF5s8TAjVsilOgb30A95jrBrLBJoNiKO7ZNrDK&callback=JSON_CALLBACK&tag=sooz-"+$scope.set)
		.success(function (response) {
			$scope.imagesAll = response.response.posts;
			// console.log($scope.imagesAll.photos);
			try {
				$scope.caption = response.response.posts[0].caption;
			} catch (err){
				console.log("SOOZ MESSAGE: Caption not provided by Tumblr.");
			}
			$scope.begin= Math.round( Math.random() * ($scope.imagesAll.length / 2) +1 );
			$scope.end= Math.round( (Math.random() * ($scope.imagesAll.length / 2)) + ($scope.imagesAll.length / 2) ) + 1;
		});
	} else {
		$http.jsonp("https://api.tumblr.com/v2/blog/soozglobal.tumblr.com/posts/?api_key=ptyTcbAejsGbUF5s8TAjVsilOgb30A95jrBrLBJoNiKO7ZNrDK&callback=JSON_CALLBACK&tag=sooz-"+$stateParams.name)
		.success(function (response) {
			$scope.imagesAll = response.response.posts;
			// console.log($scope.imagesAll.photos);
			try{
				$scope.caption = response.response.posts[0].caption;
			} catch (err) {
				// console.log("Caption not provided by Tumblr.");
			}
			$scope.begin= Math.round( Math.random() * ($scope.imagesAll.length / 2) +1 );
			$scope.end= Math.round( (Math.random() * ($scope.imagesAll.length / 2)) + ($scope.imagesAll.length / 2) ) + 1;
		});
	}
}]);

sooz.controller('mediaController', ['$scope', '$http', function($scope, $http){

	$scope.media = [];
	$scope.permitLoad = false;

	$scope.loadMedia = function(){
		if (!$scope.permitLoad) {
			$scope.permitLoad = true;
			$http.jsonp("https://api.tumblr.com/v2/blog/soozglobal.tumblr.com/posts/?api_key=ptyTcbAejsGbUF5s8TAjVsilOgb30A95jrBrLBJoNiKO7ZNrDK&callback=JSON_CALLBACK&tag=sooz-gallery")
			.success(function (response) {
				$scope.media = response.response.posts;
			});
		}
	};
}]);

sooz.controller('webglController', ['$scope', function($scope){

	$scope.webgl = false;

	$scope.testWebgl = function (return_context){
		if (!!window.WebGLRenderingContext) {
			$scope.canvas = document.createElement("canvas");
			$scope.names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
			$scope.context = false;

			for(var i=0;i<4;i++) {
				try {
					$scope.context = $scope.canvas.getContext($scope.names[i]);
					if ($scope.context && typeof $scope.context.getParameter == "function") {
						$scope.webglText = 'WebGL is supported, and enabled.';
						return true;
					}
				} catch(e) {}
			}
			$scope.webglText = 'WebGL is supported, but disabled.';
			return false;
		}
		$scope.webglText = 'WebGL not supported.';
		return false;
	};
	$scope.isWebgl = $scope.testWebgl();
}]);