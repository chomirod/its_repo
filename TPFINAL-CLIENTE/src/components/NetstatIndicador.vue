<template>
    <h1> Conexiones </h1>


    <div class="card text-white bg-secondary mb-3" style="max-width: 100rem;">
       
        <div class="card-header text-center text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caracteristicas de las Conexiones Establecidas</font></font></div>
        <div class="card-body">
            <img src="https://elceo.com/wp-content/uploads/2021/02/internet-velocidad-freepik.jpg" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
           
        
                
                <div class="row mb-3">
                    <div class="col-3">
                        <div class="card bg-primary">
                            
                            <div class="card-header text-center text-white">
                                <h6>{{this.descripcion_netla_inp}}</h6>
                            </div>
                            <div class="card-body text-center text-white">
                                <h4>{{valor_netla_inp}}</h4>
                            </div>
                            <div class="card-footer text-black text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                            </svg>
                            </div>
                        </div>
                    </div>
                
                            <div class="col-3">
                                <div class="card bg-primary">
                                    <div class="card-header text-center text-white">
                                        <h6>{{descripcion_netla_out}}</h6>
                                    </div>

                                    <div class="card-body text-center text-white">
                                        <h4>{{valor_netla_out}}</h4>
                                    </div>

                                    <div class="card-footer text-black text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>
                
                            <div class="col-3">
                                    <div class="card bg-primary">
                                        <div class="card-header text-center">
                                            <h6>{{descripcion_net_inp}}</h6>
                                        </div>

                                        <div class="card-body text-center text-white">
                                            <h4>{{valor_net_inp}}</h4>
                                        </div>

                                        <div class="card-footer text-black text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                            <div class="col-3">
                                <div class="card bg-primary">
                                    <div class="card-header  text-center text-white">
                                        <h6>{{descripcion_net_out}}</h6>
                                    </div>

                                    <div class="card-body text-center text-white">
                                        <h4>{{valor_net_out}}</h4>
                                    </div>

                                <div class="card-footer text-black text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                                                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
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
    name: 'NetstatIndicador',
    data(){
        return{
            valor_recibido:'',
            direccion_ip:'',
            estado:'',
            equipo:'',
            razon_social:'',
            valor_net_inp:'',
            valor_net_out:'',
            valor_netla_inp:'',
            valor_netla_out:'',
            modelo_cpu:'',
            descripcion_net_inp:'',
            descripcion_net_out:'',
            descripcion_netla_inp:'',
            descripcion_netla_out:'',
            lista: [],
            lista_client:[],

        }
    },
    methods:{
        capturar_random()
        {
            //Tenemos que vincular nuestro cliente con el servidor
           const socket = io('http://'+ this.equipo + ':3003')

           
               socket.on('netstat-eth0', (objeto)=>{
                   this.valor_net_inp = objeto.data;
                   this.descripcion_net_inp = objeto.descripcionInp;
               });

               socket.on('netstat-eth0', (objeto) =>{
                    this.valor_net_out = objeto.data;
                    this.descripcion_net_out = objeto.descripcionOut
                });

                socket.on('netstat-la', (objeto) => {
                    this.valor_netla_inp = objeto.datalainput
                    this.descripcion_netla_inp = objeto.descripcionlainput
                });

                socket.on('netstat-la', (objeto) => {
                    this.valor_netla_out = objeto.datalaouput,
                    this.descripcion_netla_out = objeto.descripcionlaoutput
                })



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


