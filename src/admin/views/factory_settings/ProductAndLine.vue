<script setup>
    import {ref,computed} from 'vue'
    const props=defineProps({
        productID:Number
    })
    //生產線
    const select_production_lines=ref([
        {title:'123',description:'123'},
        {title:'3F Demo',description:'3F Demo'},
        {title:'China App',description:'China App'},
        {title:'Demo_F',description:'Demo_F'},
        {title:'Line_01',description:'Line_01'},
        {title:'oldMachineTest',description:'oldMachineTest'},
        {title:'Test02',description:'Test02'},
        {title:'14Test',description:'14Test'},
        {title:'Addidas',description:'Addidas'},
        {title:'Demo',description:'Demo'},
        {title:'Dwe',description:'Dwe'},
        {title:'Line01',description:'Line01'},
        {title:'Rebook',description:'Rebook'},
        {title:'Vang',description:'123'},
        {title:'2F Demo',description:'2F Demo'},
        {title:'Btest',description:'Btest'},
        {title:'Demo2017',description:'Demo2017'},
        {title:'HSR',description:'HSR'},
        {title:'Nike01',description:'Nike01'},
        {title:'Test',description:'Test'},
        {title:'壓模',description:'壓模'},
    ])
    //用生產線id找出相對應 機台
    const machine_set_lists=ref([
        {main:'Machine04',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine03',currency:'Nike03',product:'Adidas09',cmp:'cmp2',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine01',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine08',currency:'Nike07',product:'Adidas02',cmp:'cmp13',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine06',currency:'Adidas01',product:'Nike2',cmp:'cmp8',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine07',currency:'Adidas03',product:'Adidas02',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine010',currency:'Adidas01',product:'Nike6',cmp:'cmp18',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine05',currency:'Nike06',product:'Nike6',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine012',currency:'Adidas01',product:'Nike2',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
    ])

    //用產品id找出相對應的製程
    const getProcess = ref([
        {title:'製程1',std:10.5,pin:100,upperlimit:2,lowerlimit:3,cut:1,multiple:1,description:'以切線計'},
        {title:'製程2',std:18.6,pin:152,upperlimit:2,lowerlimit:1,cut:1,multiple:1,description:'以針數計'},
        {title:'製程3',std:20.4,pin:32,upperlimit:5,lowerlimit:4,cut:1,multiple:1,description:'標準計算'},
        {title:'製程4',std:2.1,pin:100,upperlimit:50,lowerlimit:50,cut:1,multiple:1,description:'以手動計'},
        {title:'製程5',std:0.6,pin:1,upperlimit:1,lowerlimit:1,cut:1,multiple:1,description:'標準計算'},
    ])
    //產品
    const product_set_lists=ref([
        {title:'Nike',description:'標準',number:9},
        {title:'Adidas2',description:'8號',number:6},
        {title:'Nike2',description:'切線',number:10},
        {title:'Adidas',description:'9號',number:7},
        {title:'Puma',description:'標準',number:9},
        {title:'2020',description:'切線',number:9},
        {title:'切',description:'8號',number:9}
    ])

    const selectedIndex = ref([])
    //index = 機台.length
    // const total = ref(['機台title','{製程3...}'])
    const total = ref(machine_set_lists.value.map((item,index)=>{
        return item=[item.main,{}]
    }))
    
    const onChange = function(index){
        return total.value[index].splice(1, 1, getProcess.value[selectedIndex.value[index]])
    } 
   
</script>


<template>
    <h1 class="mb-8 sm:mb-4 text-4xl text-gray-600">生產線-產品設定</h1>
    <div class="w-full shadow">
        <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                <i class="pe-7s-network pe-lg pe-va"></i>
                <span class="ml-3 mr-1">新增 生產線-產品</span>
            </span>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <div class="mb-5 float-right">
                <router-link to="/production_line_set" class="mr-2">
                    <span class="btn bg-blue-basic text-white">新增生產線</span>
                </router-link>
                <router-link  to="/product_set">
                    <span class="btn bg-blue-basic text-white">新增產品</span>
                </router-link>
            </div>
            <form action="">
                <div class="mb-3 flex w-1/2 md:w-3/4 sm:w-full">
                    <!-- 生產線 -->
                    <div class="w-16 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                        <div>生產線</div>
                    </div>
                    <div class="w-full ">
                        <select class="custom-select w-full text-sm h-9 text-gray-500 border-2 rounded-r focus:outline-none focus:border-blue-basic">
                            <option v-for="(item,index) in select_production_lines" :key="item+index">
                                {{item.description}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 flex w-1/2 md:w-3/4 sm:w-full">
                    <!-- 產品 -->
                    <div class="w-16 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                        <div>產品</div>
                    </div>
                    <div class="w-full">
                        <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded-r focus:outline-none focus:border-blue-basic">
                            <option v-for="(item,index) in product_set_lists" :key="item+index">
                                {{item.title}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 flex w-1/2 md:w-3/4 sm:w-full">
                    <!-- 產品 -->
                    <div class="w-40 sm:w-48 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                        <div>標準產能(8小時)</div>
                    </div>
                    <div class="w-full">
                        <input type="number" class="myInput w-full rounded-l-none">
                    </div>
                </div>
                <div class="w-full">
                    <!--  -->
                    <div v-for="(single,index) in total" :key="'total'+index" class="p-1 flex lg:block mb-5 border border-red-200 rounded shadow">
                        <div class="flex mr-5 lg:mr-0 lg:mb-2 w-7/12 lg:w-full">
                            <div class="flex mr-2 lg:mr-5 sm:mr-2">
                                <div class="w-16 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div>機台</div>
                                </div>
                                <div>
                                    <input type="text" :value="single[0]"  class="myInput w-42 lg:w-full sm:px-0 rounded-l-none" readonly>
                                </div>
                            </div>
                            <div class="flex w-full">
                                <div class="w-16 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div>製程</div>
                                </div>
                                <div class="w-full">
                                    <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedIndex[index]" @change="onChange(index)">
                                        <option v-for="(item,index_procsss) in getProcess" :key="'select'+index_procsss" :value="index_procsss">
                                            {{item.title}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between lg:justify-start w-5/12 lg:w-full">
                            <div class="flex">
                                <div class="w-16 sm:w-8 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div>針數</div>
                                </div>
                                <div>
                                    <input type="text" :value="single[1].pin"  class="myInput w-10 md:w-8 sm:w-8 rounded-l-none" readonly>
                                </div>
                            </div>
                            <div class="flex lg:mx-2 sm:mx-1">
                                <div class="w-8 sm:w-6 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div> + </div>
                                </div>
                                <div>
                                    <input type="text" :value="single[1].upperlimit"  class="myInput w-10 md:w-8 sm:w-8 rounded-l-none" readonly>
                                </div>
                            </div>
                            <div class="flex lg:mr-2 sm:mr-1">
                                <div class="w-8 sm:w-6 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div>-</div>
                                </div>
                                <div>
                                    <input type="text" :value="single[1].lowerlimit"  class="myInput w-10 md:w-8 sm:w-8 rounded-l-none" readonly>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="w-16 sm:w-8 h-9 flex items-center justify-center bg-gray-300 rounded-l">
                                    <div>切線</div>
                                </div>
                                <div>
                                    <input type="text" :value="single[1].cut"  class="myInput w-10 md:w-8 sm:w-8  rounded-l-none" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn bg-blue-basic text-white">儲存</button>
            </form>
        </div>
    </div>
</template>