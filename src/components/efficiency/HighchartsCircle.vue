<script>
    import {ref,computed,watch} from 'vue'
    import Highcharts from 'highcharts';
    import exporting from 'highcharts/modules/exporting';
    exporting(Highcharts);

    export default{
        props: {
            data:Number,
            color:String
        },
        setup(props){
            const data =ref(props.data)
            watch(props, () => {
                chartOptions.value.plotOptions.pie.endAngle=(props.data)/100*360
                chartOptions.value.title.text = props.data+'%'
            })
            
            const chartOptions = ref({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: data.value+'%',
                    align: 'center',
                    verticalAlign: 'middle'
                },
                tooltip: {
                    pointFormat: data.value+'%'
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: 0,
                        endAngle: (props.data)/100*360,
                        center: ['50%', '50%'],
                        size: '50%',
                        colors: [props.color],
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    innerSize: '50%',
                    data: [
                        data.value
                    ]
                }],
                    //開啟右上角download按鈕
                exporting:{
                    enabled: false
                },
                //隱藏右下角highcharts浮水印
                credits: {
                    enabled:false
                }
            })
            return {
                chartOptions
            }
        }
    }
</script>

<template>
    <div>
       <highcharts :options="chartOptions"></highcharts>
    </div>
</template>