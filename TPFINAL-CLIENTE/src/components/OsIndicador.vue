<template>
    <h1> Sistema Operativo</h1>

<div class="card text-white bg-secondary mb-3" style="max-width: 100rem;">
  <div class="card-header text-center text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caracteristicas del Sistema Operativo</font></font></div>
  <div class="card-body">
      <img src="https://www.ymant.com/wp-content/uploads/sistemas-operativos-YMANT.png" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
    
  
                <!-- Descripcion Sistema Operativo !-->
      
       <div class="container ">
            <div class="row mb-3">
                <div class="col-3">
                    <div class="card bg-primary">
                        <div class="card-header text-center">
                            {{this.descripcion_oos}}
                        </div>
                        <div class="card-body text-center text-white">
                            <h1>{{valor_oos}}</h1>
                        </div>
                        <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                                            <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                        </svg>
                        </div>
                    </div>
                </div>
            
                        <!-- Nombre del Equipo !-->
            
                        <div class="col-3">
                                <div class="card bg-primary">
                                    <div class="card-header text-center">
                                        <h6>{{descripcion_hostname}}</h6>
                                    </div>

                                    <div class="card-body text-center text-white">
                                        <h4>{{valor_hostname}}</h4>
                                    </div>

                                    <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                                            <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Tipo de Arquitectura !-->
                        <div class="col-3">
                            <div class="card bg-primary">
                                <div class="card-header  text-center text-white">
                                    <h6>{{descripcion_arch}}</h6>
                                </div>

                                <div class="card-body text-center text-white">
                                    <h4>{{valor_arch}}</h4>
                                </div>

                                <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                                            <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"/>
                                        </svg>
                                    </div>
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
        
        name: 'OsIndicador',
        data(){
            return {
                valor_oos:'',
                valor_hostname:'',
                valor_arch:'',
                descripcion_oos:'',
                descripcion_hostname:'',
                descripcion_arch:'',
                equipo:'',
                descripcion_ip:'',
                razon_social:'',
                lista_client:[],
            }
        },
        methods:{
            capturar_random()
            {
                //Tenemos que vincular nuestro cliente con el servidor
                const socket = io('http://'+ this.equipo + ':3003')

            
                socket.on('os-oos', (objeto)=>{
                    this.valor_oos = objeto.data;
                    this.descripcion_oos = objeto.descripcion;
                });

                socket.on('os-hostname', (objeto) =>{
                        this.valor_hostname = objeto.data;
                        this.descripcion_hostname = objeto.descripcion
                });

                 socket.on('os-arch', (objeto) => {
                        this.valor_arch = objeto.data
                        this.descripcion_arch = objeto.descripcion
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