/*Michael Mitchell*/
/*SD2670*/
/*25AUG16*/
/*Final Project*/
/*Prof. Asam Mahmood*/

angular.module('accountFeederApp.controllers', []).
controller('accountController', function($scope) {
	$scope.accountFilter = null;
    $scope.accountsList = [
      {
          Account: {
              accountName: 'Steam',
              companyName: 'Valve'
          },
          games: 218,
          nationality: "United States of America (USA)",
		  url: "https://steamcommunity.com/id/Liger500",
          Constructors: [
              {name: "Liger500"}
          ]
      },
      {
          Account: {
			accountName: 'Xbox',
            companyName: 'Microsoft'
          },
          games: 157,
          nationality: "United States of America (USA)",
		  url: "https://www.playfire.com/Liger500",
          Constructors: [
            {name: "Liger500"}
          ]
      },
	  {
		  Account: {
			accountName: 'Playstation',
			companyName: 'Sony',
		  },
		  games: 35,
		  nationality: "Japan",
		  url: "https://my.playstation.com/Liger500",
		  Constructors: [
		  {name: "Liger500"}
		  ]
	  },
	  {
		  Account: {
			accountName: 'Nintendo',
			companyName: 'Nintendo',
		  },
		  games: 20,
		  nationality: "Japan",
		  url: "http://www.nintendo.com",
		  Constructors: [
		  {name: "Liger500"}
		  ]
	  }
    ];
	/*
	ergastAPIservice.getAccount().success(function (response) {
		$scope.accountsList = response.MRData.AccountTable.AccountLists[0].AccountStanding;
	});
	*/
});