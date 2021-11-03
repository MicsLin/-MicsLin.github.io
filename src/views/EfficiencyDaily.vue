<script setup>
    import {ref} from 'vue'
    import HighchartsEfficiency from '../components/efficiency/HighchartsEfficiency.vue'
    const props = defineProps({
        filterResult:Array
    })

    
</script>

<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">產線效率表</h1>
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div class="flex items-center">
                <div class="flex items-center mr-5 sm:mr-2 text-xl">
                    <span class="sm:hidden">
                        <i class="pe-7s-target pe-lg pe-va"></i>
                    </span>
                    <span class="ml-3 sm:ml-0">產線效率</span>
                </div>
                <router-link to="/efficiency">
                    <button class="btn bg-blue-basic text-white">回上頁</button>
                </router-link>
            </div>  
            <!-- <button class=" btn bg-blue-basic text-white">列印</button> -->
        </div>
        <div class="py-6 sm:py-4 text-gray-500 text-sm">
            <!-- 圖 -->
            <HighchartsEfficiency />
            <!-- 點選圖片 onclick(參數id) 改變 data -->
            <!-- 用data綁定 圓餅圖 -->
        </div>
    </div>
</template>