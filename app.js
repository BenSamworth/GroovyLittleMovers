var myApp = angular.module('myApp',['ngRoute', 'ngAnimate']);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

myApp.config(function ($routeProvider){
	
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	
	.when('/aboutus', {
		templateUrl: 'pages/aboutus.html',
		controller: 'aboutUsController'
	})
	
	.when('/classes', {
		templateUrl: 'pages/classes.html',
		controller: 'classesController'
	})
	
	.when('/contactus', {
		templateUrl: 'pages/contactus.html',
		controller: 'contactUsController'
	})
	
	.when('/parties', {
		templateUrl: 'pages/parties.html',
		controller: 'partiesController'
	})
	
	.when('/whenwhere', {
		templateUrl: 'pages/whenwhere.html',
		controller: 'whenWhereController'
	})
});

myApp.controller('homeController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'Main';
}]);

myApp.controller('aboutUsController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'About Us';
}]);

myApp.controller('classesController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'Classes';
}]);

myApp.controller('contactUsController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'Contact Us';
}]);

myApp.controller('partiesController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'Parties';
}]);

myApp.controller('whenWhereController', ['$scope','$log', function( $scope, $log){
	$scope.name = 'When And Where';
}]);

onload=function(){
	//myJS.setupTestimonial(true);
}

myApp.testimonialTimeGap=10

myApp.testimonials=[
		{
			id:0,
			statement:'I cannot speak highly enough of how fab your classes are. My kids adore seeing George and getting \'into the groove\'. Thank you!',
			author:'Mum to Daisy, 3 and Archie, 2'
		},
		{
			id:1,
			statement: 'Katy is so full of energy, with brilliantly planned classes and has such passion in everything she does.',
			author:'Mum to Elika, 3'
		},
		{
			id:2,
			statement:'It\'s lovely seeing Luka picking up on new things and then practising at home.',
			author:'Mum to Luka, 20 months'
		},
		{
			id:3,
			statement:'James has been doing the Zoom dance all day!',
			author:'Mum to James, 4'
		},
		{
			id:4,
			statement:'We had a fantastic time this morning. These classes are just what I am looking for.',
			author:'Mum to Madeleine, 2 and Amelie, 18 months'
		},
		{
			id:5,
			statement:'I am really impressed with the classes and love the interaction between Katy and the children.',
			author:'Mum to Jessica, 4'
		},
		{
			id:6,
			statement:'The classes are so uplifting.',
			author:'Mum to Joseph, 6 months'
		},
		{
			id:7,
			statement:'Groovy Little Movers has really helped Tom with his movement, social skills and confidence.',
			author:'Mum to Tom, 3'
		},
		{
			id:8,
			statement:'The classes are high energy and educational and great to make them practise listening. Wonderful!',
			author:'Mum to Zoe, 3'
		},
		{
			id:9,
			statement:'This was definitely the least stressful and most enjoyable party we have done so far. Would highly recommend!',
			author:'Becky, Mum of 3'
		},
		{
			id:10,
			statement:'My son, Jack is 3 years old and we both love coming to Groovy Little Movers. It is such fun and I feel like it is really preparing my little boy for school. He is developing skills such as turn taking, sustained listening and following instructions and much more. Katy makes the classes fun and exciting and is always looking to move the children on. Thank you for being such an awesome teacher Katy.',
			author:'Christy, Mum to Jack'
		},
		{
			id:11,
			statement:'My daughter Daisy goes to numerous classes, but Groovy Little Movers is without a doubt, her favourite. Every Friday she wakes up full of excitement at the prospect of seeing Groovy George!........We have learnt some great songs and moves which we now do at home together. I find the classes are really helping Daisy to use her imagination, learn about rhythm and movement, develop her language skills and understand about the importance of sharing and taking turns with others.',
			author:'Mum to Daisy'
		},
		{
			id:12,
			statement:'Katy is so full of energy, so welcoming and the class is fast paced so the children are constantly entertained and mesmerised! I cannot recommend this class more!',
			author:'Helen, Mum to twins Emily and Bella aged 1'
		},
		{
			id:13,
			statement:'This was definitely the least stressful and most enjoyable party we have done so far. Would highly recommend!',
			author:'Becky, Mum of 3'
		},
		{
			id:14,
			statement:'Katy is a bundle of energy – the little ones are genuinely captivated by her. We come away from the classes feeling upbeat every week. Can’t recommend enough!',
			author:'Jenny, Mum to Howie'
		},
{
			id:15,
			statement:'A huge thank you to Katy and Groovy George who made my daughter’s 2nd birthday party. Katy came into our home and set up quickly, without hassle and on it for the get go and didn’t stop moving with 16 children until she finished. She remembered every child’s name and was truly fabulous. Professional and amazing at her job.',
			author:'Juliette, Mum of 2'
		},
		{
			id:16,
			statement:'We had a Groovy Little Movers party for my daughter’s 3rd birthday. Katy was fantastic and made a real effort to speak with parents and children before the session began. As always, the GLM class was vibrant, engaging for all, used high quality props and allowed the children to interact and dance at their own level. Everyone had a wonderful time. Would highly recommend.',
			author:'Rachael, Mum of 3'
		},
		{
			id:17,
			statement:'A massive thank you to Katy for the fantastic party she gave my son for his 2nd birthday. Katy had the task of dealing with children ranging from 1 - 4 years old. Within 2 minutes she had them fully engaged and participating. They all loved it and I have only had extremely positive feedback from all the parents. Katy made my life very easy for which I’m very thankful. I cannot recommend a GLM party enough.',
			author:'Ruth, Mum to 2 boys'
		}				
	];

myApp.testimonialId	=0;
	
myApp.controller('testimonialController', function ($scope, $interval, $filter) {
	//Initiate the Timer object.
	$scope.Timer = null;
	
	//Timer start function.
	$scope.StartTimer = function () {
		//Set the Timer start message.
		$scope.statement = myApp.testimonials[myApp.testimonialId].statement;
		$scope.author = myApp.testimonials[myApp.testimonialId].author;
		$scope.animate = true;

		//Initialize timer
		$scope.Timer = $interval(function () {
			$scope.incrementTestimonial();
			$scope.animate = false;
			$interval(function(){
				$scope.statement = myApp.testimonials[myApp.testimonialId].statement;
				$scope.author = myApp.testimonials[myApp.testimonialId].author;
				$scope.animate = true;
			},300);
		}, myApp.testimonialTimeGap*1000);
	};

	//Timer stop function.
	$scope.StopTimer = function () {

		//Cancel the Timer.
		if (angular.isDefined($scope.Timer)) {
			$interval.cancel($scope.Timer);
		}
	};
	
	$scope.restartTimer=function(){
		$scope.StopTimer();
		$scope.StartTimer();
	}
	
	$scope.incrementTestimonial= function(){
		myApp.testimonialId++;
		if (myApp.testimonialId>myApp.testimonials.length-1) {
			myApp.testimonialId=0;
		}
	}
	
	$scope.nextTestimonial=function(){
		$scope.incrementTestimonial();
		$scope.animate = false;
		$interval(function(){
			$scope.restartTimer();
		},300);
	}
	
	$scope.StopTimer();
	$scope.StartTimer();
});