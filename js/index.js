window.addEventListener("load", () => {
  fetch("https://api.rawg.io/api/games?key=77c0f34b936142c3a52ea229994eab86"
  )
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      let variable = data;
      let x = 0;
      while (x < 5) {
        document.getElementById("0" + x).src =
          variable.results[random(0, 19)].short_screenshots[random(0, 6)].image;
        x++;
      }
    }).catch(function (error) {
      console.warn(error);
    })

});
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funcion utilizada en el boton para abrir navbar cuando la pantalla esta en 375px
let checkbox = document.querySelector("input[id=menu-check]");
checkbox.addEventListener('change', function () {
  // 
  if (this.checked && (screen.width > 0 && screen.width <= 375)) {
    var header = document.querySelector("header");
    header.style.height = "360px";
  } else if (screen.width > 0 && screen.width <= 375) {
    var header = document.querySelector("header");
    header.style.height = "auto";
  }

});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.style.height = null;
  header.classList.toggle("hscroll", this.window.scrollY > 0);
})

let login = document.getElementById("showLogin");
login.addEventListener("click", function () {
  document.getElementById('login').style.display = "block";
  var checkbox = document.querySelector("input[id=menu-check]");
  checkbox.checked = false
  var header = document.querySelector("header");
  header.style.height = "70px";

})