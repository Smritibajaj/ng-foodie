var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})
foodieApp.controller('loginController',function($scope, $location) {
    $scope.goToHome = function() {
        //console.log('Do Something')
        $location.url('home')
	}
})
foodieApp.controller('mainController',function($scope, $location) {
	$scope.restaurants = [{
        name: 'Farzi Cafe',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Modern Indian',
        cost: '2200',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'Garam  Dharam',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '3.9',
        cuisines: 'Modern Indian',
        cost: '1000',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'Social',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.9',
        cuisines: 'Modern Indian',
        cost: '1800',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'My Bar HQ',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.6',
        cuisines: 'Modern Indian',
        cost: '1500',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'F Bar',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.3',
        cuisines: 'Modern Indian',
        cost: '2100',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'MTV FLYP',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Modern Indian',
        cost: '2000',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'MRP',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.3',
        cuisines: 'Modern Indian',
        cost: '2100',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    },
    {
        name: 'Ware House Cafe',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.5',
        cuisines: 'Modern Indian',
        cost: '2500',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
    }]
})
