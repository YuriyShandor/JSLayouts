var populations = [727968, 2906569, 2220445, 1010848, 218022, 3908643];

console.log(populations);

var populationOverMillion = populations.filter(function(number) {
  return number > 1000000;
});

console.log(populationOverMillion);
