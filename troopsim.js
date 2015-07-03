angular.module('troopSim',[])
.controller('troopSimCtrl', function($scope, $location) {
    $scope.data = {
      rtc: [
        {
          tier: 1,
          costs: [
            {name: 'Cavalry', percent: 0},
            {name: 'Range', percent: 0},
            {name: 'Infantry', percent: 0},
            {name: 'Siege', percent: 0}
          ]
        },
        {
          tier: 2,
          costs: [
            {name: 'Cavalry', percent: 0},
            {name: 'Range', percent: 0},
            {name: 'Infantry', percent: 0},
            {name: 'Siege', percent: 0}
          ]
        },
        {
          tier: 3,
          costs: [
            {name: 'Cavalry', percent: 0},
            {name: 'Range', percent: 0},
            {name: 'Infantry', percent: 0},
            {name: 'Siege', percent: 0}
          ]
        },
        {
          tier: 4,
          costs: [
            {name: 'Cavalry', percent: 0},
            {name: 'Range', percent: 0},
            {name: 'Infantry', percent: 0},
            {name: 'Siege', percent: 0}
          ]
        }
      ],
      trainingBoosts: [
        {name: "Hero Skills Training Boosts I", percent: 0},
        {name: "Hero Skills Training Boosts I", percent: 0},
        {name: "Total Hero Gear Boosts", percent: 0},
        {name: "Research Training Speed (Combat)", percent: 0},
        {name: "Research Training Speed II (Hero)", percent: 0},
        {name: "Research Training Speed III (Restorative)", percent: 0}
      ],
      miscBoosts: [
        {name: "Research Training Cap (Restorative)", percent:0},
        {name: "Coliseum Training Boost", percent:0},
        {name: "Boost Item", percent:0}
      ]
    };

    $scope.getHash = function() {
      var costs = new Uint8Array(
        $scope.data.rtc.length*4 +
        $scope.data.trainingBoosts.length +
        $scope.data.miscBoosts.length);

      // encode rtc
      for (var i=0; i<$scope.data.rtc.length; i++) {
        for (var j=0; j<$scope.data.rtc[i].costs.length; j++) {
          costs[j+(i*4)] = $scope.data.rtc[i].costs[j].percent;
        }
      }
      // encode training boosts
      for (var i=0; i<$scope.data.trainingBoosts.length; i++) {
        costs[$scope.data.rtc.length*4 + i] = $scope.data.trainingBoosts[i].percent;
      }

      // encode misc boosts
      for (var i=0; i<$scope.data.miscBoosts.length; i++) {
        var idx = $scope.data.rtc.length*4 + $scope.data.trainingBoosts.length + i;
        costs[idx] = $scope.data.miscBoosts[i].percent;
      }

      // convert array to hash
      return btoa(String.fromCharCode.apply(null, costs));
    };

    $scope.setHash = function(path) {
      // get rid of leading forward slash from url
      path = path.substring(1);

      // convert hash to array
      var costs = new Uint8Array(atob(path).split("").map(function(c) {
        return c.charCodeAt(0);
      }));

      // load rtc from array
      for (var i=0; i<$scope.data.rtc.length; i++) {
        for (var j=0; j<$scope.data.rtc[i].costs.length; j++) {
          $scope.data.rtc[i].costs[j].percent = costs[j+(i*4)];
        }
      }

      // load training boosts from array
      for (var i=0; i<$scope.data.trainingBoosts.length; i++) {
        $scope.data.trainingBoosts[i].percent = costs[$scope.data.rtc.length*4 + i];
      }

      // load misc boosts from array
      for (var i=0; i<$scope.data.miscBoosts.length; i++) {
        var idx = $scope.data.rtc.length*4 + $scope.data.trainingBoosts.length + i;
        $scope.data.miscBoosts[i].percent = costs[idx];
      }
    };

    // watch for the user to change the form data, and update the url
    $scope.$watch($scope.getHash, function(newVal) {
      $location.path(newVal);
    });

    // watch for the url to change, and update the form data
    $scope.$watch(function() {return $location.path()}, function(newVal) {
      $scope.setHash(newVal)
    });
  });