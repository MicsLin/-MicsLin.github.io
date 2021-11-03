<script>
    import {ref,computed} from 'vue'
    import Highcharts from 'highcharts';
    import exporting from 'highcharts/modules/exporting';
    import HighchartsCircle from './HighchartsCircle.vue'
    exporting(Highcharts);
    export default{
        components:{
            HighchartsCircle
        },
        setup(){

            const getdata = [
                // { y: 24.2, name: "Point1"},
                {name:'123',use:87,default:90},
                {name:'ddd',use:77,default:93},
                {name:'niek',use:85,default:92},
                {name:'pan',use:89,default:90},
                {name:'123pan',use:90,default:92},
                {name:'bbc',use:85,default:91},
                {name:'acc',use:82,default:90},
                {name:'pan',use:89,default:90},
                {name:'123pan',use:90,default:92},
                {name:'bbc',use:85,default:91},
                {name:'acc',use:82,default:90},
                {name:'pan',use:89,default:90},
                {name:'123pan',use:90,default:92},
                {name:'bbc',use:85,default:91},
                {name:'acc',use:82,default:90},
            ]
            const getName=computed(()=>{
                return getdata.map(function(item, index, array){
                    return item.name
                })
            })
            //使用率
            const getUse=computed(()=>{
                return getdata.map(function(item, index, array){
                    return item.use
                })
            })
            //性能效率
            const getDefault=computed(()=>{
                return getdata.map(function(item, index, array){
                    return item.default
                })
            })
            //達成率
            const getGot=computed(()=>{
                return getUse.value.map(function(item, index, array){
                    return Math.round(item/getDefault.value[index]*100)
                })
            })
            //設備綜合效率
            
            //onClick
            const getCurrencyUse =ref(getUse.value[0])
            const getCurrencyDefault =ref(getDefault.value[0])
            const getCurrencyGot =ref(getGot.value[0])
            const getCurrencyTotal =ref(90)

           

            const chartOptions = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories:getName.value,
                    crosshair: true,
                },
                yAxis: {
                    min: 0,
                    max:100,
                    title: {
                        text: '百分比'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                    }
                },
                series: [
                    {
                        name: '使用效率',
                        data: getUse.value,
                        point: {
                            events: {
                                click: function () {
                                    getCurrencyUse.value = getUse.value[this.index]
                                    getCurrencyDefault.value=getDefault.value[this.index]
                                    getCurrencyGot.value=getGot.value[this.index]
                                    getCurrencyTotal.value=92
                                }
                            }
                        }
                    }, {
                        name: '性能效率',
                        data: getDefault.value,
                        point: {
                            events: {
                                click: function () {
                                    getCurrencyUse.value = getUse.value[this.index]
                                    getCurrencyDefault.value=getDefault.value[this.index]
                                    getCurrencyGot.value=getGot.value[this.index]
                                    getCurrencyTotal.value=92
                                }
                            }
                        }

                    }, {
                        name: '達成率',
                        data:getGot.value,
                        point: {
                            events: {
                                click: function () {
                                    getCurrencyUse.value = getUse.value[this.index]
                                    getCurrencyDefault.value=getDefault.value[this.index]
                                    getCurrencyGot.value=getGot.value[this.index]
                                    getCurrencyTotal.value=92
                                }
                            }
                        }
                    }
                ],
                //隱藏右下角highcharts浮水印
                credits: {
                    enabled:false
                },
            }
        return {
            chartOptions,
            getCurrencyUse,getCurrencyDefault,getCurrencyGot,getCurrencyTotal
        }
    }
}
</script>

<template>
    <div>
       <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="flex flex-wrap items-center">
        <div class="w-1/4 md:w-1/2 md:mb-5 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow">
            <div class="w-11/12 ">
                <div class="py-2 relative top-0 text-center z-20 bg-blue-400">使用效率</div>
                <div class="relative left-2 -top-28 md:-top-28 sm:-top-32 z-1">
                    <HighchartsCircle :data="getCurrencyUse" :color="'blue'" />
                </div>
            </div>
        </div>
        <div class="w-1/4 md:w-1/2 md:mb-5 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow">
            <div class="w-11/12 ">
                <div class="py-2 relative top-0 text-center z-20 bg-blue-400">性能效率</div>
                <div class="relative left-2 -top-28 md:-top-28 sm:-top-32 z-1">
                    <HighchartsCircle :data="getCurrencyDefault" :color="'#383838'" />
                </div>
            </div>
        </div>
        <div class="w-1/4 md:w-1/2 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow">
            <div class="w-11/12">
                <div class="py-2 relative top-0 text-center z-20 bg-blue-400">設備綜合效率</div>
                <div class="relative left-2 -top-28 md:-top-28 sm:-top-32 z-1">
                    <HighchartsCircle :data="getCurrencyGot" :color="'green'" />
                </div>
            </div>
        </div>
        <div class="w-1/4 md:w-1/2 h-52 md:h-56 sm:h-44 overflow-hidden rounded shadow">
            <div class="w-11/12">
                <div class="py-2 relative top-0 text-center z-20 bg-blue-400">達成率</div>
                <div class="relative left-2 -top-28 md:-top-28 sm:-top-32 z-1">
                    <HighchartsCircle :data="getCurrencyTotal" :color="'purple'" />
                </div>
            </div>
        </div>
    </div>
</template>