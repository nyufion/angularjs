angular.module('confusionApp')
		.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when('/contactus', {templateUrl:'contact.html', controller:'ContactController'})
				.when('/menu', {templateUrl:'menu.html', controller:'MenuController'})
				.when('/menu/:id', {templateUrl:'dishDetail.htm', controller:'dishDetailController'})
				.otherwise('/menu');
		}]);