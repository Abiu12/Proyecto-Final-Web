const inputBuscar = document.getElementById('buscar');
const fila = document.getElementsByTagName('tr');

inputBuscar.addEventListener('keyup',(e)=>{
    debugger;
    let texto=e.target.value;
    
    let er = new RegExp(texto.trim(),"i");
    for (let i = 1; i < fila.length; i++) {
       let valor= fila[i];
       if (er.test(valor.innerText)) {
        valor.classList.remove("ocultar");
       } else {
        valor.classList.add("ocultar");
       }
    }
})