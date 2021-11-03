<script setup>
    import {ref,watch} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()
    //帶入參數 產線名稱 產線負責人
    const props = defineProps({
        lineName:String,
        selectedPR:String
    })

        //更換
    const btnEdit =function(){
        store.commit('onPopupForm','productionEdit')
        store.commit('onPopupOtherData',props.lineName)
        store.commit('onPopupOtherData2',props.selectedPR)
    }
    
        //div2 機台選項
    const array = ref([
        'Machine001',
        'Machine002',
        'Machine003',
        'Machine004',
        'Machine005',
        'Machine006',
        'Machine007',
        'Machine008',
        'Machine009',
        'Machine010',
        'Machine011',
        'Machine012',
        'Machine013'
    ])


    //div1 移除
    const chooseBox =ref([])

    const remove_choose = function(index) {
        //如果移除的是主要機台，要重新配置主要機台
        if(main_machine.value[0] == chooseBox.value[index]){
            //如果主要機台是在陣列的中間時
            if(chooseBox.value.length > index+1){
                main_machine.value[0] = chooseBox.value[index+1]
            }else{
                main_machine.value[0] = chooseBox.value[index-1]
            }   
        }
        //移除
        chooseBox.value.splice(index, 1);
        
    }

    //div1 更換功能(選擇機台 或 移除機台)
    const switch_remove_choose = ref(false)
    const switch_remove_title=ref('擊點下方 選擇機台')
    const click_remove = function(){
        if(!switch_remove_choose.value){
            switch_remove_choose.value =true
            switch_remove_title.value ='擊點下方 移除機台'
        }else{
            switch_remove_choose.value =false
            switch_remove_title.value ='擊點下方 選擇機台'
        }
        
    }

    //選擇主要機台
    const main_machine =ref('')
        //div1 選擇
    const choose_main = function(index){
        main_machine.value[0] = chooseBox.value[index]
    }
        //div2 讓第一個選到的 變成主要機台
    watch(chooseBox, () => {
        if(main_machine.value == ''){
            main_machine.value = chooseBox.value               
        }
    })

</script>
<template>
    <h1 class="flex items-center mb-8 sm:mb-4 text-4xl text-gray-600">
        <span class="mr-5 sm:mr-2">修改生產線</span>
        <router-link to="/production_line_set" class="flex items-center">
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">
               <span class="sm:hidden"> 返回生產線設定</span>
               <span class="hidden sm:block">上一頁</span>
            </button>
        </router-link>
    </h1>
    <div class="mb-5 w-full shadow">
        <div class="flex sm:block items-center justify-between h-16 sm:h-auto sm:py-2 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div class="sm:mb-2 w-2/4 lg:w-8/12 sm:w-full">
                <span class="flex sm:block items-center justify-between text-xl sm:text-lg">
                    <p class="mr-5 sm:mr-0">生產線：{{props.lineName}}</p>
                    <p >產線負責人：{{props.selectedPR}}</p>
                </span>
            </div>
            <div>
                <button class="mr-2 btn bg-blue-basic text-white" @click="btnEdit">更換</button>
                <router-link to="/production_line_rule">
                    <button class="btn bg-blue-basic text-white">下一步</button>
                </router-link>
            </div>
        </div>
    </div>
    <div class=" mb-5 w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="ml-3 mr-1">在線機台</span>
            <button class="btn text-white" @click="click_remove"
              :class="[ switch_remove_choose  ? 'bg-red-400' : 'bg-blue-basic']">
                {{switch_remove_title}}
            </button>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <div v-if="chooseBox.length ==0">
                <div > 
                    <span class="text-purple-400">None Machine Selected</span> 
                </div>
            </div>
            <div v-else>
                <div v-if="switch_remove_choose" class="flex items-center flex-wrap">
                    <div v-for="(choosebox,index) in chooseBox" :key="index" class="flex items-center justify-center mr-5 sm:mr-2 mb-5">
                        <!-- 給予主要機台 不同的樣式 -->
                        <button @click="remove_choose(index)" v-if="choosebox == main_machine" class="btn bg-green-btn text-white"><i class="pe-7s-star"></i>{{choosebox}}</button>
                        <button @click="remove_choose(index)" v-else class="btn bg-blue-basic text-white">{{choosebox}}</button>
                    </div>
                </div>
                <div v-if="!switch_remove_choose" class="flex items-center flex-wrap"> 
                    <div v-for="(choosebox,index) in chooseBox" :key="index" class="flex items-center justify-center mr-5 sm:mr-2 mb-5">
                        <button @click="choose_main(index)" v-if="choosebox == main_machine" class="btn bg-green-btn text-white"><i class="pe-7s-star"></i>{{choosebox}}</button>
                        <button @click="choose_main(index)" v-else class="btn bg-blue-basic text-white" >{{choosebox}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="ml-3 mr-1">可使用機台</span>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <div  class="flex items-center flex-wrap">
                <!-- 刪除後 位置排列(因為div還在)會有問題 -->
                <!-- 這裡還有問題!!!!!!!!!!!!!顯示跟消失綁定的問題 -->
                <div v-for="(single,index) in array" :key="index">
                    <div class="flex items-center justify-center mr-5 sm:mr-2 mb-5" >
                        <button class="btn bg-blue-basic text-white">
                            <input type="checkbox" :id="index" :value="single" v-model="chooseBox" class="hidden">
                            <label :for="index" class="cursor-pointer">{{single}}</label>
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    </div>           
</template>