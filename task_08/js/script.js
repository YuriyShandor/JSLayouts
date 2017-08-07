var array = LIST;

console.log(array);

array.filter(function(item, i) { return item.population > 1000000; }).forEach(function(item, i) {
  item.population > 1000000;
  console.log("Населення міста " + item.city + " - " + item.population + " осіб");
});
