;(function(){
	var app = angular.module('stefanoschrs.angular-trianglify', []);
	app.directive('trianglify', function(){
		return {
			restrict: 'A',
			link: function(scope, element) {
				var pattern = Trianglify({
					width: element[0].offsetWidth,
					height: element[0].offsetHeight
				});
				element[0].style.backgroundImage = 'url('+pattern.png()+')';
			}
		};
	});
})();