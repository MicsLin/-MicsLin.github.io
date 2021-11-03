<script setup>
    import {ref} from 'vue'
    const getDocs = ref([1,2,3,4,5,6])
</script>


<template>
    <div class="w-96">
        <h2 class="pl-4 py-2 text-gray-400">文件</h2>
        <hr class="mb-3">
        <div class="px-4  text-gray-600">
            <div class="flex flex-wrap">
                <div v-for="(getDoc,index) in getDocs" :key="'getDoc'+index" class="mr-5 sm:mr-2 mb-5">
                    <div class="bg-gray-300 hover:bg-opacity-70 w-20 h-20 cursor-pointer">
                        <i class="pe-7s-ticket pe-lg pe-va"></i>
                    </div>
                    <div class="text-center w-20 overflow-hidden">{{getDoc}}</div>
                </div>
            </div>
        </div>
    </div>
</template>