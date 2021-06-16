const mispropiedades = {
    data(){
        return {
            titulo:'',
            url:'',
            lista_tareas:[]
        }
    },

    methods: {
        guardar_imagen(){
            let imagen = {
                titulo:this.titulo,
                url:this.url
            }

            this.lista_tareas.push(imagen)

            this.titulo= ''; 
            this.url= '';
        },

        mounted() {
            
        }


    },

}

Vue.createApp(mispropiedades).mount("#app")