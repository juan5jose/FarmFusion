//js olvidoclv.html
let usuario = document.getElementById("input_usuario"), recuperar = document.getElementById("boton_recuperar"), mensaje_error = document.getElementById("error");

function validar() {
    if (usuario.value == "juan5jose") {
        recuperar.href = "restaurar.html";
    } else {
        mensaje_error.classList.add('error-mensaje');
    }
}

//js index.html
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  window.location.href = 'login.html';
});