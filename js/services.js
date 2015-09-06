sooz.service('articleService', function () {
	var number = 1;

	return {
		inc: function () {
			number = number + 1;
		},
		dec: function() {
			number = number - 1;
		},
		set: function(value){
			number = value;
		},
		get: function(){
			return number;
		}
	};
});

sooz.service('tourService', function () {
	var number = 0;

	return {
		set: function(value){
			number = value;
		},
		get: function(){
			return number;
		}
	};
});

sooz.service('randomService', function () {

	return {
		get: function(value){
			return Math.floor(Math.random() * value);
		}
	};
});

sooz.service('randomFloatService', function () {

	return {
		get: function(value){
			return Math.random() * value;
		}
	};
});

sooz.service('windowService', function ($window) {
	var width = $window.innerWidth;
	var height = $window.innerHeight;
	var mobile = false;
	var active = false;
	var state = 1;

	if (width <= 1024) {
		mobile = true;
	} else{
		mobile = false;
		active = false;
		state = 0;
	}

	$(window).on("resize.doResize", function (){
		width = $window.innerWidth;
		height = $window.innerHeight;
		if (width <= 1024) {
			mobile = true;
		} else{
			mobile = false;
			active = false;
			state = 0;
		}
	});

	return {
		width: function () {
			return width;
		},
		height: function() {
			return height;
		},
		active: function(){
			return active;
		},
		state: function(){
			return state;
		},
		mobile : function(){
			return mobile;
		}
	};
});

sooz.service('positionService',[ function () {
	var tenForty = [];
	var sixtyNinety = [];
	var thirtySeventy = [];
	var borderWidth = [];

	for ( i=0 ; i<40 ; ++i ){
		tenForty[i]= parseInt(Math.random()*30) + 10;
		sixtyNinety[i]= parseInt(Math.random()*30) + 60;
		thirtySeventy[i]= i + 30;
	}
	for ( i=10 ; i<40 ; ++i ){
		borderWidth[i] = [i]
	}

	return {
		small: function () {
			return tenForty[Math.round(Math.random() * (tenForty.length - 1))];
		},
		big: function() {
			return sixtyNinety[Math.round(Math.random() * (sixtyNinety.length - 1))];
		},
		random: function(){
			return thirtySeventy[Math.round(Math.random() * (thirtySeventy.length - 1))];
		},
		border: function(){
			return borderWidth[Math.round(Math.random() * (borderWidth.length - 1))];
		}
	};
}]);