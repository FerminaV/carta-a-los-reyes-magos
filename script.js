document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu1 = document.querySelector("#dropdownMenu1");
  const menuButton1 = document.querySelector("#menuButton1");

  console.log(dropdownMenu1);

  function activar() {
    dropdownMenu1.classList.toggle("oculto");
  }
  menuButton1.addEventListener("click", activar);
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu2 = document.querySelector("#dropdownMenu2");
  const menuButton2 = document.querySelector("#menuButton2");

  console.log(dropdownMenu2);

  function activar() {
    dropdownMenu2.classList.toggle("oculto");
  }
  menuButton2.addEventListener("click", activar);
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu3 = document.querySelector("#dropdownMenu3");
  const menuButton3 = document.querySelector("#menuButton3");
  console.log(dropdownMenu3);
  function activar() {
    dropdownMenu3.classList.toggle("oculto");
  }
  menuButton3.addEventListener("click", activar);
});

function enviar() {
  window.alert("XA RECIBIMOS A TUA CARTA!!!")
}
