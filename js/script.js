//js olvidoclv.html
let usuario = document.getElementById("input_usuario"),
	recuperar = document.getElementById("boton_recuperar"),
	mensaje_error = document.getElementById("error");

function validar__recuperar() {
	if (usuario.value == "juan5jose") {
		recuperar.href = "restaurar.html";
	} else {
		mensaje_error.classList.add("error-mensaje");
	}
}

//js index.html
const button = document.querySelector(".button");

button.addEventListener("click", () => {
	window.location.href = "login.html";
});

//js registro.html
function validar() {
	let user = document.getElementById("user");
	let email = document.getElementById("email");
	let pass = document.getElementById("pass");
	let form = document.getElementById("form");
	let boton = document.getElementById("boton");

	if (user === "") {
		alert("el campo usuario es requerido");
	}
}
