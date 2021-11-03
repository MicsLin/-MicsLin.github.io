<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const productionline_lists = ref([
        //   一堆生產線
        {
            title:'我是生產線1',
            description:{
                current_product:'Adidas K913(標準)',
                other_products:[
                    {title:'',description:'Adidas K913(標準)'},
                    {title:'',description:'Nike'},
                    {title:'',description:'Puma'},
                ],
                main_machine:'bb022-',
                other_machines:['Machine0497','Machine5566',"kjk"]
            }
        },
        {
            title:'我是生產線2',
            description:{
                current_product:'Nike',
                other_products:[
                    {title:'',description:'Adidas K913(標準)'},
                    {title:'',description:'Nike'},
                ],
                main_machine:'cc6464-',
                other_machines:['Machine0497','Machine5566',"kjk",'Machine0497','Machine5566',"kjk"]
            }
        },
        {
            title:'我是生產線3',
            description:{
                current_product:'Puma',
                other_products:[
                    {title:'',description:'Nike'},
                    {title:'',description:'Puma'}
                ],
                main_machine:'55688-b',
                other_machines:['Machine0497','Machine5566',"kjk",'Machine0497','Machine5566',"kjk",'Machine0497','Machine5566']
            }
        },
        {
            title:'我是生產線4',
            description:{
                current_product:'Puma',
                other_products:[
                    {title:'',description:'Nike'},
                    {title:'',description:'Puma'}
                ],
                main_machine:'55688-b',
                other_machines:['Machine0497','Machine5566',"kjk",'Machine0497','Machine5566',"kjk",'Machine0497','Machine5566']
            }
        }
    ])
    //新增
    const btnAdd =function(){
        store.commit('onPopupForm','productionLine')
    }

    // 新增/刪除成功
    const isActive = ref(false)
    const showInfo = ref('')
    const btnSave = function(){
        //  alert('新增的項目')
        isActive.value = true
        showInfo.value = '新增成功'
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }

    //測試用 新增的名稱(如果跟資料衝突 要顯示警示)
    const add_producntion_line = ['我是生產線2','我是生產線5','我是生產線3']

    //刪除
    const btnDelete = function(){
        // alert('刪除?')
        isActive.value = true
        showInfo.value = '刪除成功'
    }

</script>


<template>
    <router-link to="/product_line">
        <button class="btn bg-green-btn text-white float-right">產線/產品設定</button>
    </router-link>  
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">生產線設定</h1>
    <!-- 新增 / 刪除 成功 -->
    <div class="flex items-center justify-between mb-8 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow"
        :class="{'hidden':!isActive}">    
        <span>{{showInfo}}</span>
        <span class="flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900" @click="btnClose">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </span>
    </div>
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-note2 pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">生產線清單</span>
                    <span class="relative -top-px">({{productionline_lists.length}})</span>
                </span>
            </div>
            <button type="button" class="btn bg-blue-basic text-white" @click="btnAdd">新增<span class="sm:hidden">生產線</span></button>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <sup class="text-purple-500">--點選以下清單，進入該生產線的修改設定--</sup>
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >生產線</th>
                        <th class="border border-gray-300" >主要機台</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6" >機台總數</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >刪除</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(productionline_list,index) in productionline_lists" :key="index">
                        <td class="border border-gray-300 pl-8 sm:pl-2 py-3">
                             <router-link :to="{name:'LineSetEdit',params:{lineName:productionline_list.title,selectedPR:'暫無資料'}}">
                                <div class="pl-2">{{productionline_list.title}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 pl-8 sm:pl-2">
                            <router-link :to="{name:'LineSetEdit',params:{lineName:productionline_list.title,selectedPR:'暫無資料'}}">
                                <div class="pl-2">{{productionline_list.description.main_machine}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 text-center">
                            <router-link :to="{name:'LineSetEdit',params:{lineName:productionline_list.title,selectedPR:'暫無資料'}}">
                                <div class="pl-2">{{productionline_list.description.other_machines.length}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>               
</template>
