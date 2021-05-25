function mostrar()
{
    let info = {
        nombre: 'Romina',
        apellido: 'Rodriguez',
        correos: {
            gmail:'chomita@gmail.com',
            outlook:'chomirod@hotmail.com'
        }
    }


    // Este uso de comillas se llama template String
    console.log (`
            Mi nombre es: ${info.nombre}
            Mi apellido es: ${info.apellido}
            Mi correo es: ${info.correos.gmail}

    `);
}

function mostrar_elementos_arreglo()
{
    let valores = [ 44,10,8,99];
    console.log(valores[2]);
}



function mostrar_array_objetos()
{
    let arreglo_objetos = [
        {
            taller:'Programacion 1',
            anio:'5to',
            escuela:'cet30'
            

        },
        {
            taller:'web 2',
            anio:'6to',
            escuela:'cet30'
        }
     ];
   

     
     let totalidad_filas = [];
     arreglo_objetos.forEach(objeto => {
        /* console.log(`
         escuela: ${objeto.escuela}
         taller: ${objeto.taller}
         Año: ${objeto.anio}
         `)*/
        let fila =`

            <tr>
                <td>${objeto.escuela}</td>
                <td>${objeto.taller}</td>
                <td>${objeto.anio}</td>
            </tr>

        `;

        totalidad_filas.push(fila);
    });

    document.querySelector("#tb_datos").innerHTML = totalidad_filas.join("")

}


