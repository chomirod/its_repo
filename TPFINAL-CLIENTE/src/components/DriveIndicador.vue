<template>
    
    <h1> Discos</h1>


    <div class="row mb-3">
        <div class="col-3">
            <select @change="capturar_random()" v-model="equipo" class="form-select">
                <option value="-1" selected disabled>Elija equipo a Monitorear</option>
                <option v-for="cliente of lista_client" v-bind:key="cliente.id_cliente" :value="cliente.direccion_ip">{{cliente.razon_social}}</option>

               
            </select>
        </div>
    </div>

    <div class="card text-white bg-secondary mb-3" style="max-width: 100rem;">
  <div class="card-header text-center text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caracteristicas del Disco</font></font></div>
  
  <div class="card-body">
        <img src="https://resizer.glanacion.com/resizer/HXaRWoCDzOUEhAXDR4NYG7kcETg=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/B3ISDL7UVZH5FBZI7LUFGAO6Y4.jpg" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
    
  
        <!-- Disco Disponible !-->
        <div class="row mb-3">
            <div class="col-3">
                <div class="card bg-primary">
                    <div class="card-header text-center text-black">
                        {{this.descripcion_disk_uti}}
                    </div>
                    <div class="card-body text-center text-white">
                        <h1>{{valor_disk_uti}}</h1>
                    </div>
                    <div class="card-footer text-black text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                </div>
            </div>
         
        <!-- Disco en uso !-->
        
                    <div class="col-3">
                            <div class="card bg-primary">
                                <div class="card-header text-center bg-danger text-black">
                                    <h6>{{descripcion_disk_free}}</h6>
                                </div>

                                <div class="card-body text-center text-white ">
                                    <h4>{{ valor_disk_free}}</h4>
                                </div>

                               <div class="card-footer text-black text-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                     <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <!-- Total de Disco !-->
                    <div class="col-3">
                        <div class="card bg-primary">
                            <div class="card-header  text-center text-black">
                                <h6>{{descripcion_disk_total}}</h6>
                            </div>

                            <div class="card-body text-center text-white">
                                <h4>{{valor_disk_total}}</h4>
                            </div>

                           <div class="card-footer text-black text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                     <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                       
                     <div class="col-3">
                        <div class="card bg-primary">
                            <div class="card-header  text-center text-black">
                                <h6>{{descripciontotal}}</h6>
                            </div>

                            <div class="card-body text-center text-white">
                                <h4>{{valortotal}}</h4>
                            </div>

                            <div class="card-footer text-black text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-disc" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z"/>
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
    name: 'DriveIndicador',
    data(){
        return{
        valor_disk_free:'',
        valor_disk_total:'',
        valor_dik_uti:'',
        valortotal:'',
        descripcion_disk_free:'',
        descripcion_disk_total:'',
        descripcion_disk_uti:'',
        descripciontotal:'',
        equipo:'',
        lista:[],
        lista_client:[],
        descripcion_ip:'',
        razon_social:'',
        }
    },

    
    methods:{
        capturar_random()
        {
            //Tenemos que vincular nuestro cliente con el servidor
           const socket = io('http://'+ this.equipo + ':3003')

           
               socket.on('disk-info', (objeto)=>{
                   this.valor_disk_free = objeto. datafree;
                   this.descripcion_disk_free = objeto.descripcionfree;
               });

               socket.on('disk-info', (objeto)=>{
                   this.valor_disk_total = objeto.datatotal;
                   this.descripcion_disk_total = objeto. descripciontotal;
               });

               socket.on('disk-info', (objeto)=>{
                   this.valor_disk_uti = objeto.dataused;
                   this.descripcion_disk_uti = objeto.descripcionused;
               });

               socket.on('disk-info', (objeto)=>{
                   this.valortotal = objeto.dataperc;
                   this.descripciontotal = objeto.descripcionperc;
               });


        },
        
        
         obtenerClientes(){
            this.axios.get("http://localhost:3003/cliente").then(result => {
                this.lista_client =result.data;
            });
         }    
    },
    
    mounted()
    {
        this.capturar_random()
        this.obtenerClientes()
    }


}





</script>