<template>
    <h4> Seleccione el Nombre del Cliente </h4>
        
    
    <div class="row mb-3">
        <div class="col-3">
            <select @change="capturar_random()" v-model="equipo" class="form-select">
                <option value="-1" selected disabled>Elija equipo a Monitorear</option>
                <option value="localhost">MI HOST</option>
                <option v-for="cliente of lista_client" v-bind:key="cliente.id_cliente" :value="cliente.direccion_ip">{{cliente.razon_social}}</option>

               
            </select>
        </div>
    </div>
 
   <h1> Cpu </h1>
    
    <div class="card text-white bg-secondary mb-3" style="max-width: 100rem;">
        
        <div class="card-header text-center text-black"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Caracteristicas del CPU</font></font></div>
        <div class="card-columns">
                <img src="https://hardzone.es/app/uploads-hardzone.es/2020/09/cpuregistrosinstruccionesportada.jpg" class="my-4 img-thumbnail text-right" style="height:250px; display:block; margin:0 auto 0 auto;"> 
                
        
                <!-- Cpu Free !-->
                <div class="row mb-3">

                    <!-- Modelo Cpu!-->
                            <div class="col-3">
                                <div class="card bg-primary">
                                    <div class="card-header  text-center text-white">
                                        <h6>{{descripcion_cpu_model}}</h6>
                                    </div>

                                    <div class="card-body text-center text-white">
                                        <h6>{{modelo_cpu}}</h6>
                                    </div>

                                    <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                                                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
                                            </svg>
                                    </div>
                                </div>
                            </div>

                    <!-- cpu Libre !-->
                    <div class="col-3">
                        <div class="card bg-primary">
                            <div class="card-header text-center bg-danger">
                                {{this.descripcion_cpu_free}}
                            </div>
                            <div class="card-body text-center text-white">
                                <h1>{{valor_cpu_free}}</h1>
                            </div>
                            <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                                                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
                                            </svg>
                                </div>
                        </div>
                    </div>
                
                <!-- cpu uso !-->
                
                            <div class="col-3">
                                    <div class="card bg-primary">
                                        <div class="card-header text-center">
                                            <h6>{{descripcion_cpu_usage}}</h6>
                                        </div>

                                        <div class="card-body text-center text-white">
                                            <h4>{{valor_cpu_usage}}</h4>
                                        </div>

                                        <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                                                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <!-- Cores Cpu !-->
                            <div class="col-3">
                                <div class="card bg-primary">
                                    <div class="card-header  text-center text-white">
                                        <h6>{{descripcion_cpu_count}}</h6>
                                    </div>

                                    <div class="card-body text-center text-white">
                                        <h4>{{valor_cpu_count}}</h4>
                                    </div>

                                    <div class="card-footer text-black text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu-fill" viewBox="0 0 16 16">
                                                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                                                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z"/>
                                            </svg>
                                        </div>
                                </div>
                            </div>
                            

                        
                
                        
                        </div>
                </div>
                
    </div>
    <div id="container" class="mt-3"></div>
</template>

<script>

import io from 'socket.io-client'

import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

