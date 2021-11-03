<template>
    <div>
        <div class="flex items-center p-4 mb-2.5 w-full h-16 rounded-t bg-blue-500 text-lg">
            <span class="font-bold">14Test </span>
            <span class="ml-2 w-8 h-5 leading-5 bg-white text-blue-400 text-sm text-center rounded-2xl font-bold">29</span>
        </div>
        <div class="m-auto w-9/12 pt-2 flex-wrap font-bold">
            <div class="flex justify-between w-full mb-5">
                <router-link class="flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-green-btn hover:bg-opacity-70" to="/machine_online">
                    <i class="pe-7s-cloud-upload pe-lg pe-fw pe-va"></i>
                    <span>0</span>
                </router-link>
                <router-link class="flex items-center justify-center w-5/12 h-11 text-lg rounded text-gray-600 focus:outline-none bg-gray-300 hover:bg-opacity-70" to="/machine_offline">
                    <i class="pe-7s-cloud-download pe-lg pe-fw pe-va"></i>
                    <span>19</span>
                </router-link>
            </div>
            
             <div class="flex justify-between w-full">
                <router-link class="flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-red-600 hover:bg-opacity-70" to="/machine_out_of_order">
                    <i class="pe-7s-tools pe-lg pe-fw pe-va"></i>
                    <span>50</span>
                </router-link>
                <router-link class="flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-yellow-400 hover:bg-opacity-70" to="/machine_warning">
                    <i class="pe-7s-attention pe-lg pe-fw pe-va"></i>
                    <span>20</span>
                </router-link> 
             </div>
            
        </div>
    </div>
</template>
