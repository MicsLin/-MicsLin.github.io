
<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const isActive=ref(false)
    const showInfo = ref('')
    const employees_lists=ref([
        {
            number:'A00001',
            name:'小明',
            factory_area:'湖南',
            department:'针车部',
            production_line:'zhencheA',
            date_of_employment:'2020-01-10'
        },
            {
            number:'A00002',
            name:'LIU 大宝',
            factory_area:'江西',
            department:'开发部	',
            production_line:'zhencheB',
            date_of_employment:'2020-06-01'
        },
            {
            number:'A00003',
            name:'王 大崔',
            factory_area:'sichuang',
            department:'yewu',
            production_line:'针车C',
            date_of_employment:'2020-02-22'
        }
    ])
    const btnSave = function(){
        // isActive.value = true
        // showInfo.value = '新增成功'
        store.commit('onPopupForm','employee')
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }

    //刪除
    const btnDelete = function(){
        // alert('刪除?')
        isActive.value = true
        showInfo.value = '刪除成功'
    }

    //匯出 匯入
    const btnExpore =function(){}
    const btnImport =function(){}
</script>
<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">員工設定</h1>
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
                    <i class="pe-7s-door-lock pe-lg pe-va"></i>
                    <span class="ml-3 mr-1 sm:hidden">員工清單</span>
                </span>
            </div>
            <!-- 匯入 匯出 -->
            <div class="flex">
                <button class="bg-green-btn hover:bg-opacity-70 text-gray-200 text-sm px-4 py-2 rounded focus:outline-none" @click="btnExpore">匯出</button>
                <router-link to="/employee_import">
                    <button class="mx-2 sm:mx-1 bg-green-btn hover:bg-opacity-70 text-gray-200 text-sm px-4 py-2 rounded focus:outline-none" @click="btnImport">匯入</button>
                </router-link>
                <button class="bg-blue-basic hover:bg-opacity-70 text-gray-200 text-sm px-4 py-2 rounded focus:outline-none" @click="btnSave">新增</button>
            </div>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <!-- 搜尋 -->
            <div class="flex items-center justify-between mb-6 sm:mb-4 w-full">
                <div class="flex items-center relative">
                    <span class="sm:hidden">關鍵字搜尋:</span>  
                    <input type="search" class="ml-2 sm:ml-0 form-control myInput w-80 md:w-72 sm:w-auto" placeholder="搜尋">
                    <button type="button" class="absolute right-0 btn bg-blue-basic text-white" @click="btnSave">搜尋</button>   
                </div>
                <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">顯示全部</button> 
            </div>
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >編號</th>
                        <th class="border border-gray-300" >姓名</th>
                        <th class="border border-gray-300" >廠區</th>
                        <th class="border border-gray-300" >部門</th>
                        <th class="border border-gray-300" >生產線</th>
                        <th class="border border-gray-300" >到職日期</th>
                        <th class="border border-gray-300 w-1/12">修改</th>
                        <th class="border border-gray-300 w-1/12">刪除</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(employees_list,index) in employees_lists" :key="index">
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.number}}</td>
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.name}}</td>
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.factory_area}}</td>
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.department}}</td>
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.production_line}}</td>
                        <td class="border border-gray-300 overflow-hidden">{{employees_list.date_of_employment}}</td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-blue-400 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn lg:px-2 md:px-1 bg-blue-400 text-white sm:hidden" @click="btnDelete">修改</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn lg:px-2 md:px-1 bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>               
</template>
