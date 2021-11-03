<script setup>
import {ref} from 'vue'
import StyleColor from '../components/siruba_components/StyleColor.vue'
import MyChart from '../components/siruba_components/MyChart.vue'
import ChartCircleBox from '../components/siruba_components/ChartCircleBox.vue'


    //single-chart的svg
    const process_total_count = ref(850)
    const process_round_total_count =ref(Math.round(process_total_count.value/1500*100,1))

    // 即時目標達成的table
        // 標準
    const std = ref([750,480,556,768,450])
        // 達成
    const process_total =ref([556,470,520,300,280])

    //灰點CircleBg_gray 、有資料時[黃點CircleBg_ltorg、紅點CircleBg_rd、綠點CircleBg_gn、灰點CircleBg_gray]
    // 設定 0:灰，1:綠、2:黃、3:紅
    const item_state =ref([1,1,1,1,1,1,3,2,1,0,0,0])
</script>

<template>
<body class="dark">
    <div class="body">
        <div class="header">
            <div class="items">
                <div class="mainlogo width75">
                    <svg viewBox="0 0 251.97 41.54" fill="#fa461e">
                      <path class="cls-1" d="M243.77,1.79H214.6c-7.75.61-8.34,8-8.38,9.52L206.17,40H215V25h28.08V40h8.83L252,11.31C251.71,2,244.66,1.78,243.77,1.79Zm-.68,14.53H215V11.39a2.33,2.33,0,0,1,1.22-1.54h26a2.39,2.39,0,0,1,.85,1.63Zm-45,4.38s2.81-2.08,2.56-9.76c-.29-8.63-8.54-9.7-11.89-9.78l-31.11-.09v9.2H187.8c1,.16,3.29.73,3.29,2.59,0,2.69-1.58,3.26-2.51,3.36v-.06h-31.1V40.45l31.1-.08c2.56,0,11,0,12.15-10C201.52,23.33,198.1,20.7,198.1,20.7Zm-9.59,10.55H166.13V25.4H188s2.83-.29,2.83,3.13A2.73,2.73,0,0,1,188.51,31.25ZM35,16.93,9.26,16.78s-1.57-1-1.41-3.77a3.35,3.35,0,0,1,2-3.13H39.67V1.17H7.37S.36,1.87,0,13.64C-.31,24.3,6.28,25.08,6.28,25.08H28.54s3.76-.78,3.6,3.45c-.12,3.29-2.66,3.29-2.66,3.29H.32v8.94h31S42.1,42.09,42.1,27.66C42.1,18.89,35,16.93,35,16.93ZM46.56,40.44h8.79V15.83H46.56ZM51.43,0a5.65,5.65,0,1,0,5.64,5.64A5.65,5.65,0,0,0,51.43,0Zm45.3,1.74v0h-35V10.5H93.22a2.81,2.81,0,0,1,1.79,3,3,3,0,0,1-2.83,2.82H61.93V40.13h8.31V25.08H92.41c.83,0,3.21,1.64,3.21,4.73V40.13h9.11V27.27c0-3.28-3.61-5.79-3.61-5.79s4-2,4.23-8.15C105.72,2.8,99.35,1.69,96.73,1.74Zm45.46,28.15c-.84,1.22-3.76,2.53-12.54,2.4-8.37-.12-10.26-.6-10.66-2V1.57h-9.07V30.41c.5,10.87,12,11.13,12,11.13s6.58-.16,17.09-.16c10.26,0,12-7.52,12.21-11V1.57h-9.08Z"/>
                    </svg>
                </div>
                <div>
                    <div class="title datk">
                        date<div class="titleline width75"></div>
                    </div>
                    <div class="subtitle">Wed <span class="breakline">12:57:30</span></div>
                </div>
            </div>
            <div class="items">
                <div>
                    <div class="title datk">site<div class="titleline width75"></div>
                    </div>
                    <div class="subtitle">Taiwan</div>
                </div>
                <div>
                    <div class="title datk">location<div class="titleline"></div>
                    </div>
                    <div class="subtitle">宏遠興業台南廠</div>
                </div>
            </div>
            <div class="items">
                <div>
                    <div class="title datk">no. of labors<div class="titleline width45"></div>
                    </div>
                    <div class="subtitle">9</div>
                </div>
                <div>
                    <div class="title datk">work hours<div class="titleline width50"></div>
                    </div>
                    <div class="subtitle">8</div>
                </div>
            </div>
            <div class="items">
                <div>
                    <div class="title datk">line<div class="titleline width70"></div>
                    </div>
                    <div class="subtitle">口罩 IoT 生產線 A</div>
                </div>
                <div>
                    <div class="title datk">PO<div class="titleline width75"></div>
                    </div>
                    <div class="subtitle">SS20A5007</div>
                </div>
            </div>
            <div class="items">
                <div>
                    <div class="title datk">supervisor<div class="titleline width45"></div>
                    </div>
                    <div class="subtitle">Chris Lin</div>
                </div>
                <div>
                    <div class="title datk">depulty supervisor<div class="titleline width20"></div>
                    </div>
                    <div class="subtitle">Jack Chou</div>
                </div>
            </div>
            <div class="items items2">
                <div class="width50">
                    <div class="title datk">shift target</div>
                    <div class="impnb">1500</div>
                </div>
                <div class="width50">
                    <div class="title datk">completed</div>
                    <div class="single-chart">
                        <svg viewBox="0 0 36 36" class="circular-chart color">
                            <path class="circle-bg" d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path class="circle" :stroke-dasharray="process_round_total_count" d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <text x="18" y="15" class="percentage">{{process_total_count}}</text>
                            <text x="18" y="26" class="percentage">{{process_round_total_count}}%</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="ctblock">
            <div class="block width74">
                <div class="">
                    <div class="mb20 labels">
                        <span class="fontarial fontwt">COMPLETE 產 出</span>
                        <div class="line gn"></div>
                        <span class="fontarial fontwt">TARGET</span>
                        <div class="line org"></div>
                        <span class="float-right">
                            <span class="title datk">STYLE</span>
                            <span class="fontarial fontwt">SS20C51057</span>
                        </span>
                    </div>
                    <div class="canvas_box">
                        <div>OP COUNT 各工序產出</div>
                        <MyChart mychart_id="myChart" />
                    </div>
                    <span class="chartCircleBox">
                        <ChartCircleBox :itemState="item_state" />
                    </span>
                </div>
                <div class="chart-block">
                    <div class="">PROCESS COUNT 製程合計產出</div>
                    <div class="canvas_box_2">
                        <MyChart mychart_id="myChart2" />
                    </div>
                    <div class="">WIP 製程在製</div>
                    <div class="canvas_box_2">
                        <MyChart mychart_id="myChart3" />
                    </div>
                </div>
                <div class="chart-block">
                    <div class="mb20 labels">
                        <span class="fontarial fontwt">COMPLETE 產出</span>
                        <div class="line gn"></div>
                        <span class="fontarial fontwt">TARGET 目標</span>
                        <div class="line org"></div>
                        <span class="float-right">
                                <span class="title datk">STYLE</span>
                                <span class="fontarial fontwt">SS20C51057</span>
                            </span>
                    </div>
                    <div class="">Shift Target Trace 班別生產達成趨勢</div>
                    <div class="canvas_box_3">
                        <MyChart mychart_id="myChart4" />
                    </div>
                </div>
            </div>
            <div class="block width25">
                <div class="">
                    <table class="table">
                        <caption>PRODUCTIVITY @NOW 即時目標達成</caption>
                        <thead>

                        <tr>
                            <th>PROC</th>
                            <th>TARGET</th>
                            <th>@STD</th>
                            <th>ACT</th>
                            <th>P %</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>P1</td>
                            <td>1500</td>
                            <td>{{std[0]}}</td>
                            <td>{{process_total[0]}}</td>
                            <td><StyleColor :process_percent="Math.round(process_total[0]/std[0]*100)" /></td>
                        </tr>
                        <tr>
                            <td>P2</td>
                            <td>1500</td>
                            <td>{{std[1]}}</td>
                            <td>{{process_total[1]}}</td>
                            <td><StyleColor :process_percent="Math.round(process_total[1]/std[1]*100)" /></td>
                        </tr>
                        <tr>
                            <td>P3</td>
                            <td>1500</td>
                            <td>{{std[2]}}</td>
                            <td>{{process_total[2]}}</td>
                            <td><StyleColor :process_percent="Math.round(process_total[2]/std[2]*100)" /></td>
                        </tr>
                        <tr>
                            <td>P4</td>
                            <td>1500</td>
                            <td>{{std[3]}}</td>
                            <td>{{process_total[3]}}</td>
                            <td><StyleColor :process_percent="Math.round(process_total[3]/std[3]*100)" /></td>
                        </tr>
                        <tr>
                            <td>P5</td>
                            <td>1500</td>
                            <td>{{std[4]}}</td>
                            <td>{{process_total[4]}}</td>
                            <td><StyleColor :process_percent="Math.round(process_total[4]/std[4]*100)" /></td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        </tbody>
                    </table>
                    <div class="ctblock borderbtm1 pdb20">
                        <div class="fontarial eff width40">PRODUCTIVITY <br> @NOW 產線即時目標達成</div>
                        <div class="width30 impnb">{{Math.round(process_total[4]/std[4]*100)}}%</div>
                        <div class="width30 single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart color">
                                <path class="circle-bg" d="M18 2.0845
                                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path class="circle" :stroke-dasharray="Math.round(process_total[4]/std[4]*100)" d="M18 2.0845
                                                                        a 15.9155 15.9155 0 0 1 0 31.831
                                                                        a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <table class="table align-left">
                            <tbody>
                            <tr>
                                <td colspan="2">PROCESS ID & DESCRIPTION</td>
                            </tr>
                            <tr>
                                <td>P1</td>
                                <td>刀車裁口罩一圈(弧19+18+19+18cm)*1 <br> Cutting a circle of mask</td>
                            </tr>
                            <tr>
                                <td>P2</td>
                                <td>固定3摺子兩邊(直10cm)2*1 <br> Fixing 3-fold on both sides </td>
                            </tr>
                            <tr>
                                <td>P3</td>
                                <td>喇叭滾口罩上下(直19cm)*1 <br> Horn-rolling mask up and down </td>
                            </tr>
                            <tr>
                                <td>P4</td>
                                <td>車滾條於口罩兩邊(直10cm)2*1 <br> Sewing roll-slip on both sides </td>
                            </tr>
                            <tr>
                                <td>P5</td>
                                <td>三折光車口罩兩邊(直10cm)2*1(夾車鬆緊帶) <br> Trifold & sewing mask on both sides </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="width30 mtb20 inline">
                          <svg viewBox="0 0 251.97 41.54" fill="#fa461e">
                            <path class="cls-1" d="M243.77,1.79H214.6c-7.75.61-8.34,8-8.38,9.52L206.17,40H215V25h28.08V40h8.83L252,11.31C251.71,2,244.66,1.78,243.77,1.79Zm-.68,14.53H215V11.39a2.33,2.33,0,0,1,1.22-1.54h26a2.39,2.39,0,0,1,.85,1.63Zm-45,4.38s2.81-2.08,2.56-9.76c-.29-8.63-8.54-9.7-11.89-9.78l-31.11-.09v9.2H187.8c1,.16,3.29.73,3.29,2.59,0,2.69-1.58,3.26-2.51,3.36v-.06h-31.1V40.45l31.1-.08c2.56,0,11,0,12.15-10C201.52,23.33,198.1,20.7,198.1,20.7Zm-9.59,10.55H166.13V25.4H188s2.83-.29,2.83,3.13A2.73,2.73,0,0,1,188.51,31.25ZM35,16.93,9.26,16.78s-1.57-1-1.41-3.77a3.35,3.35,0,0,1,2-3.13H39.67V1.17H7.37S.36,1.87,0,13.64C-.31,24.3,6.28,25.08,6.28,25.08H28.54s3.76-.78,3.6,3.45c-.12,3.29-2.66,3.29-2.66,3.29H.32v8.94h31S42.1,42.09,42.1,27.66C42.1,18.89,35,16.93,35,16.93ZM46.56,40.44h8.79V15.83H46.56ZM51.43,0a5.65,5.65,0,1,0,5.64,5.64A5.65,5.65,0,0,0,51.43,0Zm45.3,1.74v0h-35V10.5H93.22a2.81,2.81,0,0,1,1.79,3,3,3,0,0,1-2.83,2.82H61.93V40.13h8.31V25.08H92.41c.83,0,3.21,1.64,3.21,4.73V40.13h9.11V27.27c0-3.28-3.61-5.79-3.61-5.79s4-2,4.23-8.15C105.72,2.8,99.35,1.69,96.73,1.74Zm45.46,28.15c-.84,1.22-3.76,2.53-12.54,2.4-8.37-.12-10.26-.6-10.66-2V1.57h-9.07V30.41c.5,10.87,12,11.13,12,11.13s6.58-.16,17.09-.16c10.26,0,12-7.52,12.21-11V1.57h-9.08Z"/>
                          </svg>
                        </div>
                        <span class="sublogotext">KAULIN MFG. CO., LTD.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<style scoped>
    /*! purgecss start ignore */
    body.dark {
  color: #fff;
}
.body {
    background-color: #1a114e;
    padding: 24px;
}
/* .width15 {
  width: 15% !important;
} */
.width20 {
  width: 20% !important;
}
.width25 {
  width: 25% !important;
}
/* .width28 {
  width: 28% !important;
} */
.width30 {
  width: 30% !important;
}
.width40 {
  width: 40% !important;
}
.width45 {
  width: 45% !important;
}
.width50 {
  width: 50% !important;
}
/* .width65 {
  width: 65% !important;
} */
.width70 {
  width: 70% !important;
}
.width74 {
  width: 74% !important;
}
.width75 {
  width: 75% !important;
}
/* .width90 {
  width: 90% !important;
} */
/* .width900p {
  width: 900px;
} */
.float-right {
  float: right;
}
/* .mr1 {
  margin-right: 1vw;
} */
.mb20 {
  margin-bottom: 20px;
}
.mtb20 {
  margin: 20px 0;
}
.pdb20 {
  padding-bottom: 20px;
}

