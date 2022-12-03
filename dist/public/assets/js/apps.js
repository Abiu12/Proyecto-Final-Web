function soloLetras(e) {
  console.log("aaaaaa")
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
    return false;
  }
}


function ValidarTelefono(fono) {
  //if (fono.value.lenght < 8) {
  if (fono.value.length != 10) {
    alert("Por favor escriba el número de teléfono completo");
    fono.focus();
    fono.select();
  }
}


function soloNumeros(evt){
    
  // code is the decimal ASCII representation of the pressed key.
  var code = (evt.which) ? evt.which : evt.keyCode;
  
  if(code==8) { // backspace.
    return true;
  } else if(code>=48 && code<=57) { // is a number.
    return true;
  } else{ // other keys.
    return false;
  }
}


function ConfirmDelete() {
  // var respuesta = confirme(" Estas seguro que deseas eliminar al usuario?");
  // if (respuesta = true) {
  //     return true;
  // } else {
  //     return false;
  // }

  if (window.confirm("Do you really want to leave?")) {
    window.open("", "Thanks for Visiting!");
  }
  console.log("AAAAAAAA");
}



function statusButton(){
  return 1;  
}