const switchLink = document.getElementById("switchLink");
const formHeading = document.getElementById("formHeading");
const form = document.querySelector(".kinde-form");

let isLogin = true;

if (switchLink && formHeading) {
  switchLink.addEventListener("click", (event) => {
    event.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
      formHeading.textContent = "Iniciar sesion";
      switchLink.textContent = "Crear cuenta";
    } else {
      formHeading.textContent = "Crear cuenta";
      switchLink.textContent = "Iniciar sesion";
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
