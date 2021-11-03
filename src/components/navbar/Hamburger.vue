<script setup>
    import {computed} from 'vue'
    import {useRouter} from 'vue-router'
    const currentRouter =computed(() =>{
        return useRouter().currentRoute.value.path
    })
</script>

<template>
    <ul>
        <router-link to="/" class="text-blue-basic text-sm hover:text-blue-basic ">
            <li class="block w-full h-12 border-b border-solid py-3 px-4 hover:bg-gray-200" :class="{'bg-blue-basic text-white':currentRouter=='/'}">
                <i class="pe-7s-display1 pe-2x pe-va pe-fw mr-2.5"></i>首頁
            </li>
        </router-link> 
        <router-link to="/productivity" class="text-blue-basic text-sm hover:text-blue-basic">
            <li class="block w-full h-12 border-b border-solid py-3 px-4 hover:bg-gray-200" :class="{'bg-blue-basic text-white':currentRouter=='/productivity'}">
                <i class="pe-7s-graph3 pe-2x pe-va pe-fw  mr-2.5"></i>產線平衡
            </li>
        </router-link>
        <router-link to="/machine_status" class="text-blue-basic text-sm hover:text-blue-basic">
            <li class="block w-full h-12 border-b border-solid py-3 px-4 hover:bg-gray-200" :class="{'bg-blue-basic text-white':currentRouter=='/machine_status'}">
                <i class="pe-7s-plugin pe-2x pe-va pe-fw mr-2.5"></i>機器狀況
            </li>
        </router-link>
        <router-link to="/efficiency" class="text-blue-basic text-sm hover:text-blue-basic">
            <li class="block w-full h-12 border-b border-solid py-3 px-4 hover:bg-gray-200" :class="{'bg-blue-basic text-white':currentRouter=='/efficiency'}">
                <i class="pe-7s-target pe-2x pe-va pe-fw mr-2.5"></i>產線效率
            </li>
        </router-link>
        <a href="/login" class="text-blue-basic text-sm hover:text-blue-basic">
            <li class="block w-full h-12 border-b border-solid py-3 px-4 hover:bg-gray-200">
                <i class="pe-7s-cloud-download pe-2x pe-va pe-fw mr-2.5"></i>登出
            </li>
        </a>  
        <div class="hidden md:block w-full h-10 sm:h-14  py-3 sm:py-2 px-4 cursor-text text-blue-basic bg-blue-400 bg-opacity-25">
            <p class="md:hidden sm:block">PMS ADMIN</p>
            <sup>Design by ISM 版本1.5.6</sup>
        </div> 
    </ul>
</template>