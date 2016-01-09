angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$http) {



  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('LoginCtrl', function($scope, $stateParams,$location,$ionicLoading) {
    $scope.doLogin = function (loginData) {
      console.log(loginData);
      $location.path('app/userList');
    }
 })
  .controller('UserListCtrl', function($scope, $http,$ionicLoading) {
    /*$scope.users = [
      { name: 'Cem Gündeşlioğlu', image: 'img/cem.png', offercount:22, phone:'0532 584 48 51' },
      { name: 'Ahmet Çeliktürk', image: 'img/ahmet.png', offercount:11, phone:'0532 584 48 51' },
      { name: 'Elif Çeliktürk', image: 'img/elif.png', offercount:5 , phone:'0533 286 33 49'},
      { name: 'Ayhan Aslan ', image: 'img/bay.png', offercount:6 , phone:'0535 831 64 38'},
      { name: 'Özlem Yıldız', image: 'img/bayan.png', offercount:23 , phone:'0533 521 26 67'},
      { name: 'Lütfü Armağan', image: 'img/bay.png', offercount:12 , phone:'0532 546 47 54'},
      { name: 'Şermin Kilitçioğlu', image: 'img/bayan.png', offercount:9 , phone:'0506 690 41 68'},
      { name: 'Tarık Aktaş', image: 'img/bay.png', offercount:3 , phone:'0532 435 79 19'}
    ];*/

    $scope.show = function() {
      $ionicLoading.show({
        template: 'Yükleniyor...'
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide();
    };
    $scope.show();
    $http.get('http://realestatemobileapp.azurewebsites.net/api/user').
      then(function(response) {
        $scope.hide();
        $scope.users = response.data[0];
      }, function(response) {
    });


  })
  .controller('OfferListCtrl', function($scope, $http,$stateParams,$ionicLoading) {
    /*
     $scope.offers = [
      { title: 'REALTYWORLD TEMA DAN SATILIK REZİDANCE DAİRE', image: 'img/1.jpg',price:' 260.000 TL'},
      { title: 'TİCARİ KONUT PARSELİMİZ SATILIKTIR', image: 'img/2.jpg',price:' 2.000.000 TL'},
      { title: 'SATILIK 2+1; KIZILTOPRAK TA 160 M2 BAHÇE DUBLEKSİ ', image: 'img/3.jpg',price:' 150.000 TL'},
      { title: 'MEYDAN KAVAĞINDA UYGUN FİYATLI SATILIK DAİRE', image: 'img/4.jpg',price:' 180.000 TL'},
      { title: 'ŞEHİR MERKEZİNDE KİRACILI SATILIK DÜKKAN', image: 'img/5.jpg',price:' 250.000 TL'},
      { title: 'PORTAKAL ÇİÇEĞİ CADDE ÜZERİ KURUMSAL FİRMALARA KİRALIK DÜKKAN', image: 'img/6.jpg',price:' 2.000 TL'},
      { title: 'KAMUDA 3+1 DUBLEX SATILIK DAİRE', image: 'img/7.jpg',price:' 150.000 TL'},
      { title: 'MANDIRLARDA YATIRIMLIK 2B ARSA', image: 'img/8.jpg',price:' 700.000 TL'},
      { title: 'SATILIK 3+1 , YEŞİLBAHÇE MAH.KATTA FIRSAT DAİRE ', image: 'img/9.jpg',price:' 210.000 TL'},
      { title: 'MEYDANKAVAĞI EKŞİOĞLU BAYRAKTAR SİTESİNDE ÖZEL TASARIM DAİRE', image: 'img/10.jpg',price:' 400.000 TL'},
      { title: 'ANA CADDE ÜZERİNDE 3.200.000 TL SATILIK DÜKKAN', image: 'img/11.jpg',price:' 850.000 TL'},
      { title: 'KIZILTOPRAK TA SATILIK DAİRE', image: 'img/12.jpg',price:' 135.000 TL'},
      { title: 'UNCALIDA ÖZELLİKLİ SİTE İÇİNDE 3+1 DAİRE', image: 'img/13.jpg',price:' 220.000 TL'},
    ];
   */
    $scope.show = function() {
      $ionicLoading.show({
        template: 'Yükleniyor...'
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide();
    };
    $scope.show();
    $http.get('http://realestatemobileapp.azurewebsites.net/api/property/getfromUserId/'+$stateParams.userId).
      then(function(response) {
        $scope.hide();
        $scope.offers = response.data[0];
      }, function(response) {
      });

  })
  .controller('AllOfferListCtrl', function($scope, $http,$stateParams,$ionicLoading) {

    $scope.show = function() {
      $ionicLoading.show({
        template: 'Yükleniyor...'
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide();
    };
    $scope.show();
    $http.get('http://realestatemobileapp.azurewebsites.net/api/property/get').
      then(function(response) {
        $scope.hide();
        $scope.offers = response.data[0];
      }, function(response) {
      });

  })
  .controller('SearchCtrl', function ($scope,$location) {

    $scope.go = function (path) {
      $location.path(path);
    };

  })

  .controller('OfferDetailCtrl', function ($scope,$location,$stateParams,$http,$ionicLoading) {

    $scope.show = function() {
      $ionicLoading.show({
        template: 'Yükleniyor...'
      });
    };
    $scope.hide = function(){
      $ionicLoading.hide();
    };
    $scope.show();

    $http.get('http://realestatemobileapp.azurewebsites.net/api/property/get/'+$stateParams.Id).
      then(function(response) {
        $scope.hide();
        $scope.offer = response.data[0][0];
      }, function(response) {
    });
  });
