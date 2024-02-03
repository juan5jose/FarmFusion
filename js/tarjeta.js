// js tarjeta.html

function validar (){

    let numT = document.getElementById ("numT").value,
    fecha = document.getElementById ("fecha").value,
    titular = document.getElementById ("titular").value,
    cvv = document.getElementById ("cvv").value;

    if (numT === "" || fecha === "" || titular === "" || cvv === "") {
        alert("todos los campos son obligatorios");
        return false;
    }else if (numT.length>16){
        alert("el numero de la tarjeta no es valido")
        return false;
    } else if (cvv>3){
        alert("el cvv no es valido")
        return false;
    }

}