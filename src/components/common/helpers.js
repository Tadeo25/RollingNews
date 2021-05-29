const validarNyA = (nombres)=> {
    if (nombres.trim() === "" || nombres.length >= 30) {
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

const validarCyD = (direccion)=>{
    if(direccion.trim() !== "" && direccion.length <= 50){
        return true;
            } else {
                return false;
            }
}

const validarTyCP = (numeros)=>{
  if (numeros > 1 && numeros < 9999999999 && numeros !== isNaN){
    return true;
  } else{
    return false;
  }
}

const validarCheck = (check)=>{
  if (check === true) {
    return true;
  }else{
    return false;
  }
}

export {validarNyA, validarEmail, validarCyD, validarTyCP, validarCheck}