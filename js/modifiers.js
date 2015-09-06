sooz.directive('szOrder', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, elem, attr) {
			elem.css('position', 'absolute');
			elem.css('z-index', Math.floor(Math.random()*50)+50);
		}
	};
}]);

sooz.directive('szChance', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		scope: {
			chance: "@chance",
		},
		link: function (scope, elem, attr) {
			var luck = Math.random() * 100;
			var hide = function (){
				elem.css('display', 'none');
			};
			if (luck > scope.chance) {
				// console.log(scope.chance);
				// console.log(luck);
				hide();
			}
		}
	};
}]);

sooz.directive('szOpacity', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, elem, attr) {
			var luck = Math.random() * 100;
			var trans = function (){
				elem.css('opacity', '0.8');
			};
			if (luck <= 50) {
				trans();
			}
		}
	};
}]);

sooz.directive('szPosition', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, elem, attr) {

			elem.css('position', 'absolute');
			elem.addClass('animated');
			var topLeft = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
			};

			var bottomLeft = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
			};

			var topRight = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
			};

			var bottomRight = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				topLeft();
				$timeout(topLeft, 100);
				$interval(topLeft, 10000);
			};
			if (luck <= 10 && luck > 5) {
				bottomLeft();
				$timeout(bottomLeft, 100);
				$interval(bottomLeft, 10000);
			};
			if (luck <= 15 && luck > 10) {
				topRight();
				$timeout(topRight, 100);
				$interval(topRight, 10000);
			};
			if (luck <= 20 && luck > 15) {
				bottomRight();
				$timeout(bottomRight, 100);
				$interval(bottomRight, 10000);
			};

		}
	};
}]);


sooz.directive('szOpac', ['$timeout', '$interval', 'randomFloatService', function($timeout, $interval, randomFloatService) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, elem, attr) {

			elem.addClass('animated');
			var opac = function (){
				elem.css('opacity', randomFloatService.get(1));
			};


			opac();
			$timeout(opac, 100);
			$interval(opac, 10000);
		}
	};
}]);
sooz.directive('szSPosition', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, elem, attr) {

			elem.css('position', 'absolute');
			elem.addClass('animated');
			var topLeft = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
			};

			var bottomLeft = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
			};

			var topRight = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
			};

			var bottomRight = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				topLeft();
			};
			if (luck <= 10 && luck > 5) {
				bottomLeft();
			};
			if (luck <= 15 && luck > 10) {
				topRight();
			};
			if (luck <= 20 && luck > 15) {
				bottomRight();
			};

		}
	};
}]);

sooz.directive('szSize', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var size = function (){

				elem.css('width', Math.floor(Math.random()*80) +'%');
				elem.css('height', Math.floor(Math.random()*80) +'%');
			};

			size();
			$timeout(size, 100);
			$interval(size, 10000);

		}
	};
}]);

sooz.directive('szWidth', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var width = function (){
				elem.css('width', Math.floor(Math.random()*50) +'%');
				elem.css('height', 'auto');
			};

			width();
			$timeout(width, 100);
			$interval(width, 10000);

		}
	};
}]);

sooz.directive('szSWidth', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var width = function (){
				elem.css('width', Math.floor(Math.random()*50) +'%');
				elem.css('height', 'auto');
			};

			width();
		}
	};
}]);

sooz.directive('szHeight', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var height = function (){
				elem.css('width', 'auto');
				elem.css('height', Math.floor(Math.random()*50) +'%');
			};

			height();
			$timeout(height, 100);
			$interval(height, 10000);

		}
	};
}]);

sooz.directive('szBorder', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'A',
		replace: false,

		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var border = function (){
				elem.css('border-style', 'solid');
				elem.css('border-width', positionService.border()+'px');
			};

			border();
			$timeout(border, 100);
			$interval(border, 10000);
		}
	};
}]);

sooz.directive('szMaskFrame', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			var maskFrame = function (){
				elem.css('-webkit-clip-path', 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)');
				elem.css('clip-path', 'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)');
			};

			maskFrame();
		}
	};
}]);

