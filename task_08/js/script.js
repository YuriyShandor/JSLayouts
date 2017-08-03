console.log(LIST);

LIST.filter(function(item, i, LIST) { return item.population > 1000000; }).forEach(function(item, i, LIST) {
  item.population > 1000000;
  console.log("Населення міста " + item.city + " - " + item.population + " осіб");
});
