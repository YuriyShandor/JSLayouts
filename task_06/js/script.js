var array = LIST;

console.log(array);

array.forEach(function(item, i) {
  console.log("Населення міста " + item.city + " - " + item.population + " осіб");
});
