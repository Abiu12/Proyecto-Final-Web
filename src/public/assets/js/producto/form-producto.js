const formProducto = (() => {
  const $containerForm = document.getElementById("containerForm");
  const $form = document.getElementById("formProducto");
  const BASE_URL = "/catalogo/producto";
  //

  const _setData = (item = {}, typeRender = "POST") => {
    if (typeRender == "PUT") {
      const $nombre = document.getElementById("nombre");
      const $primerApellido = document.getElementById("primerApellido");
      const $segundoApellido = document.getElementById("segundoApellido");
      const $telefono = document.getElementById("telefono");
      const $calle = document.getElementById("calle");
      const $noCasaInt = document.getElementById("noCasaInt");
      const $noCasaExt = document.getElementById("noCasaExt");
      const $colonia = document.getElementById("colonia");
      const $municipio = document.getElementById("municipio");
      const { idCliente, nombre, primerApellido, segundoApellido, telefono, calle, noCasaInt, noCasaExt, colonia, municipio } = item;
      $nombre.value = nombre;
      $primerApellido.value = primerApellido;
      $segundoApellido.value = segundoApellido;
      $telefono.value = telefono;
      $calle.value = calle;
      $noCasaInt.value = noCasaInt;
      $noCasaExt.value = noCasaExt;
      $colonia.value = colonia;
      $municipio.value = municipio;
      $form.setAttribute("method", typeRender);
      $form.setAttribute("item-id", idCliente);
      M.updateTextFields();
    }
    if(typeRender=="POST"){
      const $nombre = document.getElementById("nombre");
      const $primerApellido = document.getElementById("primerApellido");
      const $segundoApellido = document.getElementById("segundoApellido");
      const $telefono = document.getElementById("telefono");
      const $calle = document.getElementById("calle");
      const $noCasaInt = document.getElementById("noCasaInt");
      const $noCasaExt = document.getElementById("noCasaExt");
      const $colonia = document.getElementById("colonia");
      const $municipio = document.getElementById("municipio");
      
      $nombre.value = "";
      $primerApellido.value = "";
      $segundoApellido.value = "";
      $telefono.value = "";
      $calle.value = "";
      $noCasaInt.value = "";
      $noCasaExt.value = "";
      $colonia.value = "";
      $municipio.value = "";
      $form.setAttribute("method", typeRender);
      M.updateTextFields();
    }

  };

  const _configureBtnCancelar = () => {
    const $btnCancelar = document.getElementById("btnCancelar");
    $btnCancelar.addEventListener("click", () => {
      formProducto.setVisible(false);
      producto.setVisible(true);
    });
  };

  const _configureBtnGuardar = () => {

    const $btnGuardar = document.getElementById("btnGuardar");
    $btnGuardar.addEventListener("click", () => {
      debugger;
      const method = $form.getAttribute("method");
      const formData = new FormData($form);
      if (method.toUpperCase() === "POST") {
        _create(formData);
      }

      if (method.toUpperCase() === "PUT") {
        _update(formData);
      }
    });
  };

  const _create = async (formData) => {
    debugger;
    await http.post({ url: BASE_URL, body: formData });
    formProducto.setVisible(false);
    producto.setVisible(true);
    producto.getData();
  };

  const _update = async (formData) => {
    debugger;
    const itemId = $form.getAttribute("item-id");
    await http.put({ url: `${BASE_URL}/update/${itemId}`, body: formData });
    debugger;
    formProducto.setVisible(false);
    producto.setVisible(true);
    producto.getData();
  };

  const _setVisibleForm = (visible = true) => {
    if (visible) {
      $containerForm.classList.remove("hide");
    } else {
      $containerForm.classList.add("hide");
    }
  };

  const _init = () => {
    _configureBtnCancelar();
    _configureBtnGuardar();
  };

  return {
    setData: _setData,
    setVisible: _setVisibleForm,
    init: _init,
  };
})();

formProducto.init();
