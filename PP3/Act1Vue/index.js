const monedas = async () =>{

    const fuente = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const v_monedas = await fuente.json()
    
    let total_filas = []
    v_monedas.forEach(element => {
        let fila = `
        
        <tr>
           
            <td>$(element.casa.nombre)</td>
            <td><span class= "badge bg-warning text-dark">$${element.casa.compra}</span></td>
            <td><span class= "badge bg-info text-dark">$${element.casa.venta}</span></td>
        </tr>
        `
       
        
        total_filas.push(fila)
    });
    document.querySelector("#t_moneda").innerHTML = total_filas.join("")
}
const boton = document.querySelector("#accion")
boton.addEventListener("click",monedas)