.borderbtm1 {
  border-bottom: 1px solid #000;
}
.inline {
  display: inline-block;
}
.mainlogo {
  min-height: 45px;
  margin-top: 13px;
}
.mainlogo img {
  width: 100%;
}
.sublogotext {
  vertical-align: text-top;
  display: inline-block;
  margin-left: 10px;
}
/*font*/
.fontarial {
  font-family: Arial, Helvetica, sans-serif;
}
/* .fontimp {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
} */
.impnb {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #fb7478;
  font-size: 2.75em;
  margin-top: 15px;
  text-align: center;
}
.eff {
  font-size: 1em;
  font-weight: 600;
  margin-top: 20px;
}
.fontwt {
  font-weight: 600;
}
/*跑馬燈*/
/* marquee {
  width: 100%;
  font-size: 50px;
  line-height: 72px;
  position: fixed;
  background: rgb(0, 0, 0, 0.75);
  color: #FFF;
  z-index: 10;
} */
/*font end*/
/*頁頭*/
.header {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  flex-direction: row;
  border: 1px solid #6761cd;
  border-radius: 10px;
  background: #1a114e;
  padding: 12px;
}
.items {
  width: 20%;
}
.items2 {
  display: flex;
  text-align: center;
}
.item {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}
.title {
  text-transform: uppercase;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 1em;
  color: #fff;
  margin-top: 12px;
  position: relative;
}
.subtitle {
  font-family: Arail, sans-serif;
  color: #fff;
  font-weight: 600;
  font-size: 1.25em;
}
.titleline {
  display: inline-block;
  height: 5px;
  border-top: 1px solid #fff;
  margin-left: 5px;
  width: 60%;
}
/*圓形圖表*/
svg:not(:root) {
  overflow: initial;
}
/* .flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
} */
.single-chart {
  width: 100%;
  justify-content: space-around;
}
.circular-chart {
  max-height: 80px;
  margin-top: 8px;
}
.circle-bg {
  fill: none;
  stroke: #fff;
  stroke-width: 5;
}
.circle {
  fill: none;
  stroke-width: 5;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}
