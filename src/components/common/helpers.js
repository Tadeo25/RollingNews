const validarNombres = (nombres)=> {
    if (nombres.trim() === "" || nombres.length >= 40 || nombres !== isNaN) {
          //   nombres.className = "form-control is-invalid";
      return false;
    } else {
     // nombres.className = "form-control is-valid";
      return true;
    }
}

const validarApellidos = (apellidos)=> {
    if (apellidos.trim() === "" || apellidos.length >= 40 || apellidos === Number) {
          //   nombres.className = "form-control is-invalid";
      return false;
    } else {
     // nombres.className = "form-control is-valid";
      return true;
    }
}

const validarEmail = (mail)=>{
    var expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (mail.trim() !== "" && expresion.test(mail)) {
    //email.className = "form-control is-valid";
    return true;
  } else {
    //email.className = "form-control is-invalid";
    return false;
  }
}

const validardireccion = (direccion)=>{
    if(direccion.trim() !== "" && direccion.length <= 50){
        return true;
            } else {
                return false;
            }
}

export {validarNombres, validarApellidos, validarEmail}