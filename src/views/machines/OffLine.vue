<script setup>
    import TheCardOffLine from '../../components/machine_status/machines/TheCardOffLine.vue'
    import {ref} from 'vue'
    const array=ref([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
</script>

<template>
    <div class="shadow">
        <div class="flex items-center h-16 pl-8 sm:pl-4 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="mr-5">機器狀態</span> 
            <router-link to="machine_status">
                <button class="btn bg-blue-basic text-white">返回產線狀態</button>
            </router-link>
        </div>
        <div class="flex flex-wrap w-full pt-5 text-sm text-white">
            <div class="px-8 xl:px-4 w-full">
                <!-- title -->
                <div class="flex items-center justify-between p-4 mb-2.5 md:mb-0 w-full h-16 rounded-t bg-blue-500 text-lg">
                    <div class="flex items-center">
                        <span class="font-bold">14Test </span>
                        <span class="ml-2 w-8 h-5 leading-5 bg-white text-blue-400 text-sm text-center rounded-2xl font-bold">29</span>
                    </div>
                    <!-- 按鈕 -->
                    <div class="flex items-center md:hidden">
                        <div>
                            <router-link to="/machine_online">
                                <button class="flex items-center px-8 py-1 rounded focus:outline-none bg-green-btn hover:bg-opacity-70">
                                    <i class="pe-7s-cloud-upload pe-lg pe-fw pe-va"></i>
                                    <span>0</span>
                                </button>
                            </router-link>
                        </div>
                        <div class="mx-2">
                            <router-link to="/machine_offline">
                                <button class="flex items-center px-8 py-1 rounded text-gray-600 focus:outline-none bg-gray-300 hover:bg-opacity-70">
                                    <i class="pe-7s-cloud-download pe-lg pe-fw pe-va"></i>
                                    <span>19</span>
                                </button>
                            </router-link>
                        </div>
                        <div class="mr-2">
                           <router-link to="/machine_out_of_order">
                                <button class="flex items-center px-8 py-1 rounded text-white focus:outline-none bg-red-600 hover:bg-opacity-70">
                                    <i class="pe-7s-tools pe-lg pe-fw pe-va"></i>
                                    <span>50</span>
                                </button>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/machine_warning">
                                <button class="flex items-center px-8 py-1 rounded focus:outline-none bg-yellow-400 hover:bg-opacity-70">
                                    <i class="pe-7s-attention pe-lg pe-fw pe-va"></i>
                                    <span>20</span>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- 縮小按鈕 為了RWD-->
                <div class="hidden md:flex">
                    <div class="w-1/4">
                        <router-link to="/machine_online">
                            <div class="py-1.5 w-full text-center bg-green-btn focus:outline-none hover:bg-opacity-70">
                                <i class="pe-7s-cloud-upload pe-lg pe-fw pe-va"></i><span>0</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="w-1/4">
                        <router-link to="/machine_offline">
                            <div class="py-1.5 w-full text-center bg-gray-300 text-black focus:outline-none hover:bg-opacity-70">
                                <i class="pe-7s-cloud-download pe-lg pe-fw pe-va"></i><span>19</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="w-1/4">
                        <router-link to="/machine_out_of_order">
                            <div class="py-1.5 w-full text-center bg-red-600 focus:outline-none hover:bg-opacity-70">
                                <i class="pe-7s-tools pe-lg pe-fw pe-va"></i><span>50</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="w-1/4">
                        <router-link to="/machine_warning">
                            <div class="py-1.5 w-full text-center bg-yellow-400 focus:outline-none hover:bg-opacity-70">
                                <i class="pe-7s-attention pe-lg pe-fw pe-va"></i><span>20</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!-- 內容 -->
                <div class="flex flex-wrap w-full pt-5 text-sm">
                    <div class="w-3/12 xl:w-4/12 lg:w-6/12 sm:w-full mb-7" v-for="(single,index) in array" :key="index">
                        <div class="pb-5 w-72 md:w-64 sm:w-10/12 m-auto round bg-white shadow" >
                            <TheCardOffLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>          
</template>