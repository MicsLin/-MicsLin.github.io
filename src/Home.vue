<script setup>
    import HighCharts from'./components/Home/HighCharts.vue'
    import DateTime from './components/Home/DateTime.vue'
</script>

<template>
    <h1 class="flex sm:block pt-8 mb-8 sm:mb-4 text-3xl text-gray-600"><p class="mr-4">即時資訊:</p><p class="font-semibold sm:text-base"><DateTime /></p></h1>
    <div class="w-full shadow">
        <div class="flex sm:block sm:relative items-center justify-between h-16 sm:h-28 pl-8 sm:pl-4 pr-10 sm:pr-4 sm:pt-3 bg-blue-title text-lg text-blue-title-text ">
            <div class="flex sm:block">
                <span class="flex items-center mr-10 sm:mr-1 sm:mb-5">生產線資訊</span>
                <div class="md:relative">
                    <input type="search" class="form-control myInput w-80 md:w-72 sm:w-full " placeholder="輸入機台名稱或生產線名稱" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button type="button" id="button-addon2" class="btn bg-blue-basic text-white md:absolute md:right-0">搜尋</button>
                </div>
            </div>   
            <button type="button" class="btn bg-blue-basic text-white sm:absolute sm:top-2 sm:right-4">顯示全部</button>
        </div>
        <div class="table_padding">
            <HighCharts />
        </div>
    </div>          
</template>