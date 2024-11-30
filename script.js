function eo(x) {
  return x % 2 === 0 ? 0 : 1;
}

function showSteps() {
  // taking number to calculate steps
  var num = parseInt(document.getElementById("number").value);
  // taking password
  var pass = parseInt(document.getElementById("password").value);
  var output = document.getElementById("output");
  var html = "";
  // checking is password is correct or not
  if (pass === 2007) {
    var c = 0;

    while (true) {
      if (eo(num) === 0) {
        html += num + "<br>";
        num /= 2;
      } else {
        html += num + "<br>";
        num = num * 3 + 1;
      }
      c++;
      if (num === 1) {
        break;
      }
    }

    output.innerHTML =
      "<strong>Number (" +
      num +
      ") took " +
      c +
      " steps to reach 1</strong><br>" +
      html;
  } else {
    output.innerHTML =
      "<strong>Wrong password. Try again to see steps.</strong>";
  }
}
