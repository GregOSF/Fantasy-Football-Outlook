angular.module('sportsApp', [])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		    // controller logic

	}])
	.controller('PlayerCtrl', ['$scope', '$http', function ($scope, $http) {
			$scope.players = [];
			// GET request
			$scope.searchPlayer = function () {
			      var name = $scope.playz.replace(/\s+/, '%20');
			      var searchUrl = 'http://api.cbssports.com/fantasy/players/search?name=' + name + '&version=3.0&SPORT=football&response_format=JSON&callback=JSON_CALLBACK';
			      // var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=d8d0d6b44249490bbde6eee4d1968dac&callback=JSON_CALLBACK';
			      console.log(searchUrl)
			      $http.jsonp(searchUrl)
			        .then(function(response) {
      			  	console.log(response)
      			  	$scope.player=response.data
      			  	var playerId = response.data.body.players[0].id
      			  	$http.jsonp('http://api.cbssports.com/fantasy/players/outlook?version=3.0&SPORT=football&player_id=' + playerId + '&response_format=JSON&callback=JSON_CALLBACK')
      			  	  .then(function(response) {
      			  	  	console.log(response)
      			  	  	$scope.outlook=response.data
      			  		})

      				})
			        
			    }
			// $http.jsonp('http://api.cbssports.com/fantasy/players/outlook?version=3.0&SPORT=football&player_id=187741&response_format=JSON&callback=JSON_CALLBACK')
			//   .then(function(response) {
			//   	console.log(response)
			//   	$scope.player=response.data
			// 	})
	}]);