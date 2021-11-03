<script setup>
    const btnAdd = function(){
        console.log('成功');
    }
</script>
<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">員工設定</h1>
    <div class="w-7/12 lg:w-9/12 sm:w-full shadow">
        <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-door-lock pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">匯入</span>
                </span>
            </div>
            
        </div>
        <form class="py-6 pl-8 pr-8 lg:pr-6 bg-white">
            <div class="flex md:block items-center pt-3 md:pt-2 pl-4 mb-10 md:mb-5 border-t">
                <label class="w-full">請選擇上傳檔案:</label>
                <input type="file" class="w-full md:mt-3">
            </div>
            <div class="flex items-center">
                <button class="btn bg-blue-basic text-white" @click="btnAdd">更新</button>
                <router-link to="/employee_settings">
                    <button class="mx-2 sm:mx-1 bg-gray-300 hover:bg-opacity-70 text-black text-sm px-4 py-2 rounded focus:outline-none">返回</button>
                </router-link>
            </div>
        </form>
    </div>
    <div class="bg-gray-100 w-full h-72"></div>
</template>