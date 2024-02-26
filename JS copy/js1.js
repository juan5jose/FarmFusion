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
