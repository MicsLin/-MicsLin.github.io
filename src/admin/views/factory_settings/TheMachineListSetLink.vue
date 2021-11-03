<script setup>
    import VCalendar from '../../../components/efficiency/VCalendar.vue'
    import {ref} from 'vue'

    const props = defineProps({
        machine:String,
        line:String
    })
    // 操作人員
    const operators = ref([
        {
            value:'',
            description: '小明'
        },
        {
            value:'',
            description: '小王'
        },
        {
            value:'',
            description: '小綠'
        },
        {
            value:'',
            description: '大白'
        },
        {
            value:'',
            description: '大蘿蔔'
        },
        {
            value:'',
            description: '大球'
        }
    ])
    const selectedOperator =ref('大蘿蔔')
    // 新增成功
   // 新增/刪除成功
    const isActive = ref(false)
    const showInfo = ref('')
    const btnSave = function(){
        isActive.value = true
        showInfo.value = '新增成功'
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }
    //更換
    const isSwitch = ref(false)
    const onSwitch = function(){
        return isSwitch.value = !isSwitch.value
    }
    //生產線
    const lines = ref([
        {
            value:'',
            description: 'Nike001'
        },
        {
            value:'',
            description: 'Nike002'
        },
        {
            value:'',
            description: 'Nike003'
        },
        {
            value:'',
            description: 'Nike004'
        },
        {
            value:'',
            description: 'Nike004'
        },
        {
            value:'',
            description: 'Nike005'
        }
    ])
    const selectedLine =ref('Nike002')
    //製程
    const process = ref([
        {
            value:'',
            description: '製程1'
        },
        {
            value:'',
            description: '製程2'
        },
        {
            value:'',
            description: '製程3'
        },
        {
            value:'',
            description: '製程4'
        },
        {
            value:'',
            description: '製程5'
        },
        {
            value:'',
            description: '製程6'
        }
    ])
    const selectedProcess =ref('製程5')
    //產品
    const production = ref('Nike1(標準)')
</script>
<template>
    <h1 class="flex items-center mb-8 sm:mb-4 text-4xl text-gray-600">
        <!-- <p>機台設定:{{machine}}</p> -->
        <p class="flex mr-5 sm:mr-0">
            <p class="sm:mr-3">機台設定 : </p>
            <p class="sm:hidden">Machine0407</p>
        </p>
        <router-link to="/machinelist_set" class="flex">
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">
                <span class="sm:hidden">返回機台清單</span>
                <span class="hidden sm:block">上一頁</span>
            </button>
        </router-link >
    </h1>
    <!-- 新增 / 刪除 成功 -->
    <div class="flex items-center justify-between mb-8 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow"
        :class="{'hidden':!isActive}">    
        <span>{{showInfo}}</span>
        <span class="flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900" @click="btnClose">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </span>
    </div>
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 px-8 sm:px-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-network pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">基本資訊</span>
                </span>
            </div>
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" :class="{'hidden':!isSwitch}" @click="onSwitch">修改設定</button>
        </div>
        <div class="flex justify-between py-1 px-8 sm:px-4 bg-purple-200 text-purple-700 sm:text-sm" :class="{'hidden':isSwitch}">
            <div>
                <span class="text-gray-400">生產線:</span>
                <span class="font-bold">{{props.line}}</span>
            </div>
            <div class="hidden sm:block">
                <span class="text-gray-400">機台:</span>
                <span class="font-bold">Machine0407</span>
            </div>
        </div>
        <!-- switch -->
        <form action="" class="pl-8 pr-4 py-8" :class="{'hidden':isSwitch}">
            <div class="flex mb-5 sm:block">
                <div class="flex items-center w-full sm:mb-5">
                    <label for="brand">廠牌<span class="mx-2">:</span></label>
                    <input type="text" id="brand" class="myInput w-9/12">
                </div>
                <div class="flex items-center w-full">
                    <label for="model">車型<span class="mx-2 pr-8 md:pr-0">:</span></label>
                    <input type="text" id="model" class="myInput w-9/12">
                </div>
            </div>
            <div class="flex mb-5 sm:block">
                <div class="flex items-center w-full sm:mb-5">
                    <label for="numberID">編號<span class="mx-2">:</span></label>
                    <input type="text" id="numberID" class="myInput w-9/12">
                </div>
                <div class="flex items-center w-full">
                    <label for="dateBuy">
                        <span class="md:hidden ">購買日期<span class="mx-2">:</span></span>
                        <span class="hidden md:block ">購入<span class="mx-2">:</span></span>
                    </label>
                    <input type="text" id="dateBuy" class="hidden">
                    <div class="w-9/12 bg-white">
                        <VCalendar />
                    </div>
                </div>
            </div>
            <div class="flex items-center w-full mb-5">
                <label for="operator">操作人員<span class="mx-2">:</span></label>
                <input type="text" id="operator" class="hidden">
                <div class="w-1/3 sm:w-7/12">
                    <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedOperator">
                        <option v-for="(item,index) in operators" :key="index">
                            {{item.description}}
                        </option>
                    </select>
                </div>    
            </div>
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">儲存</button>
        </form>
    </div>
    <div class="mt-5 w-full shadow">
        <div class="flex items-center justify-between h-16 px-8 sm:px-4 bg-blue-title text-lg text-blue-title-text">
            <div class="flex items-center text-xl sm:text-sm">
                <span class="ml-3 mr-1">目前的生產線:</span>
                <span class="ml-3">{{props.line}}</span>
            </div>
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" :class="{'hidden':isSwitch}" @click="onSwitch">修改設定</button>
        </div>
        <!-- switch -->
        <div class="pl-8 pr-4 py-8" :class="{'hidden':!isSwitch}">
            <div class="flex items-center w-full mb-5">
                <label for="operator">生產線<span class="mx-2">:</span></label>
                <input type="text" id="operator" class="hidden">
                <div class="w-1/3 sm:w-7/12">
                    <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedLine">
                        <option v-for="(item,index) in lines" :key="index">
                            {{item.description}}
                        </option>
                    </select>
                </div>    
            </div>
            <form action="">
                <div class="flex sm:block items-center">
                    <div class="flex items-center">
                        <label for="model">產品<span class="mx-2 pr-8 md:pr-0">:</span></label>
                        <input type="text" id="model" class="text-sm h-9 pl-2 appearance-none border-2  rounded focus:outline-none bg-gray-300" :value="production" readonly>
                    </div>
                    <div class="ml-7 sm:ml-0 sm:mt-5 flex items-center">
                        <label for="operator">製程<span class="mx-2">:</span></label>
                        <input type="text" id="operator" class="hidden">
                        <div class="w-48 sm:w-40">
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedProcess">
                                <option v-for="(item,index) in process" :key="index">
                                    {{item.description}}
                                </option>
                            </select>
                        </div> 
                    </div> 
                </div>
                <div class="mt-5">
                    <button class="mr-2 btn bg-yellow-400 text-white">取消</button>
                    <button class="btn bg-blue-basic text-white" @click.prevent="btnSave">儲存</button>
                </div>
            </form>
        </div>
    </div>
</template>