<template>
    
        <div class="card-body bg-secondary mb-3 container" style="max-width: 100rem;">
            <div class="card-header text-center text-black"><h3>Datos del Cliente </h3> </div>
            

            <div class="row text-center ">
                <div class="col-4  container  ">


                    <div class="form-group border m-4 ">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Razon social</font></font></label>
                        <input v-model="razon_social" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Razon social">
                    </div>
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Domicilio</font></font></label>
                        <input v-model="direccion" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Domicilio">
                    </div>
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Localidad</font></font></label>
                        <input v-model="localidad" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Locolidad">
                    </div>
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Telefono</font></font></label>
                        <input v-model="telefono_contacto" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Telefono">
                    </div>
                            
                    
                </div>
                
                <div class="col-4 text-center"> 
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Correo Electronico</font></font></label>
                        <input v-model="correo_electronico" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Correo Electronico">
                        <small id="emailHelp" class="form-text text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nunca compartiremos su correo electrónico con nadie más.</font></font></small>
                    </div>

                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Descripcion del Equipo</font></font></label>
                        <input v-model="equipo_descripcion" class="form-control" placeholder="Ingrese Marca y Modelo del Equipo">
                        
                    </div>
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sistema Operativo</font></font></label>
                        <input v-model="sistema_operativo" class="form-control" placeholder="Ingrese su Sistema Operativo Actual">
                        
                    </div>
                    <div class="form-group border m-4">
                        <label for="exampleInputEmail1" class="form-label mt-4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DIRECCION IP</font></font></label>
                        <input v-model="direccion_ip" class="form-control" placeholder="Ingrese Ip de Equipo">
                        
                    </div>



                </div>
                    
                <div class="d-grid gap-2">
                    <div v-if="estado == 0">
                        
                        
                        <button  @click="guardarCliente()" class="btn btn-primary btn-outline-success" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Agregar Cliente
                        </button>
                        
                    </div>    
                    <div v-if="estado == 1">
                        <button @click="actualizarCliente()" class="btn btn-primary " type="button">Modificar Cliente</button>
                    </div>

                </div>

                    <div class="d-grid gap-2">
                        <div v-if="estado == 0">
                            <button @click="vaciar()" type="button" class="btn btn-primary btn-outline-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-dash" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                Limpiar Datos
                            </button>
                            
                        </div>
                    </div>

            </div>     
            
            
        </div>

                


                
               

               

        <div class="container">

            <table border="4" class="table table-bordered table-hover">
                <caption>Lista de Clientes</caption>
                <thead>
                    <tr>
                        <th scope="col">Razon Social </th>
                        <th scope="col">Domicilio</th>
                        <th scope="col">Localidad</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo Electronico</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">S.O</th>
                        <th scope="col">Direccion IP</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-warning table-bordered " v-for="cliente of lista" v-bind:key="cliente.id_cliente">
                        
                        <th scope="row">{{cliente.razon_social}}</th>
                        <td>{{cliente.direccion}}</td>
                        <td>{{cliente.localidad}}</td>
                        <td>{{cliente.telefono_contacto}}</td>
                        <td>{{cliente.correo_electronico}}</td>
                        <td>{{cliente.equipo_descripcion}}</td>
                        <td>{{cliente.sistema_operativo}}</td>
                        <td>{{cliente.direccion_ip}}</td>
                          
                        <td>
                            <button @click="eliminarCliente(cliente.id_cliente)" class="btn btn-danger btn-sm btn-outline-danger" style= "margin-right:4px">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                     <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>      
                            </button>
                            
                        </td>

                        <td>
                            <button @click="editar(cliente)" class="btn btn-primary btn-sm btn-outline-success"> Editar</button>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>



</template>

<script>
    export default {
    name: "ClienteCrud",
    data(){
        return{
            razon_social:'',
            telefono_contacto:'',
            direccion:'',
            localidad:'',
            equipo_descripcion:'',
            correo_electronico:'',
            direccion_ip:'',
            sistema_operativo:'',
            id:null,
            lista:[],
            estado:0
            
        }
    },


    methods:{

       vaciar(){
            this.razon_social = '',
            this.telefono_contacto = '',
            this.direccion = '',
            this.localidad = '';
            this.equipo_descripcion ='',
            this.direccion_ip ='',
            this.sistema_operativo ='',
            this.correo_electronico ='',
            this.id = null;
        },

        guardarCliente()
        {
            const unCliente = {
                razon_social:this.razon_social,
                telefono_contacto:this.telefono_contacto,
                direccion:this.direccion,
                localidad:this.localidad,
                equipo_descripcion:this.equipo_descripcion,
                correo_electronico:this.correo_electronico,
                direccion_ip:this.direccion_ip,
                sistema_operativo:this.sistema_operativo,


            }
            this.axios.post("http://localhost:3003/cliente", unCliente).then(result => {
                alert(result.data)
                this.vaciar()
                this.listarClientes()
            });
        },
        listarClientes(){
            this.axios.get("http://localhost:3003/cliente").then(result => {
                this.lista =result.data;
            })
        
        },
        eliminarCliente(id){
            this.axios.delete("http://localhost:3003/cliente/"+id).then(result =>{
                alert(result.data)
                this.listarClientes()
            })

        },
        editar(unCliente){
            console.log(unCliente)
            this.estado = 1;
            this.razon_social = unCliente.razon_social;
            this.telefono_contacto = unCliente.telefono_contacto;
            this.direccion = unCliente.direccion;
            this.localidad = unCliente.localidad;
            this.equipo_descripcion = unCliente.equipo_descripcion;
            this.direccion_ip = unCliente.direccion_ip;
            this.sistema_operativo = unCliente.sistema_operativo;
            this.correo_electronico = unCliente.correo_electronico;
            this.id = unCliente.id_cliente;
        }, 
        actualizarCliente(){
            const clienteModificado = {
                razon_social:this.razon_social,
                telefono_contacto:this.telefono_contacto,
                direccion:this.direccion,
                localidad:this.localidad,
                equipo_descripcion:this.equipo_descripcion,
                direccion_ip:this.direccion_ip,
                sistema_operativo:this.sistema_operativo,
                correo_electronico:this.correo_electronico

            }
            this.axios.put("http://localhost:3003/cliente/"+this.id,clienteModificado).then(result => {
                alert(result.data)
                this.listarClientes()
                this.vaciar()
                this.estado = 0;
            })
        }
    },
    mounted(){
            this.listarClientes()
        }
}
 



    
   
</script>