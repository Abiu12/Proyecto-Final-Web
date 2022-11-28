const $btn = document.getElementById("btnObtener");
// console.log($btn);
const $bodyTable = document.getElementById("data");
$btn.addEventListener("click", async (event) => {
    const response = await fetch('http://localhost:4000/api/v1/example/listar');  /**Al picar direcciona a listar y obtenemos datos de una peticion, de response de controller */
    const body = await response.json(); /**fetch responde con muchos datos, necesitamos el body de la respuesta y lo recibimos en un json */
    // console.log(body); body es un arreglo
    for (let index = 0; index < body.length; index++) {

        const idStatus = body[index]["idStatus"];
        const status = body[index]["status"];
        const description = body[index]["description"];
        const $nuevaFila = document.createElement('tr');
        const $columnaId = document.createElement('td');
        const $columnaStatus = document.createElement('td');
        const $columnaDescription = document.createElement('td');
        $columnaId.innerHTML = idStatus;
        $columnaStatus.innerHTML = status;
        $columnaDescription.innerHTML = description;

        $nuevaFila.appendChild($columnaId);
        $nuevaFila.appendChild($columnaStatus);
        $nuevaFila.appendChild($columnaDescription);
        
        $bodyTable.appendChild($nuevaFila);
        


        // const htlm = `
        // <tr>
        //     <td>${idStatus}</td>
        //     <td>${status}</td>
        //     <td>${description}</td>
        // </tr>
        // `;
        // $bodyTable.innerHTML += htlm;
    }
});