sooz.directive('szMaskQuarter', ['$timeout', '$interval', 'randomService', function($timeout, $interval, randomService) {
	this.r = randomService;
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			var maskRect = function (){
				var luck = Math.random();
				// console.log(luck);
				this.value = '';
				if (luck <= 0.25) {
					this.value = 'polygon(0% 0%, 0% 100%, 50% 100%, 50% 50%, 100% 50%, 100% 0%)';
				}
				if (0.25 < luck && luck <= 0.5) {
					this.value = 'polygon(50% 0%, 50% 50%, 0% 50%, 0% 100%, 100% 100%, 100% 0%)';
				}
				if (0.5 < luck && luck <= 0.75) {
					this.value = 'polygon(0% 0%, 0% 50%, 50% 50%, 50% 100%, 100% 100%, 100% 0%)';
				}
				if (0.75 < luck && luck <= 1) {
					this.value = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 50%, 50% 50%, 50% 0%)';
				}
				elem.css('-webkit-clip-path', value);
				elem.css('clip-path', value);
				
			};

			maskRect();
			$timeout(maskRect, 350);
			$interval(maskRect, 350);
		}
	};
}]);

sooz.directive('szMaskRect', ['$timeout', '$interval', 'randomService', function($timeout, $interval, randomService) {
	this.r = randomService;
	return {
		restrict: 'A',
		replace: false,

		link: function (scope, elem, attr) {
			var maskRect = function (){
				this.value = 'inset('+r.get(25)+'% '+r.get(25)+'% '+r.get(25)+'% '+r.get(25)+'%)';
				elem.css('clip-path', value);
				elem.css('-webkit-clip-path', value);
			};

			maskRect();
		}
	};
}]);

sooz.directive('szMaskCirc', ['$timeout', '$interval', 'randomService', function($timeout, $interval, randomService) {
	this.r = randomService;
	return {
		restrict: 'A',
		replace: false,

		link: function (scope, elem, attr) {
			var maskCirc = function (){
				elem.css('-webkit-clip-path', 'circle('+r.get(100)+'% at '+r.get(100)+'% '+r.get(50)+'%)');
				elem.css('clip-path', 'circle('+r.get(100)+'% at '+r.get(100)+'% '+r.get(50)+'%)');
			};

			maskCirc();
		}
	};
}]);

sooz.directive('szMaskX', ['$timeout', '$interval', 'randomService', function($timeout, $interval, randomService) {
	this.r = randomService;
	return {
		restrict: 'A',
		replace: false,

		link: function (scope, elem, attr) {
			var maskX = function (){
				elem.css('-webkit-clip-path', 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)');
				elem.css('clip-path', 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)');
			};

			maskX();
		}
	};
}]);

sooz.directive('szMaskDiamond', ['$timeout', '$interval', 'randomService', function($timeout, $interval, randomService) {
	this.r = randomService;
	return {
		restrict: 'A',
		replace: false,

		link: function (scope, elem, attr) {
			var maskDiamond = function (){
				elem.css('-webkit-clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
				elem.css('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
			};

			maskDiamond();
		}
	};
}]);

sooz.directive('szFrame', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.css('position', 'absolute');
			elem.css('border-style', 'solid');
			elem.css('z-index', Math.floor(Math.random()*50)+50);
			elem.addClass('animated');
			var topLeft = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
				elem.css('border-width', positionService.border()+'px');
				elem.css('width', Math.floor(Math.random()*80) +'%');
				elem.css('height', Math.floor(Math.random()*80) +'%');
			};

			var bottomLeft = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
				elem.css('border-width', positionService.border()+'px');
				elem.css('width', Math.floor(Math.random()*80) +'%');
				elem.css('height', Math.floor(Math.random()*80) +'%');
			};

			var topRight = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
				elem.css('border-width', positionService.border()+'px');
				elem.css('width', Math.floor(Math.random()*80) +'%');
				elem.css('height', Math.floor(Math.random()*80) +'%');
			};

			var bottomRight = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
				elem.css('border-width', positionService.border()+'px');
				elem.css('width', Math.floor(Math.random()*80) +'%');
				elem.css('height', Math.floor(Math.random()*80) +'%');
			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				topLeft();
				$timeout(topLeft, 100);
				$interval(topLeft, 10000);
			};
			if (luck <= 10 && luck > 5) {
				bottomLeft();
				$timeout(bottomLeft, 100);
				$interval(bottomLeft, 10000);
			};
			if (luck <= 15 && luck > 10) {
				topRight();
				$timeout(topRight, 100);
				$interval(topRight, 10000);
			};
			if (luck <= 20 && luck > 15) {
				bottomRight();
				$timeout(bottomRight, 100);
				$interval(bottomRight, 10000);
			};

		}
	};
}]);

