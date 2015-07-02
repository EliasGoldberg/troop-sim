angular.module('troopSim',[])
.controller('troopSimCtrl', function($scope) {
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
  });