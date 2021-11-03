<script>
import {nextTick,ref} from 'vue'


export default {
    props:{
        mychart_id: String,
        datas:Array
    },
    setup(props){
    //擷取props的資料
    const getProps = props.datas

    const data1_tt = getProps[0].data1_tt //TT
    const data1_one = getProps[0].data1_one //GSD 標準工時
    const data1_two = getProps[0].data1_two //VA 縫製工時
    const data1_three = getProps[0].data1_three //NVA 浮餘工時
    const data1_four = getProps[0].data1_four

    const data2 = [500, 300, 425, 111, 235, 1680, 1590]
    const data4_one = [0,123,222,345,487,556,638,709,824,1028,1346,1800]
    const data4_two = [0,366,400,512,644,777,835,927,1112,1324,1569,1800]
    const label_sample=['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00']
    // chart2的max
    const process2_max =ref(2500)
    //myChart3的data
    const data3 =[0,-1,14,3,6]

    
    nextTick(()=>{
        var ctx = document.getElementById("myChart").getContext("2d");

        // 通过 createLinearGradient 创建 CanvasGradient 对象
        var gradientStroke = ctx.createLinearGradient(0, 0, 0, 100);
        // 定义渐变的 偏移 和 颜色
        gradientStroke.addColorStop(0, "#00FFFF");
        gradientStroke.addColorStop(1, "#75d1b8");

        var data = {
            labels: [["1(P1)", "Cora"], ["2(P2)", "Kenny"], ["3(P3)", "Sophia"], ["4(P4)", "Angel"], ["5(P4)", "Gaya"], ["6(P4)", "Mike"], ["7(P5)", "Josh"], ["8(P5)", "Harry"], ["9(P5)", "Helen"], ["-", "-"], ["-", "-"], ["-", "-"]],
            datasets: [
                {
                    label: '',
                    // TT 理想節拍 12個
                    data:data1_tt,
                    borderWidth: 2,
                    borderColor: '#f68944',
                    pointRadius: 0,
                    type: 'line',
                    fill: false,
                    borderSkipped: 'showOnlyTop',
                    pointStyle: 'line'
                }, {
                    label: "",
                    // backgroundColor: "#75d1b8",
                    backgroundColor: gradientStroke,
                    data:data1_one
                }, {
                    label: "",
                    backgroundColor: "#f9bc3b", //數字小，不需要漸進色
                    data:data1_two,
                    stack: 'Stack 0',
                }, {
                    label: "",
                    backgroundColor: "#f6f6c4",//數字小，不需要漸進色
                    data:data1_three,
                    stack: 'Stack 0',
                }, {
                    label: "",
                    backgroundColor: "#103a50",
                     data:data1_four
                }]
        };

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: 'index',
                    intersect: true,
                    position:'nearest'//提示的位置
                },
                barValueSpacing: 20,
                legend: {
                    display: false
                },
                // 顯示Chart資料數字
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;

                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        // ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.fillStyle = '#fff'; //dark模式
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        // this.data.datasets.forEach(function (dataset, i) {
                        //     var meta = chartInstance.controller.getDatasetMeta(i);
                        //     let htmlContent = ``
                        //     if (i === 1) {
                        //         meta.data.forEach(function (bar, index) {
                        //             var data = dataset.data[index];
                        //             ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        //         });
                        //     }
                        // });

                        // chartInstance.data.datasets.forEach(function (dataset) {
                        //     for (var j = 0; j < dataset.data.length; j++) {
                        //         var model = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._model;
                        //         var scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._yScale.maxHeight;
                        //         var yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        //         ctx.fillText(dataset.data[j], model.x, yPos);
                        //     }

                        // });

                        // // dataset0 第十二筆值的背景顏色與位置
                        // const dataset0 = chartInstance.data.datasets[0];
                        // const dataset011 = dataset0.data[11];
                        // const model = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._model;
                        // const scaleMax = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._yScale.maxHeight;
                        // const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        // ctx.fillStyle = 'rgb(246, 137, 68, 1)';
                        // ctx.fillRect(model.x-15, yPos-25, 30, 20);

                        // 三角形測試中
                        // const dataset0 = chartInstance.data.datasets[0];
                        // const dataset011 = dataset0.data[11];
                        // const model = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._model;
                        // const scaleMax = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._yScale.maxHeight;
                        // const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        // ctx.fillStyle = 'rgb(246, 137, 68, 1)';
                        // ctx.fillRect(model.x-15, yPos-25, 30, 20);
                        // context.beginPath();
                        // context.moveTo(100, 100);
                        // context.lineTo(100, 300);
                        // context.lineTo(300, 300);
                        // context.closePath();

                        // // dataset0橫線的值顏色(透明)與位置
                        // const dataset = chartInstance.data.datasets[0];
                        // for (let i = 0; i < dataset.data.length; i++) {
                        //     const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                        //     const scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                        //     const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        //     if ( i < 11 ) {
                        //         ctx.fillStyle = 'rgb(255, 255, 255, 0.1)';
                        //         ctx.fillText(dataset.data[i], model.x, yPos-8);
                        //     } else {
                        //         ctx.fillStyle = 'rgb(255, 255, 255, 1)';
                        //         ctx.fillText(dataset.data[i], model.x, yPos-8);
                        //     }
                        // }
                        // // dataset1 bar的值顏色(黑)與位置
                        // const dataset1 = chartInstance.data.datasets[1];
                        // for (let i = 0; i < dataset1.data.length; i++) {
                        //     ctx.fillStyle = 'rgb(0, 0, 0)';
                        //     const model = dataset1._meta[Object.keys(dataset1._meta)[0]].data[i]._model;
                        //     const scaleMax = dataset1._meta[Object.keys(dataset1._meta)[0]].data[i]._yScale.maxHeight;
                        //     const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        //     ctx.fillText(dataset1.data[i], model.x, yPos);
                        // }
                    },
                },
                hover: {
                    animationDuration: 0
                },
                scales: {
                    yAxes: [{
                        stacked: false,
                        gridLines: {
                            display: true,
                            // color: "rgba(230, 230, 230, 0)",
                            zeroLineColor: '#CCC',
                            zeroLineWidth: 2,
                        },
                        scaleLabel: {
                            display: false
                        },
                        ticks: {
                            fontColor: "#CCC", // this here
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            // display: true,
                            offsetGridLines: true,//間隔的線
                            color: "rgba(230, 230, 230, .7)",
                            zeroLineColor: '#CCC',
                            zeroLineWidth: 2,
                        },
                        ticks: {
                            //這裡關閉的話，會將提示框卡掉
                            display: true, //this will remove only the label
                            fontColor:"rgba(230, 230, 230, 0)"
                        }
                    }]
                },
            },
        });


        var ctx = document.getElementById("myChart2").getContext("2d");
        var data = {
            labels: ["P1", "P2", "P3", "P4", "P5", "", "", "", "", "", "", ""],
            datasets: [{
                label: '',
                // data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
                data: [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500],
                barPercentage: 0.8,
                borderWidth: 2,
                type: 'line',
                fill: false,
                borderColor: '#f68944',
                pointRadius: 0,
                yAxisID: 'y-axis-2',
                borderSkipped: 'showOnlyTop',
                pointStyle: 'line'
            },

                {
                    label: '',
                    // backgroundColor: "rgba(117,209,184)",
                    backgroundColor: gradientStroke,
                    // data: [<?=$process_set?>],
                    data:data2,
                    borderColor: '#75d1b8',
                    borderTopWidth: 1,
                    yAxisID: 'y-axis-bar',
                    pointStyle: 'line',
                },
            ],
        };

        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,

            options: {
                responsive: true,
                maintainAspectRatio: false,

                legend: {
                    display: false
                },
                // 顯示Chart資料數字
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;

                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        // ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.fillStyle = '#fff'; //dark模式
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        // this.data.datasets.forEach(function (dataset, i) {
                        //     var meta = chartInstance.controller.getDatasetMeta(i);
                        //     let htmlContent = ``
                        //     if (i === 1) {
                        //         meta.data.forEach(function (bar, index) {
                        //             var data = dataset.data[index];
                        //             ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        //         });
                        //     }
                        // });

                        // chartInstance.data.datasets.forEach(function (dataset) {
                        //     for (var j = 0; j < dataset.data.length; j++) {
                        //         var model = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._model;
                        //         var scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[j]._yScale.maxHeight;
                        //         var yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        //         ctx.fillText(dataset.data[j], model.x, yPos);
                        //     }

                        // });

                        // dataset0 第十二筆值的背景顏色與位置
                        const dataset0 = chartInstance.data.datasets[0];
                        const dataset011 = dataset0.data[11];
                        const model = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._model;
                        const scaleMax = dataset0._meta[Object.keys(dataset0._meta)[0]].data[11]._yScale.maxHeight;
                        const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                        ctx.fillStyle = 'rgb(246, 137, 68, 1)';
                        ctx.fillRect(model.x-15, yPos-25, 30, 20);

                        // dataset0橫線的值顏色(透明)與位置
                        const dataset = chartInstance.data.datasets[0];
                        for (let i = 0; i < dataset.data.length; i++) {
                            const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                            const scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
                            const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                            if ( i < 11 ) {
                                // ctx.fillStyle = 'rgb(255, 255, 255, 0.1)';
                                ctx.fillStyle = 'rgb(255, 255, 255, 0)'; //dark模式
                                ctx.fillText(dataset.data[i], model.x, yPos-8);
                            } else {
                                ctx.fillStyle = 'rgb(255, 255, 255, 1)';
                                ctx.fillText(dataset.data[i], model.x, yPos-8);
                            }
                        }
                        // dataset1 bar的值顏色(黑)與位置
                        const dataset1 = chartInstance.data.datasets[1];
                        for (let i = 0; i < dataset1.data.length; i++) {
                            // ctx.fillStyle = 'rgb(0, 0, 0)';
                            ctx.fillStyle = '#fff'; //dark模式
                            const model = dataset1._meta[Object.keys(dataset1._meta)[0]].data[i]._model;
                            const scaleMax = dataset1._meta[Object.keys(dataset1._meta)[0]].data[i]._yScale.maxHeight;
                            const yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;
                            ctx.fillText(dataset1.data[i], model.x, yPos);
                        }
                    },
                },
                hover: {
                    animationDuration: 0
                },
                scales: {
                    yAxes: [{
                        id: "y-axis-bar",
                        stacked: false,
                        gridLines: {
                            // display: false,
                            // color: "rgba(230, 230, 230, 0.2)",
                            zeroLineColor: '#CCC',
                            zeroLineWidth: 2,
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            fontColor:"#ccc",
                            reverse: false,
                            max: process2_max.value,
                            min: 0,
                            stepSize: 500,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },

                    }, {
                        id: "y-axis-2",
                        type: "linear",
                        display: false,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            reverse: false,
                            max: 2500,
                            min: 0,
                            stepSize: 500,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            },
                        }
                    },],
                    xAxes: [{
                        stacked: true,
                        labelString: 'Labels',
                        gridLines:{
                            display:true,
                            zeroLineColor: '#CCC',
                            zeroLineWidth: 2,
                            offsetGridLines:true,
                            color:"rgba(230, 230, 230, 0.7)"
                        },
                        ticks: {
                            display: true, //this will remove only the label
                            fontColor:"#ccc"
                        }
                    }]
                }
            }
        });
        var ctx = document.getElementById("myChart3").getContext("2d");
        var data = {
            labels: ["P1", "P2", "P3", "P4", "P5", "", "", "", "", "", "", ""],
            datasets: [
                {
                    label: '',
                    backgroundColor: "#f68944",
                    data: data3,
                    barPercentage: 0.8,
                    borderTopWidth: 1,
                    yAxisID: 'y-axis-bar',
                    pointStyle: 'line',
                },
            ],

        };
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,

            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                legend: {
                    display: false
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;

                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        // ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.fillStyle = '#fff'; //dark模式
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            // console.log(meta)
                            let htmlContent = ``
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });

                        });
                    },
                },
                hover: {
                    animationDuration: 0
                },
                scales: {
                    yAxes: [{
                        id: "y-axis-bar",
                        stacked: false,
                        gridLines: {
                            // display: false,
                            // color: "rgba(230, 230, 230, 0.2)",
                            // zeroLineColor: '#666666',
                            zeroLineColor:"rgba(230, 230, 230, 0.7)",
                            zeroLineWidth: 1,
                            
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            fontColor:"#ccc",
                            reverse: false,
                            max: 500,
                            min: 0,
                            stepSize: 500,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },

                    }, {
                        id: "y-axis-2",
                        type: "linear",
                        display: false,
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            reverse: false,
                            max: 1800,
                            min: 0,
                            stepSize: 500,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        }
                    },],
                    xAxes: [{
                        stacked: true,
                        labelString: 'Labels',
                        gridLines:{
                            display:true,
                            zeroLineColor: '#CCC',
                            zeroLineWidth: 2,
                            offsetGridLines:true,
                            color:"rgba(230, 230, 230, 0.7)"
                        },
                        ticks: {
                            display: true, //this will remove only the label
                            fontColor:"#ccc"
                        }

                    }]
                },
            }
        });
        var ctx = document.getElementById("myChart4").getContext("2d");
        var data = {
            labels: label_sample,
            datasets: [
                {
                    label: 'Chart 1',
                    // data: [<?=$process_count_estimate?>],
                    data:data4_one,
                    borderTopWidth: 1,
                    yAxisID: 'y-axis-bar',
                    pointStyle: 'line',
                    fill: false,
                    borderWidth: 2,
                    borderColor: "#f68944",
                    pointRadius: 0,
                }, {
                    label: 'Chart 2',
                    // data: [{"x":1,"y":0},{"x":2,"y":1},{"x":3,"y":4},{"x":4,"y":5},{"x":5,"y":6},{"x":6,"y":7},{"x":7,"y":8},{"x":8,"y":9},{"x":9,"y":10},{"x":10,"y":10},{"x":11,"y":11},{"x":12,"y":12},{"x":13,"y":13},{"x":14,"y":14},{"x":15,"y":16},{"x":16,"y":17},{"x":17,"y":18},{"x":18,"y":20},{"x":19,"y":22},{"x":20,"y":23},{"x":21,"y":24},{"x":22,"y":26},{"x":23,"y":28},{"x":24,"y":30},{"x":25,"y":32},{"x":26,"y":35},{"x":27,"y":36},{"x":28,"y":39},{"x":29,"y":40},{"x":30,"y":42},{"x":31,"y":45},{"x":32,"y":46},{"x":33,"y":47},{"x":34,"y":48},{"x":35,"y":49},{"x":36,"y":50},],
                    // data:  [<?=$process_count_log?>],
                    data:data4_two,
                    borderTopWidth: 1,
                    yAxisID: 'y-axis-bar',
                    pointStyle: 'line',
                    fill: false,
                    borderWidth: 2,
                    borderColor: "rgba(117,209,184)",
                    pointRadius: 0,
                }
            ],


        };
        var myBarChart = new Chart(ctx, {
            type: 'line',
            data: data,

            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                legend: {
                    display: false
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;

                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                        // ctx.fillStyle = 'rgb(0, 0, 0)';
                        ctx.fillStyle = '#fff'; //dark模式
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            // console.log(meta)
                            let htmlContent = ``
                            meta.data.forEach(function (line, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, line._model.x, line._model.y - 5);
                            });

                        });
                    },
                },
                hover: {
                    animationDuration: 0
                },
                scales: {
                    yAxes: [{
                        id: "y-axis-bar",
                        stacked: false,
                        gridLines: {
                            display: true,
                            // color: "rgba(230, 230, 230, 0.2)",
                            // zeroLineColor: '#666666',
                            zeroLineColor:"rgba(230, 230, 230, 0.7)",
                            zeroLineWidth: 2,
            
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            fontColor:"#ccc",
                            reverse: false,
                            max: 1800,
                            min: 0,
                            stepSize: 500,
                            callback: function (value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },

                    }],
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: false,
                            color: "rgba(230, 230, 230, 0.4)",
                            zeroLineColor:"rgba(230, 230, 230, 0.7)",
                            zeroLineWidth: 2,
                            
                        },ticks:{
                            fontColor:"#ccc"
                        }
                    }, {
                        id: 'x-axis-2',
                        type: 'linear',
                        position: 'bottom',
                        display: false,
                        ticks: {
                            min: 0,
                            max: 24,
                        }
                    }],
                },
            },
        })
    })
    return{
        process2_max
    }
    }  
}
</script>

<template>
    <canvas id="myChart" width="1030" height="160" v-if="mychart_id == 'myChart'"></canvas>
    <canvas id="myChart2" width="515" height="80" v-if="mychart_id == 'myChart2'"></canvas>
    <canvas id="myChart3" width="515" height="80" v-if="mychart_id == 'myChart3'"></canvas>
    <canvas id="myChart4" width="515" height="160" v-if="mychart_id == 'myChart4'"></canvas>
</template>