const form = (() => {
  const $formStatus = document.getElementById("formStatus");
  const $inputStatus = document.getElementById("status");
  const $inputDescription = document.getElementById("description");

  const request = {
    "POST":()=>{
      http.post({url:"http://localhost:4000/api/v2/example",body:{
          
        }});
    },
    "PUT":() =>{
      http.put({url:"http://localhost:4000/api/v2/example",body:{
          
      }});
    }
  };

  
  const _sendActionForm = (event = {}) => {
    event.preventDefault();
    const method = $formStatus.getAttribute("method");
    request[method]();

    if ($inputStatus.value === "" || $inputDescription.value === "") {
      alert("Todos los campos son requeridos");
    }
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
