sooz.filter('slice', function() {
	return function(arr, start, end) {
		return arr.slice(start, end);
	};
});

sooz.filter('trust', ['$sce', function ($sce) {
	return function(t) {
		return $sce.trustAsHtml(t);
	};
}]);

sooz.filter('shuffle', function() {
	var shuffledArr = [],
	shuffledLength = 0;
	return function(arr) {
		var o = arr.slice(0, arr.length);
		if (shuffledLength == arr.length) return shuffledArr;
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			shuffledArr = o;
		shuffledLength = o.length;
		return o;
	};
});