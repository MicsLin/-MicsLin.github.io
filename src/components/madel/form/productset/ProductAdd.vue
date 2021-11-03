<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const productionName=ref('')
    const productionSize=ref('')

    const offPopupForm =function(){
        store.commit('offPopupForm')
    }
</script>

<template>
    <div class="w-96">
        <h2 class="pl-4 py-2 text-gray-400">新增產品</h2>
        <hr class="mb-3">
        <div class="px-4 text-gray-600">
            <div>
                <p>產品名稱</p>
                <div>
                    <input type="text" class="myInput w-full" v-model="productionName">
                </div>
            </div>
            <div class="my-5">
                <p>尺寸</p>
                <div>
                    <input type="text" class="myInput w-full" v-model="productionSize">
                </div>
            </div>
        </div>
        <hr class="mt-3 mb-2">
        <div class="px-4 py-2 float-right">
            <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
            <router-link :to="{name:'ProductSetAdd',params:{productionName:productionName,productionSize:productionSize}}">
                <button type="button" class="btn bg-blue-basic text-white" @click="offPopupForm">下一步</button>
            </router-link>   
        </div>
    </div>
</template>