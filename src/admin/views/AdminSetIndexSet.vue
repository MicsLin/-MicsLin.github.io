
<script setup>
    import {ref} from 'vue'
    import SelectOption from '../../components/table/SelectOption.vue'

    const numberkey = ref(0)
    //原廠設定
    const factorysettings=ref({
        company:{
            title:'公司名稱',
            description:'YHHISM'
        },
        worktime:{
            title:'上班時間',
            description:'07:30'  
        },
        factorycode:{
            title:'工廠代碼',
            description:'Demo YHH'  
        },
        alertcolor:{
            title:'警示顏色',
            description:'red'  
        },
        Noneachievementrate:{
            title:'未達成率',
            description:'60%' 
        },
        errorcodetime:{
            title:'錯誤碼轉換時間',
            description:'一秒'
        },
    })
    //使用者設定
    const usersets =ref({
        company:{
            title:'公司名稱',
            description:'YHHISM AAA'
        },
        worktime:{
            title:'上班時間',
            description:'06:30'  
        },
        factorycode:{
            title:'工廠代碼',
            description:'Demo AAA'  
        },
        alertcolor:{
            title:'警示顏色',
            description:'無填滿'  
        },
        Noneachievementrate:{
            title:'未達成率',
            description:'70%' 
        },
        errorcodetime:{
            title:'錯誤碼轉換時間',
            description:'五秒'
        },
    })
    //選單內容
    const worktimes = ref([
        {
            description:'05:00' ,
            value:'05:00'
        },
        {
            description:'05:30' ,
            value:'05:30'
        },
        {
            description:'06:00' ,
            value:'06:00'
        },
        {
            description:'06:30' ,
            value:'06:30'
        },
        {
            description:'07:00' ,
            value:'07:00'
        },
        {
            description:'07:30' ,
            value:'07:30'
        },
        {
            description:'08:00' ,
            value:'08:00'
        },
        {
            description:'08:30' ,
            value:'08:30'
        },
        {
            description:'09:00' ,
            value:'09:00'
        },
        {
            description:'09:30' ,
            value:'09:30'
        },
        {
            description:'10:00' ,
            value:'10:00'
        }
    ])
    const alertcolors = ref([
            { 
                description:'無填滿',
                value:'none'
            },
            { 
                description:'紅色',
                value:'red'
            },
            { 
                description:'黃色',
                value:'yellow'
            }
        ])
    const Noneachievementrates=ref([
        {
            description:'100%',
            value:1
        },
        {
            description:'90%',
            value:0.9
        },
        {
            description:'80%',
            value:0.8
        },
        {
            description:'70%',
            value:0.7
        },
        {
            description:'60%',
            value:0.6
        }
    ])         
    const errorcodetimes=ref([
        {
            description:'一秒',
            value:1
        },
        {
            description:'五秒',
            value:5                   
        },
        {
            description:'十秒',
            value:10                   
        }
    ])
     
    const resetting = function(){
        //重新渲染selected
        numberkey.value +=1
        //將設定改回原廠
        return  usersets.value = factorysettings.value
    }
    const resettinguserset=function(){
        // 回復使用者設定 按鈕使用:給使用者修改input內容後，突然反悔想改回原本自己的設定而使用
        numberkey.value +=1;
    }
    // const renews=function(){
    //     const axios = require('axios');
    //     axios.post('http://192.168.123.109/webapi/api/indexset',{
    //         work_time: "07:00:00",
    //         company_name:"永輝興2",
    //         factory_number:"0002"
    //     })
    //     .then((res)=>{
    //         this.numberkey +=1;
    //         console.log(res.status);//1是成功，2是失敗
    //     })
    //     .catch((error)=>{
    //         console.log('失敗');
    //     })
    // }
</script>


<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">首頁設定</h1>
    <button type="button" class="mb-5 bg-green-btn hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none"
    @click="resetting" >
        回復原廠
    </button>
    <!-- <div class="btn btn-danger resetBtn" @click="resettinguserset">回復使用者設定</div> -->
    <div class="flex md:block justify-between">
        <!-- 左 -->
        <div class="mr-5 md:mr-0 md:mb-5 w-auto shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <i class="pe-7s-star pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">一般設定</span>
                </span>
            </div>
            <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm">
                <table class="table-fixed w-full">
                    <thead class="hidden">
                        <tr>
                            <th class="border border-gray-300 py-3" ></th>
                            <th class="border border-gray-300"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- 公司名稱 -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3 w-3/12">
                                {{usersets.company.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <input type="text" class="form-control myInput w-full" :value="usersets.company.description" :key="numberkey">
                            </td>
                        </tr>
                        <!--上班時間  -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3">
                                {{usersets.worktime.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <SelectOption :vfors='worktimes' :userselect='usersets.worktime.description' :key="numberkey" />
                            </td>
                        </tr>
                        <!--工廠代碼  -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3">
                                {{usersets.factorycode.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <input type="text" class="form-control myInput w-full" :value="usersets.company.description" :key="numberkey">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-2">
                    <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">更新</button>
                    <router-link to="/factory_settings">
                        <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">返回</button>
                    </router-link>
                </div>
            </div>
        </div> 
        <!-- 右 -->
        <div class="w-auto shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <i class="pe-7s-speaker pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">警示功能</span>
                </span>
            </div>
            <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm">
                <table class="table-fixed w-full">
                    <thead class="hidden">
                        <tr>
                            <th class="border border-gray-300 py-3" ></th>
                            <th class="border border-gray-300"></th>
                            <th class="border border-gray-300"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <!-- 警示顏色 -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3 w-3/12">
                                {{usersets.alertcolor.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <SelectOption :vfors='alertcolors' :userselect='usersets.alertcolor.description' :key="numberkey" />
                            </td>
                        </tr>
                        <!--未達成率  -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3">
                                {{usersets.Noneachievementrate.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <SelectOption :vfors='Noneachievementrates' :userselect='usersets.Noneachievementrate.description' :key="numberkey" />
                            </td>
                        </tr>
                        <!--錯誤碼轉換時間  -->
                        <tr>
                            <td class="border-t border-gray-300 px-2 py-3">
                               {{usersets.errorcodetime.title}}
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                                <SelectOption :vfors='errorcodetimes' :userselect='usersets.errorcodetime.description' :key="numberkey" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-2">
                    <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">更新</button>
                    <router-link to="/factory_settings">
                        <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">返回</button>
                    </router-link>
                </div>
            </div>
        </div> 
    </div>
</template>
