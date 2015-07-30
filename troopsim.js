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
        "Coliseum Training Boost": 0,
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
      barracks: [],
      troops: [
        {
          tier: 1,
          units: [
            {name:"Swordsman",      training:15, food:50,  wood:50, ore:38, stone:0,  silver:0, power:2, count:0, tier:1, type:"Infantry", strat: false },
            {name:"Slingers",       training:15, food:50,  wood:50, ore:0,  stone:50, silver:0, power:2, count:0, tier:1, type:"Range",    strat: false },
            {name:"Outriders",      training:15, food:50,  wood:0,  ore:38, stone:50, silver:0, power:2, count:0, tier:1, type:"Cavalry",  strat: false },
            {name:"Battering Rams", training:20, food:100, wood:50, ore:38, stone:50, silver:0, power:4, count:0, tier:1, type:"Siege",    strat: false },
            {name:"Spearmen",       training:15, food:50,  wood:50, ore:38, stone:0,  silver:0, power:2, count:0, tier:1, type:"Infantry", strat: true },
            {name:"Hunters",        training:15, food:50,  wood:50, ore:0,  stone:50, silver:0, power:2, count:0, tier:1, type:"Range",    strat: true },
            {name:"Chariot",        training:15, food:50,  wood:0,  ore:38, stone:50, silver:0, power:2, count:0, tier:1, type:"Cavalry",  strat: true },
          ]
        },
        {
          tier: 2,
          units: [
            {name:"Hoplites",         training:30, food:100, wood:100, ore:75, stone:0,   silver:5, power:8,  count:0, tier:2, type:"Infantry", strat: false },
            {name:"Skirmish Archers", training:30, food:100, wood:100, ore:0,  stone:100, silver:5, power:8,  count:0, tier:2, type:"Range",    strat: false },
            {name:"Light Cavalry",    training:30, food:100, wood:0,   ore:75, stone:100, silver:5, power:8,  count:0, tier:2, type:"Cavalry",  strat: false },
            {name:"Ballista",         training:40, food:150, wood:100, ore:75, stone:100, silver:5, power:16, count:0, tier:2, type:"Siege",    strat: false },
            {name:"Peltasts",         training:30, food:100, wood:100, ore:75, stone:0,   silver:5, power:8,  count:0, tier:2, type:"Infantry", strat: true },
            {name:"Rangers",          training:30, food:100, wood:100, ore:0,  stone:0,   silver:5, power:8,  count:0, tier:2, type:"Range",    strat: true },
            {name:"Scythed Chariots", training:30, food:100, wood:0,   ore:75, stone:100, silver:5, power:8,  count:0, tier:2, type:"Cavalry",  strat: true },
          ]
        },
        {
          tier: 3,
          units: [
            {name:"Armored Pikemen",    training:60, food:150, wood:150, ore:112, stone:0,   silver:10, power:24, count:0, tier:3, type:"Infantry", strat: false },
            {name:"Guardians",          training:60, food:150, wood:150, ore:0,   stone:150, silver:10, power:24, count:0, tier:3, type:"Range",    strat: false },
            {name:"Companion Cavalry",  training:60, food:150, wood:0,   ore:112, stone:150, silver:10, power:24, count:0, tier:3, type:"Cavalry",  strat: false },
            {name:"Siege Towers",       training:80, food:150, wood:150, ore:112, stone:150, silver:10, power:36, count:0, tier:3, type:"Siege",    strat: false },
            {name:"Phalangite",         training:60, food:150, wood:150, ore:112, stone:0,   silver:10, power:24, count:0, tier:3, type:"Infantry", strat: true},
            {name:"Stalkers",           training:60, food:150, wood:150, ore:0,   stone:150, silver:10, power:24, count:0, tier:3, type:"Range",    strat: true},
            {name:"Lancers",            training:60, food:150, wood:0,   ore:112, stone:150, silver:10, power:24, count:0, tier:3, type:"Cavalry",  strat: true},
          ]
        },
        {
          tier: 4,
          units: [
            {name:"Immortals",      training:120, food:1000, wood:1000, ore:750, stone:0,    silver:500, power:36, count:0, tier:4, type:"Infantry", strat: false},
            {name:"Marksmen",       training:120, food:1000, wood:1000, ore:0,   stone:1000, silver:500, power:36, count:0, tier:4, type:"Range",    strat: false},
            {name:"War Elephants",  training:120, food:1000, wood:0,    ore:750, stone:1000, silver:500, power:36, count:0, tier:4, type:"Cavalry",  strat: false},
            {name:"Onager",         training:160, food:1000, wood:1000, ore:750, stone:1000, silver:500, power:48, count:0, tier:4, type:"Siege",    strat: false},
            {name:"Legionnaires",   training:120, food:1000, wood:1000, ore:750, stone:0,    silver:500, power:36, count:0, tier:4, type:"Infantry", strat: true},
            {name:"Dianas",         training:120, food:1000, wood:1000, ore:0,   stone:1000, silver:500, power:36, count:0, tier:4, type:"Range",    strat: true},
            {name:"Cataphracts",    training:120, food:1000, wood:0,    ore:750, stone:1000, silver:500, power:36, count:0, tier:4, type:"Cavalry",  strat: true},
          ]
        }
      ],
      KVKpoints: [
        {tier: 1, strat: false, points: 3},
        {tier: 1, strat: true, points: 3},
        {tier: 2, strat: false, points: 6},
        {tier: 2, strat: true, points: 6},
        {tier: 3, strat: false, points: 15},
        {tier: 3, strat: true, points: 15},
        {tier: 4, strat: false, points: 45},
        {tier: 4, strat: true, points: 45},
      ],
      solopoints: [
        {tier: 1, strat: false, points: 1},
        {tier: 1, strat: true, points: 1},
        {tier: 2, strat: false, points: 2},
        {tier: 2, strat: true, points: 2},
        {tier: 3, strat: false, points: 5},
        {tier: 3, strat: true, points: 5},
        {tier: 4, strat: false, points: 15},
        {tier: 4, strat: true, points: 15},
      ],
      infernopoints: [
        {tier: 1, strat: false, points: 1},
        {tier: 1, strat: true, points: 1},
        {tier: 2, strat: false, points: 2},
        {tier: 2, strat: true, points: 2},
        {tier: 3, strat: false, points: 5},
        {tier: 3, strat: true, points: 5},
        {tier: 4, strat: false, points: 15},
        {tier: 4, strat: true, points: 15},
      ]
    };
    $scope.addBarracks = function() {
      var len = $scope.data.barracks.length;
      if (len < 21) $scope.data.barracks.push({id:len+1,lvl:null});
    };


    $scope.barracksQSize = [0,20,50,100,150,200,250,300,400,500,600,700,800,900,1050,1250,1500,1750,2000,2250,2500,5000];
    $scope.batchSize = function() {
      if ($scope.data.barracks.length > 0) {
        return $scope.data.barracks.map(function(elem,idx,array){
          return elem.lvl && elem.lvl <= 21 ? $scope.barracksQSize[elem.lvl] : 0;
        }).reduce(function(prev,cur,idx,array) {
          return prev + cur;
        });
      } else {
        return 0;
      }
    }
    $scope.tierSums = [];
    $scope.totalSums = { training:0, food:0, wood:0, ore:0, stone:0, silver:0, power:0, count:0 };

    $scope.pointsTotal = function(points) {
      var sum = 0;
      for (var i=0; i<points.length; i++) {
        var pts = points[i];
        sum += $scope.data.troops[pts.tier-1].units.map(function (elem, idx, array) {
            return elem.count * (elem.strat == pts.strat ? 1 : 0);
          }).reduce(function (prev, cur, idx, array) {
            return prev + cur;
          }) * pts.points;
      }
      return sum;
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

    $scope.getSums = function(units) {
      var sums = {
        training:0, food:0, wood:0, ore:0, stone:0, silver:0, power:0, count:0
      };
      for (var i=0; i<units.length; i++) {
        sums.training += $scope.trainingTime(units[i]);
        sums.food += $scope.resourceCost("food", units[i]);
        sums.wood += $scope.resourceCost("wood", units[i]);
        sums.ore += $scope.resourceCost("ore", units[i]);
        sums.stone += $scope.resourceCost("stone", units[i]);
        sums.silver += $scope.resourceCost("silver", units[i]);
        sums.power += $scope.resourceCost("power", units[i]);
        sums.count += units[i].count * 1; // multiply by one so js doesn't think we're concatenating strings :/
      }
      return sums;
    };

    $scope.getTotalSums = function(units) {
      var sums = {
        training:0, food:0, wood:0, ore:0, stone:0, silver:0, power:0, count:0
      };
      for (var i=0; i<units.length; i++) {
        sums.training += units[i].training * 1;
        sums.food += units[i].food * 1;
        sums.wood += units[i].wood * 1;
        sums.ore += units[i].ore * 1;
        sums.stone += units[i].stone * 1;
        sums.silver += units[i].silver * 1;
        sums.power += units[i].power * 1;
        sums.count += units[i].count * 1; // multiply by one so js doesn't think we're concatenating strings :/
      }
      return sums;
    };

    $scope.$watch('data', function() {
      for(var i=0; i<$scope.data.troops.length; i++) {
        var tier = $scope.data.troops[i];
        $scope.tierSums[i] = $scope.getSums(tier.units);
      }
    }, true);

    $scope.$watch('tierSums', function() {
      $scope.totalSums = $scope.getTotalSums($scope.tierSums);
    }, true);

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
    };
  });

