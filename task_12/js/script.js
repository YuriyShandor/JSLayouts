var divs = document.getElementsByTagName("div");

var span = document.createElement('span');


for (var i = 0; i < divs.length; i++) {
  divs[i].onclick = function () {
    span.innerHTML = " Ви клікнули на " + this.textContent + ". Населення -- " + this.getAttribute('value') + " осіб";
    this.appendChild(span);
  };
}
