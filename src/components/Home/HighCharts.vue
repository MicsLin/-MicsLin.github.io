<template>
    <highcharts :options="chartOptions"> </highcharts>
    <!-- <smMenu v-if="show" @mouseleave="show = false" /> -->
</template>

<script>
//開啟右上角download按鈕
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

import { useRouter } from "vue-router";

export default {
    name:'HighCharts',
    setup(){
        const router = useRouter();
        const getdata = [
                    // { y: 24.2, name: "Point1"},
                    ['Shanghai', 24.2],
                    ['Beijing', 20.8],
                    ['Karachi', 14.9],
                    ['Shenzhen', 13.7],
                    ['Guangzhou', 13.1],
                    ['Istanbul', 12.7],
                    ['Mumbai', 12.4],
                    ['Moscow', 12.2],
                    ['São Paulo', 12.0],
                    ['Delhi', 11.7],
                    ['Kinshasa', 11.5],
                    ['Tianjin', 11.2],
                    ['Lahore', 11.1],
                    ['Jakarta', 10.6],
                    ['Dongguan', 10.6],
                    ['Lagos', 10.6],
                    ['Bengaluru', 10.3],
                    ['Seoul', 9.8],
                    ['Foshan', 9.3],
                    ['Tokyo', 9.3]
                ]
        const chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                //可以給予highcharts一個title
                text: ''
            },
            subtitle: {
                text: '按下長條圖可進入個別產線資料'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        // cursor :"pointer"
                    }       
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            tooltip: {
                pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                name: 'Population',
                data:getdata,
                point: {
                    events: {
                        click: function () {
                            router.push({path:'/line_balance',query:{data:this.name}})
                        }
                    }
                    
                }
            }],
            //開啟右上角download按鈕
            exporting:{
                enabled: true
            },
            //隱藏右下角highcharts浮水印
            credits: {
                enabled:false
            },
        } 
        // const get_push = document.querySelectorAll('.routerPush')
        // get_push.onclick()
        // router.push({path:'/line_balance',query:{data:this.name}})


        return { chartOptions}
    }
}

</script>
