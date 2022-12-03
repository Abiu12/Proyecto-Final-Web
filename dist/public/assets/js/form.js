const form = (() => {
  const $formStatus = document.getElementById("formStatus");
  // const $idStatus = document.getElementById("idStatus");
  const $inputStatus = document.getElementById("status");
  const $inputDescription = document.getElementById("description");

  expresion = /[a-z]/;

  const _sendActionForm = (event = {}) => {
    if ($inputStatus.value === '' || $inputDescription.value === '') {
      event.preventDefault();/**Preveemos el error, ya no lo  envies */
      alert("Todos los campos son requeridos");

    }
    else if (!expresion.test($inputStatus)) {
      event.preventDefault();
      alert("El status es solo letras");
    }
    else if ($inputStatus.value.length > 10) {
      event.preventDefault();
      alert("Longitud de status sobrepasada");
    }
    // else if (isNaN($idStatus.value) || Number($idStatus.value)<1) {
    //   event.preventDefault();
    //   alert("El id debe ser un numero");
    // }
    else if ($inputDescription.value.length<5) {
      event.preventDefault();
      alert("Poner una descripcion mas larga");
    }

    // if($idStatus.value == "a"){
    //   event.preventDefault();
    //   alert("El id es numero");
    // }

  };

  const _addActionForm = () => {
    $formStatus.addEventListener("submit", _sendActionForm);
  };

  return {
    init: () => {
      _addActionForm();
    },
  };
})();

form.init();






// const ejemplo= (()=>{
//   // return{name:"Adrian"};
//   const _saludar=()=>{
//     console.log("hola");
//   };
//   const _despedir=()=>{
//     console.log(adios);
//   }
//   return{saludar:_saludar,
//   despedir:_despedir
//   }; /**LLave valor */
//   // return{_saludar,
//   //   _despedir
//   //   };
// })();

// // ejemplo._saludar; 
// console.log(ejemplo);
// ejemplo.saludar;
// ejemplo.despedir;