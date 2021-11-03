<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()
    //類別
    const maintain_reason = ref([
        {title:'d',description:'保養'},
        {title:'f',description:'維修'}
    ])
    const vfors = computed(()=>{
        return maintain_reason.value
    })
    const selected = ref(maintain_reason.value[0].description)
    //原因
    const reason = ref('')
    //語言
    const language = ref([
        {title:'d',description:'繁體中文'},
        {title:'d',description:'简体中文'},
        {title:'d',description:'English'},
        {title:'d',description:'日本語'}
    ])
    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
        // 並且要刪除表單的資廖
    }
</script>

<template>
    <div>
        <h2 class="pl-4 py-2 text-gray-400">新增保修內容設定</h2>
        <hr class="mb-3">
        <form action="" class="text-gray-500">
            <div class="flex items-center px-4 py-2">
                <div class="w-16">原因</div>
                <div class="sm:w-full">
                    <input type="text" class="myInput w-96 sm:w-full" placeholder="請輸入原因" :value="reason">
                </div>
            </div>
            <div class="flex items-center px-4 py-2">
                <div class="w-16">類別</div>
                <div class="sm:w-full">
                    <select class="custom-select w-96 sm:w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic"  v-model="selected">
                        <option v-for="(item,index) in vfors" :key="index">
                            {{item.description}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex items-center px-4 py-2">
                <div class="w-16">語言</div>
                <div  class="flex flex-wrap">
                    <div v-for="(item,index) in language" :key="index" class="flex items-center mr-6 sm:mr-2">
                        <input type="radio" :id="index" name="language" :value="item.description">
                        <label :for="index" class="ml-1">{{item.description}}</label> 
                    </div>
                </div>
            </div>
            <hr class="mt-3 mb-2">
            <div class="px-4 py-2 float-right">
                <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
                <button type="submit" class="btn bg-blue-basic text-white">儲存</button>
            </div>
        </form>
    </div>
</template>