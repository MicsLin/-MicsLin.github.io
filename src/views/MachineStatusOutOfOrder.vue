<script setup>
    import MachineCardOutOfOrder from '../components/machine_status/MachineCardOutOfOrder.vue'
    import {ref} from 'vue'
    const array=ref([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
</script>
<template>
     <div class="shadow">
        <div class="flex md:block items-center h-16 md:h-32  md:pt-5 pl-8 sm:pl-4 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div class="md:mb-4 sm:mb-0 sm:flex sm:justify-between">
                <span class="flex items-center">機器狀態</span> 
                <div class="hidden md:text-sm sm:block">
                   <router-link to="/machine_status_out_of_order">
                        <button class="md:mb-2 border border-red-500 hover:border-opacity-50 bg-red-500 hover:bg-opacity-70 text-white rounded px-5 py-2.5">
                            <i class="pe-7s-tools pe-lg pe-fw pe-va"></i>故障<span class="sm:hidden">列表</span>(9)
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="m-auto  md:m-0 md:flex md:flex-wrap md:text-sm">
                <router-link to="/machine_status">
                    <button class="md:mb-2 sm:mr-2 border border-blue-500 hover:border-opacity-80  hover:bg-blue-500 text-blue-500 hover:text-white rounded px-5 py-2.5">
                        <i class="pe-7s-note2 pe-lg pe-fw pe-va"></i>全部<span class="sm:hidden">列表</span>(50)
                    </button>
                </router-link>
                
                <router-link to="/machine_status_out_of_order">
                    <button class="sm:hidden mx-10 md:mx-8 sm:mx-2 border border-red-500 hover:border-opacity-50 bg-red-500 hover:bg-opacity-70 text-white rounded px-5 py-2.5">
                        <i class="pe-7s-tools pe-lg pe-fw pe-va"></i>故障<span class="sm:hidden">列表</span>(9)
                    </button>
                </router-link>
                <router-link to="/machine_status_warning">
                   <button  class="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded px-5 py-2.5">
                       <i class="pe-7s-attention pe-lg pe-fw pe-va"></i>警示<span class="sm:hidden">列表</span>(30)
                   </button>
                </router-link>
            </div>      
        </div>
        <div class="flex flex-wrap w-full pt-5 text-sm text-white">
            <div class="w-3/12 xl:w-4/12 md:w-6/12 sm:w-full mb-7" v-for="(single,index) in array" :key="index">
                <div class="w-72 lg:w-60 md:w-72 h-52 m-auto round bg-red-100 shadow" >
                    <MachineCardOutOfOrder />
                </div>
            </div>
        </div>
    </div>          
</template>