@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
.circular-chart.color .circle {
  stroke: #fb7478;
}
.percentage {
    fill: #fff;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
}
.percentage.numbers {
    color: #fff;
}
/*圓形圖形End*/
/*中間區塊*/
.ctblock {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
}
.block {
    border: 1px solid #6761cd;
    border-radius: 10px;
    background: #1a114e;
    margin: 12px 0 0 0;
    padding: 24px;
}
.chartCircleBox {
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  width: 62vw;
  margin-left: 36px;
  background: #1a114e;
  border-radius: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 4vw;
  padding: 15px 0;
  border: 1px solid #6761cd;
}
.chartCircleBox span {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .CircleBg_gn {
  background: #29c28c;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  border: 2px solid #fff;
  -webkit-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
} */
/* .CircleBg_ltorg {
  background: #f9bc3b;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  border: 2px solid #fff;
  -webkit-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
} */
/* .CircleBg_rd {
  background: #ff0404;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  border: 2px solid #fff;
  -webkit-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  position: relative;
}
.CircleBg_rd .error{
  position: relative;
  font-size: 12px;
  bottom: -45px;
  left: -10px;
  color: #ff0404;
} */
/* .CircleBg_ltred {
  background: #fb7478;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  border: 2px solid #fff;
  -webkit-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 1);
} */
.labels span{
  margin-left: 10px;
}
.labels div{
  margin-right: 30px;
}
.line {
  display: inline-block;
  height: 5px;
  margin-left: 5px;
  width: 4%;
}
/* .line.gn {
  border-top: 2px solid #29c28c;
}
.line.org {
  border-top: 2px solid #f68944;
}
.line.ltyl {
  border-top: 2px solid #f6f6c4;
}
.line.ltorg {
  border-top: 2px solid #f9bc3b;
}
.line.dkbl {
  border-top: 2px solid #103a50;
} */

/*中間區塊end*/
/*右方table*/
caption {
    background: #009da4;
    color: #fff;
    text-align: center;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 0;
  border-top: 0;
  line-height: 1.8em;
  color: #5c5c5c;
}
table.table {
    background: #1a114e;
    text-align: center;
    border-collapse: collapse;
    font-family: "Noto Sans TC", sans-serif;
    border: 1px solid #b2b2b2;
}

table.table td,
table.table th {
  border: none;
  padding: 3px 2px;
  text-align: center;
}
table.table tbody td {
  font-size: 1em;
  font-family: "Noto Sans TC", sans-serif;
}
table.table tr:nth-child(even) {
  background: #f5f5f5;
}
table.table thead {
    background: #1a114e;
    border-bottom: 2px solid #6761cd;
}
table.table thead th {
  font-size: 1em;
  color: #fff;
}
.table span {
  border-radius: 10px;
  padding: 0 20px;
  margin: 5px;
  color: #fff;
}
table.table.align-left tr td:nth-child(1) {
  width: 10%;
  text-align: left;
  padding-left: 5px;
}
table.table.align-left tr td:nth-child(2) {
  text-align: left;
}
/* .fontgy {
    color: #fff !important;
}
.fontwh {
  color: #fff !important;
}
.gray {
  background: #b2b2b2;
}
.green {
  background: #29c28c;
}
.ltgreen {
  background: #75d1b8;
}
.yellowgn {
  background: #d0d87b;
}
.ltorange {
  background: #f9bc3b;
}
.orange {
  background: #f68944;
}
.ltred {
  background: #fb7478;
}
.ltyellow {
  background: #f6f6c4;
}
.dkblue {
  background: #103a50;
} */
.chart-block {
  width: 50%; 
  /* display: inline-block;  */
  float: left;
}
@media (max-width: 1024px) {
  .mainlogo {
    min-height: 35px;
    margin-top: 15px;
  }
  .eff {
    font-size: 1em;
  }
  .impnb {
    font-size: 2em;
  }
  .titleline {
    width: 45%;
  }
  .titleline.width20 {
    width: 0 !important;
  }
  .titleline.width45 {
    width: 25% !important;
  }
  .titleline.width50 {
    width: 30% !important;
  }
  .titleline.width70 {
    width: 65% !important;
  }
  .titleline.width75 {
    width: 70% !important;
  }
  .subtitle {
    font-size: 0.9em;
  }
  .subtitle span {
    display: block;
  }
  .chartCircleBox span {
    width: 8.15%;
  }
  .block {
    padding: 12px;
  }
  .table span {
    padding: 0 8px;
  }
  table.table thead {
    font-size: 0.8em;
  }
  .sublogotext {
    font-size: 0.87em;
  }
}

@media (max-width: 1920px) {
  .canvas_box {
    position: relative;
    margin: auto;
    height: 14vh;
    width: 65vw;
  }
  .canvas_box_2 {
    position: relative;
    margin: auto;
    height: 20vh;
    width: 100%;
    margin-bottom: 0.5vh;
  }
  .canvas_box_3 {
    position: relative;
    margin: auto;
    height: 36vh;
    width: 100%;
  }
  .chartCircleBox {
    width: 63.5vw;
    margin-left: 4vw;
  }
}
@media (max-width: 1366px) {
  .canvas_box {
    height: 14vh;
  }
  .canvas_box_2 {
    height: 18vh;
  }
  .canvas_box_3 {
    height: 34vh;
  }
  .chartCircleBox {
    width: 62.5vw;
    margin-left: 4vw;
  }
}
@media (max-width: 1024px) {
  .canvas_box {
    height: 14vh;
  }
  .canvas_box_2 {
    height: 18vh;
  }
  .canvas_box_3 {
    height: 34vh;
  }
  .chartCircleBox {
    width: 61.5vw;
    margin-left: 5vw;
  }
}
.dark .canvas_box div {
  color: #fff;
}
.dark table.table tbody td {
  color: #fff;
}
.dark table.table tr:nth-child(even) {
  background: #2b2b69;
}

    /*  */
    .body{
        background-color: #1a114e;
    }
    table{
        width: 100%;

    }
     .canvas_box{
        /* 這裡 */
        height: 25vh;
    }
    .chartCircleBox{
        justify-content: space-evenly;
        width: calc( 66vw - 10px);
        margin-left: 18px;
        margin-top: 20px;
    }
</style>