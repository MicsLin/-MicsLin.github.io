<script setup>
    import {ref} from 'vue'
    // 下載資訊
    const isActive = ref(false)
    const Info = ['更新成功','目前已是最新版本']
    const showInfo = ref('')
    const btnSave = function(){
        //  alert('新增的項目')
        isActive.value = true

        //測試用 新增的名稱(如果跟資料衝突 要顯示警示)
        let ran =Math.floor(Math.random()*2)

        showInfo.value = Info[ran]
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }
</script>

<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">版本更新</h1>
    <!-- 新增 / 刪除 成功 -->
    <div class="flex items-center justify-between mb-8 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow"
        :class="{'hidden':!isActive}">    
        <span>
            <i class="pe-7s-flag pe-lg pe-va"></i>
            <span class="ml-2">{{showInfo}}</span> 
        </span>
        <span class="flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900" @click="btnClose">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </span>
    </div>
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="text-xl">版本更新記錄</span>
            </div>
            <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">
                <span class="sm:hidden">下載最新版本</span>
                <span class="hidden sm:block">更新</span>
            </button>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >版本</th>
                        <th class="border border-gray-300" >版本更新內容</th>
                        <th class="border border-gray-300 " >更新時間</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="border border-gray-300 text-center py-3">ISM v-1.5.6</td>
                        <td class="border border-gray-300 text-center">背景顏色更新</td>
                        <td class="border border-gray-300 text-center">2021-10-20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>               
</template>