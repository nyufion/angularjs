angular.module('confusionApp')     
      .controller("MenuController", ['$scope', 'menuFactory2', function($scope, menuFactory2){
        $scope.tab = 1; //在bootstrap的tab class中， 每个tab有一个index， 从1开始， 这里保证第一页active
        $scope.filtText = "";
        $scope.dishes = {};
        menuFactory2.getDishes()
                    .then(function(response){
                      $scope.dishes = response.data;
                      $scope.showMenu = true;
                    }, function(response){
                      $scope.messgae = "Error" + response.status + " " + response.statusText;

                    })
        $scope.select = function(setTab){
          $scope.tab = setTab;
          if (setTab === 2){
            $scope.filtText = "appetizer"
          } else if (setTab === 3){
            $scope.filtText = "main"
          } else if (setTab === 4){
            $scope.filtText = "dessert"
          } else {
            $scope.filtText = "";
          }
        }
        $scope.isSelected = function(checkTab){
          return ($scope.tab === checkTab);
        }
        $scope.showDetails = false;
        $scope.toggleDetails = function(){
          $scope.showDetails = !$scope.showDetails;
        }
      }])
      .controller('dishDetailController', ['$scope', 'menuFactory2', '$routeParams', function($scope, menuFactory2, $routeParams){
          var index = parseInt($routeParams.id, 10);
          $scope.showMenu = false;
          menuFactory2.getDish(index)
                    .then(function(response){
                      $scope.dish = response.data;
                      $scope.showMenu = true;
                    }, function(response){
                      $scope.messgae = "Error" + response.status + " " + response.statusText;
                    })
          $filtText = "";
          
      }])
      .controller('ContactController', ['$scope', function($scope){
                $scope.feedback = {mychannel : "", firstName : "", lastName : "", agree : false, email: ""};
                $scope.channels = [{value:"tel", label:"Tel."}, {value:"email", label:"email"}]
                $scope.invalidChannelSelection;
                $scope.channel;
                $scope.sendFeedback = function(){
                    if(channel === null){
                        invalidChannelSelection = false;
                    } else {
                        invalidChannelSelection = true;
                    }
                }
            }])




