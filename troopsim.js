angular.module('troopSim',[])
.controller('troopSimCtrl', function($scope, $location) {
    $scope.data = {
      rtc: {
        "T1": {
          'Cavalry':  0,
          'Range':    0,
          'Infantry': 0,
          'Siege':    0
        },
        "T2": {
          'Cavalry':  0,
          'Range':    0,
          'Infantry': 0,
          'Siege':    0
        },
        "T3": {
          'Cavalry':  0,
          'Range':    0,
          'Infantry': 0,
          'Siege':    0
        },
        "T4": {
          'Cavalry':  0,
          'Range':    0,
          'Infantry': 0,
          'Siege':    0
        }
      },
      trainingBoosts: [
        {name: "Hero Skills Training Boosts I", percent: 0},
        {name: "Hero Skills Training Boosts I", percent: 0},
        {name: "Total Hero Gear Boosts", percent: 0},
        {name: "Research Training Speed (Combat)", percent: 0},
        {name: "Research Training Speed II (Hero)", percent: 0},
        {name: "Research Training Speed III (Restorative)", percent: 0}
      ],
      miscBoosts: {
        "Research Training Cap (Restorative)": 0,
        "Coliseum Training Boost": 15,
        "Boost Item": 0
      },
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
      troops: [
        {
          tier: 1,
          units: [
            {name:"Swordsman",      training:15, food:50,  wood:50, ore:38, stone:0,  silver:0, power:2, count:0, tier:1, type:"Infantry"},
            {name:"Slingers",       training:15, food:50,  wood:50, ore:0,  stone:50, silver:0, power:2, count:0, tier:1, type:"Range"},
            {name:"Outriders",      training:15, food:50,  wood:0,  ore:38, stone:50, silver:0, power:2, count:0, tier:1, type:"Cavalry"},
            {name:"Battering Rams", training:20, food:100, wood:50, ore:38, stone:50, silver:0, power:4, count:0, tier:1, type:"Siege"},
            {name:"Spearmen",       training:15, food:50,  wood:50, ore:38, stone:0,  silver:0, power:2, count:0, tier:1, type:"Infantry"},
            {name:"Hunters",        training:15, food:50,  wood:50, ore:0,  stone:50, silver:0, power:2, count:0, tier:1, type:"Range"},
            {name:"Chariot",        training:15, food:50,  wood:0,  ore:38, stone:50, silver:0, power:2, count:0, tier:1, type:"Cavalry"},
          ]
        },
        {
          tier: 2,
          units: [
            {name:"Hoplites",         training:30, food:100, wood:100, ore:75, stone:0,   silver:5, power:8,  count:0, tier:2, type:"Infantry"},
            {name:"Skirmish Archers", training:30, food:100, wood:100, ore:0,  stone:100, silver:5, power:8,  count:0, tier:2, type:"Range"},
            {name:"Light Cavalry",    training:30, food:100, wood:0,   ore:75, stone:100, silver:5, power:8,  count:0, tier:2, type:"Cavalry"},
            {name:"Ballista",         training:40, food:150, wood:100, ore:75, stone:100, silver:5, power:16, count:0, tier:2, type:"Siege"},
            {name:"Peltasts",         training:30, food:100, wood:100, ore:75, stone:0,   silver:5, power:8,  count:0, tier:2, type:"Infantry"},
            {name:"Rangers",          training:30, food:100, wood:100, ore:0,  stone:0,   silver:5, power:8,  count:0, tier:2, type:"Range"},
            {name:"Scythed Chariots", training:30, food:100, wood:0,   ore:75, stone:100, silver:5, power:8,  count:0, tier:2, type:"Cavalry"},
          ]
        },
        {
          tier: 3,
          units: [
            {name:"Armored Pikemen",    training:60, food:150, wood:150, ore:112, stone:0,   silver:10, power:24, count:0, tier:3, type:"Infantry"},
            {name:"Guardians",          training:60, food:150, wood:150, ore:0,   stone:150, silver:10, power:24, count:0, tier:3, type:"Range"},
            {name:"Companion Cavalry",  training:60, food:150, wood:0,   ore:112, stone:150, silver:10, power:24, count:0, tier:3, type:"Cavalry"},
            {name:"Siege Towers",       training:80, food:150, wood:150, ore:112, stone:150, silver:10, power:36, count:0, tier:3, type:"Siege"},
            {name:"Phalangite",         training:60, food:150, wood:150, ore:112, stone:0,   silver:10, power:24, count:0, tier:3, type:"Infantry"},
            {name:"Stalkers",           training:60, food:150, wood:150, ore:0,   stone:150, silver:10, power:24, count:0, tier:3, type:"Range"},
            {name:"Lancers",            training:60, food:150, wood:0,   ore:112, stone:150, silver:10, power:24, count:0, tier:3, type:"Cavalry"},
          ]
        },
        {
          tier: 4,
          units: [
            {name:"Immortals",      training:120, food:1000, wood:1000, ore:750, stone:0,    silver:500, power:36, count:0, tier:4, type:"Infantry"},
            {name:"Marksmen",       training:120, food:1000, wood:1000, ore:0,   stone:1000, silver:500, power:36, count:0, tier:4, type:"Range"},
            {name:"War Elephants",  training:120, food:1000, wood:0,    ore:750, stone:1000, silver:500, power:36, count:0, tier:4, type:"Cavalry"},
            {name:"Onager",         training:160, food:1000, wood:1000, ore:750, stone:1000, silver:500, power:48, count:0, tier:4, type:"Siege"},
            {name:"Legionnaires",   training:120, food:1000, wood:1000, ore:750, stone:0,    silver:500, power:36, count:0, tier:4, type:"Infantry"},
            {name:"Dianas",         training:120, food:1000, wood:1000, ore:0,   stone:1000, silver:500, power:36, count:0, tier:4, type:"Range"},
            {name:"Cataphracts",    training:120, food:1000, wood:0,    ore:750, stone:1000, silver:500, power:36, count:0, tier:4, type:"Cavalry"},
          ]
        }]
    };

    $scope.trainingTime = function(unit) {
      var totalTrainingTime = unit.count * unit.training;
      var boostSum = $scope.data.trainingBoosts.map(function(elem,idx,array){
        return elem.percent;
      }).reduce(function(prev, cur, idx, array) {
        return prev + cur;
      });
      var villaBoosts = $scope.data.villas.map(function(elem,idx,array) {
        return elem.percent;
      }).reduce(function(prev,cur,idx,array){
        return prev + cur;
      });
      var trainingBoosts = $scope.data.miscBoosts["Coliseum Training Boost"] +
        $scope.data.miscBoosts["Boost Item"] + boostSum + villaBoosts;
      trainingBoosts = 1/(1+trainingBoosts);

      return totalTrainingTime * trainingBoosts;
    };

    $scope.getUnitResourceBonus = function(unit) {
      var bonus = $scope.data.rtc["T" + unit.tier][unit.type];
      return bonus;
    };

    $scope.resourceCost = function(resource, unit) {
      var cost = unit[resource] * unit.count * (1 - $scope.getUnitResourceBonus(unit) / 100);
      return cost;
    };

    $scope.tierSums = function(tier) {
      var sums = $scope.data.troops[tier].reduce(function(prev,cur,idx,array){
        return {
          name:"tier "+tier,
          training: prev.training + cur.training,
          food: prev.food + cur+food,
          wood: prev.wood + cur.wood,
          ore: prev.ore + cur.ore,
          stone: prev.stone + cur.stone,
          silver: prev.silver + cur.silver,
          power: prev.power + cur.power,
          count: prev.count + cur.count
        };
      });
      return sums;
    };

    $scope.getHash = function() {
      var costs = new Uint8Array(
        Object.keys($scope.data.rtc).length * Object.keys($scope.data.rtc["T1"]).length +
        $scope.data.trainingBoosts.length +
        Object.keys($scope.data.miscBoosts).length +
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
      for (var boost in $scope.data.miscBoosts) {
        costs[idx] = $scope.data.miscBoosts[boost];
        idx++;
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
      var arrString = String.fromCharCode.apply(null, costs);
      var hash = btoa(arrString);
      var compressed = $scope.lzw_encode(hash);
      return compressed;
    };

    $scope.setHash = function(path) {
      // get rid of leading forward slash from url
      var compressed = path.substring(1);
      // convert hash to array
      var hash = $scope.lzw_decode(compressed);
      var arrString = atob(hash);
      var costs = new Uint8Array(arrString.split("").map(function(c) {
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
      for (var boost in $scope.data.miscBoosts) {
        $scope.data.miscBoosts[boost] = costs[idx];
        idx++;
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
  })
  .directive('troopsum',function($compile) {
    return {
      restrict: 'A',
      scope: {
        tier:"="
      },
      link: function(scope, element, attrs) {
        var getSums = function(tier) {
          var sums = {
            name:"tier "+scope.tier.tier, training:0, food:0, wood:0, ore:0, stone:0, silver:0, power:0, count:0
          };
          for (var i=0; i<scope.tier.units.length; i++) {
            sums.training += scope.$parent.trainingTime(scope.tier.units[i]);
            sums.food += scope.$parent.resourceCost("food", scope.tier.units[i]);
            sums.wood += scope.$parent.resourceCost("wood", scope.tier.units[i]);
            sums.ore += scope.$parent.resourceCost("ore", scope.tier.units[i]);
            sums.stone += scope.$parent.resourceCost("stone", scope.tier.units[i]);
            sums.silver += scope.$parent.resourceCost("silver", scope.tier.units[i]);
            sums.power += scope.$parent.resourceCost("power", scope.tier.units[i]);
            sums.count += scope.tier.units[i].count * 1; // multiply by one so js doesn't think we're concatenating strings :/
          }
          return sums;
        };

        scope.$watch(function() {
          return getSums(scope.tier).count;
        },function(newTier) {
          var sums = getSums(scope.tier);
          var inside = angular.element(
            '<td>Total</td><td>'+sums.count+'</td><td>'+sums.training+'</td>' +
            '<td>'+sums.food+'</td><td>'+sums.wood+'</td><td>'+sums.ore+'</td>' +
            '<td>'+sums.stone+'</td><td>'+sums.silver+'</td><td>'+sums.power+'</td>');
          element.html(inside);
          $compile(inside)(scope);
        });
      }
    };
  });

