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

// js paula
document.addEventListener('DOMContentLoaded', function() {
    const inputPerfil = document.getElementById('perfil');
    const imagenPerfil = document.getElementById('imagenPerfil');

    inputPerfil.addEventListener('change', function() {
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagenPerfil.src = e.target.result;
                imagenPerfil.style.display = 'block'; // Mostrar la imagen de perfil
            };
            reader.readAsDataURL(file);
        }
    });

    const cerrarSesionBtn = document.getElementById('cerrarSesion');
    cerrarSesionBtn.addEventListener('click', function() {
        // Aquí puedo agregar la lógica para cerrar sesión
        alert('Cerrar sesión');
    });
});