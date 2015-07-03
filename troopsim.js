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
      ],
      villas: [
        {id:1,percent:0},
        {id:2,percent:0},
        {id:3,percent:0},
        {id:4,percent:0},
        {id:5,percent:0},
        {id:6,percent:0},
        {id:7,percent:0},
        {id:8,percent:0},
        {id:9,percent:0},
        {id:10,percent:0},
        {id:11,percent:0},
        {id:12,percent:0},
        {id:13,percent:0},
        {id:14,percent:0},
        {id:15,percent:0},
        {id:16,percent:0},
        {id:17,percent:0}
      ],
      barracks: [
        {id:1,queue:0},
        {id:2,queue:0},
        {id:3,queue:0},
        {id:4,queue:0},
        {id:5,queue:0},
        {id:6,queue:0},
        {id:7,queue:0},
        {id:8,queue:0},
        {id:9,queue:0},
        {id:10,queue:0},
        {id:11,queue:0},
        {id:12,queue:0},
        {id:13,queue:0},
        {id:14,queue:0},
        {id:15,queue:0},
        {id:16,queue:0},
        {id:17,queue:0}
      ],
    };

    $scope.getHash = function() {
      var costs = new Uint8Array(
        $scope.data.rtc.length*$scope.data.rtc[0].costs.length +
        $scope.data.trainingBoosts.length +
        $scope.data.miscBoosts.length +
        $scope.data.villas.length +
        $scope.data.barracks.length);
      var idx = 0;

      // encode rtc
      for (var i=0; i<$scope.data.rtc.length; i++) {
        for (var j=0; j<$scope.data.rtc[i].costs.length; j++,idx++) {
          costs[idx] = $scope.data.rtc[i].costs[j].percent;
        }
      }
      // encode training boosts
      for (var i=0; i<$scope.data.trainingBoosts.length; i++,idx++) {
        costs[idx] = $scope.data.trainingBoosts[i].percent;
      }

      // encode misc boosts
      for (var i=0; i<$scope.data.miscBoosts.length; i++,idx++) {
        costs[idx] = $scope.data.miscBoosts[i].percent;
      }

      // encode villas
      for (var i=0; i<$scope.data.villas.length; i++,idx++) {
        costs[idx] = $scope.data.villas[i].percent;
      }

      // encode barracks
      for (var i=0; i<$scope.data.barracks.length; i++,idx++) {
        costs[idx] = $scope.data.barracks[i].queue;
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
      var idx = 0;

      // load rtc from array
      for (var i=0; i<$scope.data.rtc.length; i++) {
        for (var j=0; j<$scope.data.rtc[i].costs.length; j++,idx++) {
          $scope.data.rtc[i].costs[j].percent = costs[idx];
        }
      }

      // load training boosts from array
      for (var i=0; i<$scope.data.trainingBoosts.length; i++,idx++) {
        $scope.data.trainingBoosts[i].percent = costs[idx];
      }

      // load misc boosts from array
      for (var i=0; i<$scope.data.miscBoosts.length; i++,idx++) {
        $scope.data.miscBoosts[i].percent = costs[idx];
      }

      // load villas from array
      for (var i=0; i<$scope.data.villas.length;i++,idx++) {
        $scope.data.villas[i].percent = costs[idx];
      }

      // load barracks from array
      for (var i=0; i<$scope.data.barracks.length;i++,idx++) {
        $scope.data.barracks[i].queue = costs[idx];
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

    $scope.lzw_encode = function(s) {
      var dict = {};
      var data = (s + "").split("");
      var out = [];
      var currChar;
      var phrase = data[0];
      var code = 256;
      for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict[phrase + currChar] != null) {
          phrase += currChar;
        }
        else {
          out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
          dict[phrase + currChar] = code;
          code++;
          phrase=currChar;
        }
      }
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
      }
      return out.join("");
    }

    $scope.lzw_decode = function(s) {
      var dict = {};
      var data = (s + "").split("");
      var currChar = data[0];
      var oldPhrase = currChar;
      var out = [currChar];
      var code = 256;
      var phrase;
      for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
          phrase = data[i];
        }
        else {
          phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict[code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
      }
      return out.join("");
    }
  });