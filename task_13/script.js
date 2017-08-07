var input = document.getElementById('input');

input.oninput = function () {
  document.getElementById('input-text').innerHTML = ("В полі ввода написано: " + input.value);
};