sooz.directive('szImage', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.css('position', 'absolute');
			elem.css('z-index', Math.floor(Math.random()*50)+50);
			elem.addClass('animated-slow');
			var topLeft = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
				elem.css('width', Math.floor(Math.random()*50) +'%');

			};

			var bottomLeft = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('left', positionService.small()+'%');
				elem.css('width', Math.floor(Math.random()*50) +'%');

			};

			var topRight = function (){
				elem.css('top', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
				elem.css('width', Math.floor(Math.random()*50) +'%');

			};

			var bottomRight = function (){
				elem.css('bottom', positionService.small()+'%');
				elem.css('right', positionService.small()+'%');
				elem.css('width', Math.floor(Math.random()*50) +'%');

			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				topLeft();
				$timeout(topLeft, 100);
				$interval(topLeft, 25000);
			};
			if (luck <= 10 && luck > 5) {
				bottomLeft();
				$timeout(bottomLeft, 100);
				$interval(bottomLeft, 25000);
			};
			if (luck <= 15 && luck > 10) {
				topRight();
				$timeout(topRight, 100);
				$interval(topRight, 25000);
			};
			if (luck <= 20 && luck > 15) {
				bottomRight();
				$timeout(bottomRight, 100);
				$interval(bottomRight, 25000);
			};

		}
	};
}]);

sooz.directive('szRotate', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			elem.addClass('animated');
			var rot0 = function (){
				elem.css('transform', 'rotate(0deg)');
				elem.css('-ms-transform', 'rotate(0deg)');
				elem.css('-webkit-transform', 'rotate(0deg)');
			};
			var rot45 = function (){
				elem.css('transform', 'rotate(45deg)');
				elem.css('-ms-transform', 'rotate(45deg)');
				elem.css('-webkit-transform', 'rotate(45deg)');
			};

			var rot90 = function (){
				elem.css('transform', 'rotate(90deg)');
				elem.css('-ms-transform', 'rotate(90deg)');
				elem.css('-webkit-transform', 'rotate(90deg)');
			};

			var rot180 = function (){
				elem.css('transform', 'rotate(180deg)');
				elem.css('-ms-transform', 'rotate(180deg)');
				elem.css('-webkit-transform', 'rotate(180deg)');
			};

			var rot270 = function (){
				elem.css('transform', 'rotate(270deg)');
				elem.css('-ms-transform', 'rotate(270deg)');
				elem.css('-webkit-transform', 'rotate(270deg)');
			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				rot0();
			};
			if (luck <= 10 && luck > 5) {
				rot90();
			};
			if (luck <= 15 && luck > 10) {
				rot180();
			};
			if (luck <= 20 && luck > 15) {
				rot270();
			};

		}
	};
}]);

sooz.directive('szSkew', ['$timeout', '$interval', function($timeout, $interval) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {
			var skew = function (){
				elem.css('transform', 'matrix('+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+')');
				elem.css('-ms-transform', 'matrix('+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+')');
				elem.css('-webkit-transform', 'matrix('+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+', '+Math.random()+')');
			};

			skew();
		}
	};
}]);

sooz.directive('szSpin', ['$timeout', '$interval', 'positionService', function($timeout, $interval, positionService) {
	return {
		restrict: 'A',
		replace: false,
		link: function (scope, elem, attr) {

			var spin = function (){
				elem.addClass('animated slow infinite linear spin');
			};

			var spin270 = function (){
				elem.addClass('animated slow infinite linear spin270');
			};

			var spin90 = function (){
				elem.addClass('animated slow infinite linear spin90');
			};

			var spin180 = function (){
				elem.addClass('animated slow infinite linear spin180');
			};

			var luck = Math.random() * 20;
			if (luck <= 5 && luck >= 0) {
				spin();
			};
			if (luck <= 10 && luck > 5) {
				spin270();
			};
			if (luck <= 15 && luck > 10) {
				spin90();
			};
			if (luck <= 20 && luck > 15) {
				spin180();
			};

		}
	};
}]);