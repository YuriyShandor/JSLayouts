var divs = document.getElementsByTagName("div");

for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function () {
    console.log("Ви клікнули на " + divs[i].textContent + " населення становить: " + divs[i].getAttribute('value') + " осіб");
  };
}
