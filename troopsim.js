angular.module('troopSim',[])
.controller('troopSimCtrl', function($scope, $location) {
    $scope.resourceTrainingCosts = [
      { tier: 1,
        costs: [
          {name: 'Cavalry', percent: 0},
          {name: 'Range', percent: 0},
          {name: 'Infantry', percent: 0},
          {name: 'Siege', percent: 0}
        ]},
      { tier: 2,
        costs: [
          {name: 'Cavalry', percent: 0},
          {name: 'Range', percent: 0},
          {name: 'Infantry', percent: 0},
          {name: 'Siege', percent: 0}
      ]},
      { tier: 3,
        costs: [
          {name: 'Cavalry', percent: 0},
          {name: 'Range', percent: 0},
          {name: 'Infantry', percent: 0},
          {name: 'Siege', percent: 0}
      ]},
      { tier: 4,
        costs: [
          {name: 'Cavalry', percent: 0},
          {name: 'Range', percent: 0},
          {name: 'Infantry', percent: 0},
          {name: 'Siege', percent: 0}
      ]}];

    $scope.getResourceTrainingCostsHash = function() {
      var costs = new Uint8Array(16);
      for (var i=0;i<$scope.resourceTrainingCosts.length;i++) {
        for (var j=0;j<$scope.resourceTrainingCosts[i].costs.length;j++) {
          costs[j+(i*4)] = $scope.resourceTrainingCosts[i].costs[j].percent;
        }
      }
      return btoa(String.fromCharCode.apply(null, costs));
    };

    $scope.setResourceTrainingCostsHash = function(path) {
      path = path.substring(1);
      var costs = new Uint8Array(atob(path).split("").map(function(c) {
        return c.charCodeAt(0);
      }));
      for (var i=0;i<$scope.resourceTrainingCosts.length;i++) {
        for (var j=0;j<$scope.resourceTrainingCosts[i].costs.length;j++) {
          $scope.resourceTrainingCosts[i].costs[j].percent = costs[j+(i*4)];
        }
      }
    };

    $scope.$watch($scope.getResourceTrainingCostsHash, function(newVal) {
      $location.path(newVal);
    });

    $scope.$watch(function() {return $location.path()}, function(newVal) {
      $scope.setResourceTrainingCostsHash(newVal)
    });
  });