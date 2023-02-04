form.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  };
};

function language() {
  let history = document.querySelector("input[name='history']:checked").value;
  let schedule = document.querySelector("input[name='schedule']:checked").value;
  let math = document.querySelector("input[name='math']:checked").value;
  let skills = document.querySelector("input[name='skills']:checked").value;
  let personality = document.querySelector("input[name='personality']:checked").value;

  let language;
  if (history === "customerService" && schedule === "nineToFive" && math === "algebra" && skills === "newbie" && personality === "introvert") {
      language = "Python";
  } else if (history === "deskJob" && schedule === "asNeeded" && math === "geometry" && skills === "familiar" && personality === "extravert") {
      language = "Ruby";
  } else if (history === "management" && schedule === "collaboration" && math === "calculus" && skills === "programmer" && personality === "both") {
      language = "Java";
  } else {
      language = "C";
  }
  document.getElementById("submit").innerHTML = "Based on your answers, you should study " + language + " .";
}

document.getElementById("tryAgain").addEventListener("click", function() {
  let form = document.querySelector("form");
  form.reset();

  document.getElementById("submit").removeAttribute("class","hidden");
});