export default {
    name: 'CpuIndicador',
    data(){
        return{
            valor_recibido:'',
            direccion_ip:'',
            estado:'',
            equipo:'',
            nombre:'',
            razon_social:'',
            valor_cpu_free:'',
            valor_cpu_usage:'',
            valor_cpu_count:'',
            modelo_cpu:'',
            descripcion_cpu_free:'',
            descripcion_cpu_usage:'',
            descripcion_cpu_model:'',
            descripcion_cpu_count:'',
            lista: [],
            lista_client:[],

        }
    },
    methods:{
        capturar_random()
        {
            //Tenemos que vincular nuestro cliente con el servidor
           const socket = io('http://'+ this.equipo + ':3003')


            socket.on('dato-socket', (objeto) => {
                this.valor_recibido = objeto.dato.toFixed(2);
                this.nombre = objeto.nombre;
                if(this.valor_recibido > 0.7)
                {
                    this.estado = 'Excedido'
                }else{
                    this.estado = 'Normal'
                }
            }); 

           
               socket.on('datos-cpu', (objeto)=>{
                   this.valor_cpu_free = objeto.data;
                   this.descripcion_cpu_free = objeto.descripcion;
               });

               socket.on('uso-cpu', (objeto) =>{
                    this.valor_cpu_usage = objeto.data;
                    this.descripcion_cpu_usage = objeto.descripcion
                });

                socket.on('contar-cpu', (objeto) => {
                    this.valor_cpu_count = objeto.data
                    this.descripcion_cpu_count = objeto.descripcion
                });

                socket.on('modelo-cpu', (objeto) => {
                    this.modelo_cpu = objeto.data,
                    this.descripcion_cpu_model = objeto.descripcion
                })

                   this.aplicar_tema()
                   this.iniciar_grafico()


        },

         obtenerClientes(){
            this.axios.get("http://localhost:3003/cliente").then(result => {
                this.lista_client =result.data;
            });
         },    

         
        iniciar_grafico()
        {
            const socket = io('http://'+ this.equipo + ':3003')
            Highcharts.chart('container', {
                chart: {
                    type: 'line',
                    animation: Highcharts.svg,
                    marginRight: 10,
                    events: {
                        load: function () {
                       
                                var series = this.series[0];
                                socket.on('datos-cpu', function(num){
                                    var x = (new Date()).getTime();
                                    console.log(num.data)
                                    series.addPoint([x, num.data], true, true);
                                }); 
                        }
                    },
                    
                },
                time: {
                    useUTC: false
                },
                title: {
                    text: 'Live random data'
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150
                },
                yAxis: {
                    title: {
                        text: 'Uso CPU porcentual (%)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 100,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br/>',
                    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}%'
                },
                legend: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                series: [{
                    name: 'Random data',
                    data: (function () {
                       
                        var data = [],
                            time = (new Date()).getTime(),
                            i;
                        for (i = -19; i <= 0; i += 1) {
                            var y = null;
                            socket.on('datos-cpu', function(num){
                                y = num.data;
                            })
                            data.push({
                                x: time + i * 1000,
                                y: y
                            });
                            
                        }
                        return data;
                    }())
                }]
            });
        },
        aplicar_tema(){
            Highcharts.theme = {
                colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
                    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                            [0, '#2a2a2b'],
                            [1, '#3e3e40']
                        ]
                    },
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase',
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase'
                    }
                },
                xAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: '#F0F0F3',
                            style: {
                                fontSize: '13px'
                            }
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    boxplot: {
                        fillColor: '#505053'
                    },
                    candlestick: {
                        lineColor: 'white'
                    },
                    errorbar: {
                        color: 'white'
                    }
                },
                legend: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    itemStyle: {
                        color: '#E0E0E3'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#606063'
                    },
                    title: {
                        style: {
                            color: '#C0C0C0'
                        }
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                labels: {
                    style: {
                        color: '#707073'
                    }
                },
                drilldown: {
                    activeAxisLabelStyle: {
                        color: '#F0F0F3'
                    },
                    activeDataLabelStyle: {
                        color: '#F0F0F3'
                    }
                },
                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: '#505053'
                        }
                    }
                },
                // scroll charts
                rangeSelector: {
                    buttonTheme: {
                        fill: '#505053',
                        stroke: '#000000',
                        style: {
                            color: '#CCC'
                        },
                        states: {
                            hover: {
                                fill: '#707073',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: '#000003',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    },
                    inputBoxBorderColor: '#505053',
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },
                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(255,255,255,0.1)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    },
                    xAxis: {
                        gridLineColor: '#505053'
                    }
                },
                scrollbar: {
                    barBackgroundColor: '#808083',
                    barBorderColor: '#808083',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: '#606063',
                    buttonBorderColor: '#606063',
                    rifleColor: '#FFF',
                    trackBackgroundColor: '#404043',
                    trackBorderColor: '#404043'
                }
            };
            // Apply the theme
            Highcharts.setOptions(Highcharts.theme);
        },
    
    },


    mounted()
    {
        this.capturar_random()
        this.obtenerClientes()
    }
}
</script>


