<script setup>
    import {ref} from 'vue'
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
        //全選
        const isAllRead=ref(false)
        const isAllWrite=ref(false)
</script>


<template>
    <h1 class="mb-8 sm:mb-4 text-4xl text-gray-600">生產線設定</h1>  
    <div class="w-full md:w-full md:shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                    <svg class="stroke-current stroke-2 w-7 h-7 text-blue-title-text" fill="#d9edf7" viewBox="0 0 44 44">
                    <path d="M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z" class="line"></path>
                </svg>
                <span class="ml-1">使用者權限設定</span>
            </span>
        </div>
        <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm shadow md:shadow-none">
            <form action="">
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="w-1/3 py-2 border">使用者名稱</th>
                            <th class="border">
                                <div class="flex items-center justify-center">
                                    <div class="flex items-center justify-center w-8 h-8 bg-gray-300 rounded">
                                        <input type="checkbox" id="allRead" class="w-1/2 h-1/2" v-model="isAllRead">
                                    </div>
                                    <label for="allRead">可讀</label>
                                </div>
                            </th>
                            <th class="border">
                                <div class="flex items-center justify-center">
                                    <div class="flex items-center justify-center w-8 h-8 bg-gray-300 rounded">
                                        <input type="checkbox" id="allWrite" class="w-1/2 h-1/2" v-model="isAllWrite">
                                    </div>
                                    <label for="allWrite">可寫</label>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(line,index) in select_production_lines" :key="line+index">
                            <td class="text-center py-2 border">{{line.description}}</td>
                            <td class="border">
                                <div class="flex items-center justify-center bg-blue-300 w-8 h-8 m-auto rounded">
                                    <input type="checkbox" class=" w-1/2 h-1/2" :checked="isAllRead">
                                </div>
                            </td>
                            <td class="border">
                                <div class="flex items-center justify-center bg-blue-basic w-8 h-8 m-auto rounded">
                                    <input type="checkbox" class=" w-1/2 h-1/2" :checked="isAllWrite">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-5">
                    <button type="button" class="mr-2 btn bg-blue-basic text-white">完成</button>
                    <router-link to="/production_line_set">
                        <button type="button" class="btn bg-gray-300 text-black" >返回</button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>   