// js seguridad.html


function validar(){

    let user = document.getElementById ("user").value,
    contraseña = document.getElementById ("contraseña").value,
    mail = document.getElementById ("mail").value,
    codigo = document.getElementById ("codigo").value,
    expresion = /\w+@\w+\.+[a-z]/;

    if (user === "" || contraseña === "" || mail === "" || codigo === "") {
        alert("todos los campos son obligatorios");
        return false;
    } else if (user.length>10){
        alert("El usuario debe de ser de menos de 10 caracteres");
        return false;
    }else if (contraseña.length>20){
        alert("La contraseña es muy larga");
        return false
    }else if (mail.length>80){
        alert("El correo es muy largo");
        return false
    }else if (codigo.length>6){
        alert("El codigo es muy largo");
        return false
    }else if(!expresion.test(mail)){
        alert("El correo no es valido")
        return false;
    }

    
    
}
