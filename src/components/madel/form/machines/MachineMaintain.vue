<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()
   //獲取資料
    const getData = computed(()=>{
        return store.getters.getMadel.otherData
    })
    //今天日期
    const getToday=new Date()
    const showToday =computed(()=>{
        return getToday.getFullYear()+'-'+(getToday.getMonth()+1)+'-'+getToday.getDate()
    })
    //選擇人員
    const vfors =ref([
        {
            title:'',
            description:"Administrator"
        },
        {
            title:'',
            description:"Supervisor"
        },
        {
            title:'',
            description:"staff"
        }
    ])
    const selected =ref('Administrator')
　  //原因
    const reasons = ref([
        {
            title:'',
            description:"更換機油"
        },
        {
            title:'',
            description:"保外就醫"
        },
        {
            title:'',
            description:"場外保養"
        },
        {
            title:'',
            description:"例行檢查"
        },
        {
            title:'',
            description:"清洗機具"
        },
        {
            title:'',
            description:"更換機具"
        },
        {
            title:'',
            description:"asd"
        },
        {
            title:'',
            description:"清潔"
        }
    ])
    const selectReasons = ref([])
    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
        // 並且要刪除表單的資廖
    }
</script>

<template>
    <div>
        <h2 class="pl-4 py-2 text-gray-400">{{getData}}</h2>
        <form action="" class="text-gray-500">
            <div class="flex items-center px-4 py-2">
                <div class="w-16">日期</div>
                <div class="sm:w-full">
                    <input type="text" class="text-sm h-9 pl-2 appearance-none border-2  rounded  focus:outline-none w-96 sm:w-full bg-gray-300" :value="showToday" readonly>
                </div>
            </div>
            <div class="flex items-center px-4 py-2">
                <div class="w-16">人員</div>
                <div class="sm:w-full">
                    <select class="custom-select w-96 sm:w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic"  v-model="selected">
                        <option v-for="(item,index) in vfors" :key="index">
                            {{item.description}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex items-center px-4 py-2">
                <div class="w-16">原因</div>
                <div  class="flex flex-wrap w-96">
                    <div v-for="(item,index) in reasons" :key="index" class="flex items-center mr-6 sm:mr-2">
                        <input type="checkbox" :id="index" name="reason" :value="selectReasons" multiple>
                        <label :for="index" class="ml-1">{{item.description}}</label> 
                    </div>
                </div>
            </div>
             <button type="submit" class="ml-4 btn bg-blue-basic text-white">儲存</button>
        </form>
        <hr class="mt-3 mb-2">
        <div class="pl-4 sm:text-sm">
            <table class="table-fixed ">
                <thead class="text-red-400">
                    <tr>
                        <th class="w-3/12">日期</th>
                        <th>人員</th>
                        <th class="w-4/12">原因</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">2020-08-24</td>
                        <td class="text-center">Administrator</td>
                        <td class="text-center">更換機具;asd;清潔;</td>
                    </tr>
                    <tr>
                        <td class="text-center">2020-10-22</td>
                        <td class="text-center">Administrator</td>
                        <td class="text-center">gs;</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <hr class="mt-3 mb-2">
        <div class="px-4 py-2 float-right">
            <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
        </div>
    </div>
</template>