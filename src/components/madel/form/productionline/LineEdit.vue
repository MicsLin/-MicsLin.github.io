<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()
    //獲取資料
    const getName= computed(()=>{
        return store.getters.getMadel.otherData
    })
    const getPR= computed(()=>{
        return store.getters.getMadel.otherData2
    })
    //修改(之後可能改成傳id到LineEdit 之後LineEdit修改的值就直接傳到後端修改，就不用props到這裡)
    const lineName =ref(getName.value)
    const selectedPR =ref(getPR.value)

    //產線負責人
    const vfors = ref([
        {title:'',description:'小明'},
        {title:'',description:'小王'},
        {title:'',description:'Benzel'},
        {title:'',description:'Chlororide'}
    ])

    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
    }
</script>

<template>
    <div class="w-96">
        <h2 class="pl-4 py-2 text-gray-400">新增生產線</h2>
        <hr class="mb-3">
        <div class="px-4 text-gray-600">
            <div>
                <p>生產線名稱</p>
                <div>
                    <input type="text" class="myInput w-full" v-model="lineName">
                </div>
            </div>
            <div class="my-5">
                <p>產線負責人</p>
                <div class="w-full">
                    <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedPR">
                        <option v-for="(item,index) in vfors" :key="item+index">
                            {{item.description}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <hr class="mt-3 mb-2">
        <div class="px-4 py-2 float-right">
            <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
            <router-link :to="{name:'LineSetNew',params:{lineName:lineName,selectedPR:selectedPR}}">
                <button type="button" class="btn bg-blue-basic text-white" @click="offPopupForm">儲存</button>
            </router-link>   
        </div>
    </div>
</template>