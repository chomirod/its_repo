<template>
    <h1> Memoria </h1>

   
   

    <div class="card text-white bg-secondary mb-3" style="max-width: 100rem;">
  <div class="card-header text-center text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caracteristicas de la Memoria</font></font></div>
  <div class="card-body">
       <img src="https://acf.geeknetic.es/imagenes/auto/2021/4/26/1sa-fabricantes-de-memorias-ddr5-comienzan-la-producci-n-en-masa-para-ultimar-pruebas-de-funcionamiento.jpg" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
   
   

        
   
  
       
        <div class="row mb-4">

                  <!-- Memoria en uso !-->
                        <div class="col-3">
                            <div class="card bg-primary  ">
                                <div class="card-header  text-center text-white">
                                    <h6>{{descripcion_usedMemMb}}</h6>
                                </div>

                                <div class="card-body text-center text-white">
                                    <h4>{{valor_usedMemMb}}</h4>
                                </div>

                                <div class="card-footer text-black text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-memory" viewBox="0 0 16 16">
                                        <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                  


                 <!-- Memoria Disponible !-->
            <div class="col-4">
                <div class="card bg-primary">
                    <div class="card-header text-center bg-danger">
                        {{ this.descripcion_freeMemMb}}
                    </div>
                    <div class="card-body text-center text-white">
                        <h1>{{valor_freeMemMb}}</h1>
                    </div>
                   <div class="card-footer text-black text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-memory" viewBox="0 0 16 16">
                            <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
                        </svg>
                    </div>
                </div>
            </div>
         
        <!-- Memoria Total !-->
        
                    <div class="col-3">
                            <div class="card bg-primary">
                                <div class="card-header text-center">
                                    <h6>{{this.descripcion_totalMemMb}}</h6>
                                </div>

                                <div class="card-body text-center text-white">
                                    <h4>{{valor_totalMemMb}}</h4>
                                </div>

                                <div class="card-footer text-black text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-memory" viewBox="0 0 16 16">
                                    <path d="M1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l.353-.353a.5.5 0 0 1 .708 0l.353.353a1 1 0 0 0 .707.293H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Zm.5 1h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm5 0h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm4.5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4ZM2 10v2H1v-2h1Zm2 0v2H3v-2h1Zm2 0v2H5v-2h1Zm3 0v2H8v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Zm2 0v2h-1v-2h1Z"/>
                                    </svg>
                                </div>
                            </div>
                    </div>

                      
        
                
                </div>
         </div>
        
    </div>



</template>

<script>
import io from 'socket.io-client'
export default {
    
    name: 'MemoriaIndicador',
    data(){
        return{
        direccion_ip:'',
        estado:'',
        equipo:'',
        razon_social:'',
        valor_freeMemMb:'',
        valor_totalMemMb:'',
        valor_usedMemMb:'',
        descripcion_freeMemMb:'',
        descripcion_totalMemMb:'',
        descripcion_usedMemMb:'',
        lista:[],
        lista_client:[],
        }

         
    },

    
    methods:{
        capturar_random()
        {
            //Tenemos que vincular nuestro cliente con el servidor
            const socket = io('http://'+ this.equipo + ':3003')
           //const socket = io(this.equipo)

           
               socket.on('mem-info', (objeto)=>{
                   this.valor_freeMemMb = objeto.datafmem;
                   this.descripcion_freeMemMb = objeto.descripcionfmem;
               });

               socket.on('mem-info', (objeto)=>{
                   this.valor_totalMemMb = objeto.datatmem;
                   this.descripcion_totalMemMb = objeto.descripciontmem;
               });

               socket.on('mem-info', (objeto)=>{
                   this.valor_usedMemMb = objeto.dataumem;
                   this.descripcion_usedMemMb = objeto.descripcionumem;
               });
 
        
        },

        obtenerClientes(){
                this.axios.get("http://localhost:3003/cliente").then(result => {
                    this.lista_client =result.data;
                });
            },         


    },
     mounted()
        {
            this.capturar_random()
            this.obtenerClientes()
        }
}



</script>