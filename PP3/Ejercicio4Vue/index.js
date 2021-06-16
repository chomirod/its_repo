const mispropiedades = {
    data(){
        return {
            descripcion:'',
            tiempo:'',
            lista_tareas:[]
        }
    },

    methods:{
        guardarTarea(){
            const nuevaTarea = {
                descripcion:this.descripcion,
                tiempo:this.tiempo
            }

            if("tareas" in localStorage){
                this.lista_tareas = JSON.parse(localStorage.getItem("tareas"));
                this.lista_tareas.push(nuevaTarea);
                localStorage.setItem("tareas", JSON.stringify(this.lista_tareas));

            }else{
                this.lista_tareas.push(nuevaTarea);
                localStorage.setItem("tareas", JSON.stringify(this.lista_tareas))
            }

            this.descripcion = '';
            this.tiempo = '';
        },
        listarTareas(){
            if("tareas" in localStorage)
            {
                this.lista_tareas = JSON.parse(localStorage.getItem("tareas"));
            }else{
                this.lista_tareas = [];
            }

        },
        eliminarTarea(index){
            this.lista_tareas.splice(index,1);
            localStorage.setItem("tareas",JSON.stringify(this.lista_tareas));
        },

        eliminar(){
            localStorage.removeItem("tareas");
            this.listarTareas();
        }

    },

    mounted(){
        this.listarTareas();
    }


}
Vue.createApp(mispropiedades).mount("#app");