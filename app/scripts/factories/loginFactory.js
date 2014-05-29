'use strict';

app.factory('loginFactory', ['$resource',
	function($resource){
		return	$resource('http://localhost:8080/authenticate', {}, {
			get: {method:'GET'}
		});
	}]);
	
	
	
	
	
	
	
	
	
	