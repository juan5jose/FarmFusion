function validar (){

    let user = document.getElementById("user");
    let email= document.getElementById("email");
    let pass= document.getElementById("contraseña");
    let form= document.getElementById("form")
    
    if (user.length <6){
        alert ("los campos usuario, email y contraseña son requeridos");
    }
}


