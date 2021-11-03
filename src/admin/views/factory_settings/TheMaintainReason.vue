<script setup>
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    // 選單
    const maintain_reason = ref([
        {title:'d',description:'保養'},
        {title:'f',description:'維修'}
    ])
    const maintain_reason_cn = ref([
        {title:'d',description:'保养'},
        {title:'f',description:'维修'}
    ])
    const maintain_reason_en = ref([
        {title:'d',description:'maintenance'},
        {title:'f',description:'repair'}
    ])
    const maintain_reason_jp = ref([
        {title:'d',description:'メンテナンス'},
        {title:'f',description:'維持'}
    ])
    // Axios表單資料
    const maintain_reason_lists =ref([
        {"reason":"保外就醫","class":"保養","lang":"繁體中文"},
        {"reason":"例行檢查","class":"保養","lang":"繁體中文"},
        {"reason":"更換機具","class":"維修","lang":"繁體中文"},
        {"reason":"場外保養","class":"維修","lang":"繁體中文"},
        {"reason":"更換機油","class":"保養","lang":"繁體中文"}
    ])
    const maintain_reason_lists_cn =ref([
        {"reason":"保外就医","class":"维修","lang":"简体中文"},
        {"reason":"例行检查","class":"保养","lang":"简体中文"},
    ])
    const maintain_reason_lists_en =ref([
        {"reason":"broken","class":"repair","lang":"English"},
        {"reason":"check","class":"maintenance","lang":"English"},
    ])
    const maintain_reason_lists_jp =ref([
        {"reason":"","class":"","lang":"japanese"},
        {"reason":"","class":"","lang":"japanese"},
    ])
    // 選擇語言
    const language_lists=ref([
        {
            title:'',
            description:'繁體中文'
        },
        {
            title:'',
            description:'English'
        },
        {
            title:'',
            description:'简体中文'
        },
        {
            title:'',
            description:'日本語'
        }
    ])
    const selectLang = ref(language_lists.value[0].description)

    //新增
    const btnAdd=function(){
        store.commit('onPopupForm','maintainReason')
    }
    // 新增/刪除成功
    const isActive = ref(false)
    const showInfo = ref('')
    const btnSave = function(){
        //  alert('新增的項目')
        isActive.value = true
        showInfo.value = '新增成功'


        // let productionline_lists = this.productionline_lists

        //     let ran =Math.floor(Math.random()*3)
        //     let add_producntion_line=this.add_producntion_line[ran]

        //     this.isActive = true
        //     // 顯示儲存成功
        //     for (let index = 0; index < productionline_lists.length; index++) {
        //         if(add_producntion_line == productionline_lists[index].title){
        //             this.checkalert='名稱重複，請重新輸入'
        //             return this.add_producntion_error=true;
        //         }else{
        //             this.add_producntion_error=false
        //             this.checkalert='新增成功' 
        //         }  
        //     }
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }

    //測試用 新增的名稱(如果跟資料衝突 要顯示警示)
    const add_producntion_line = ['我是生產線2','我是生產線5','我是生產線3']

    //刪除
    const btnDelete = function(){
        // alert('刪除?')
        isActive.value = true
        showInfo.value = '刪除成功'
    }
    const select_value = ref('')

</script>


<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">保修內容設定</h1>
    <!-- 新增 / 刪除 成功 -->
    <div class="flex items-center justify-between mb-8 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow"
        :class="{'hidden':!isActive}">    
        <span>{{showInfo}}</span>
        <span class="flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900" @click="btnClose">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </span>
    </div>
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-close-circle pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">原因列表</span>
                </span>
            </div>
            <!-- 選擇語言 -->
            <div class="w-96 md:w-7/12 sm:w-3/12">
                <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic"  v-model="selectLang">
                    <option v-for="(item,index) in language_lists" :key="index">
                        {{item.description}}
                    </option>
                </select>
            </div>
            <button type="button" class="btn bg-blue-basic text-white" @click="btnAdd">新增</button>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <div class="flex items-center mb-6 sm:mb-4 w-full">
                <span>維修時間(<span class="sm:hidden">單位:</span>小時):</span>  
                <input type="number" class="mx-2 form-control myInput w-80 md:w-72 sm:w-4/12" value="100" min="0" max="3000">
                <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">送出</button> 
            </div>
            <!-- 繁體中文 -->
            <table class="table-fixed w-full" v-if="selectLang == '繁體中文'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >原因</th>
                        <th class="border border-gray-300" >類別</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6" >語言</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >刪除</th>
                    </tr>
                </thead>

               <tbody v-if="maintain_reason_lists[0].reason==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">無任何資料</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(maintain_reason_list,index) in maintain_reason_lists" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="maintain_reason_list.reason">
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <!-- 之後要給予name 才能抓到表單資料 -->
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic">
                                <option v-for="(item,index) in maintain_reason" :key="index" :selected="item.description == maintain_reason_list.class">
                                    {{item.description}}
                                </option>
                            </select>
                        </td>
                        <td class="border border-gray-300 text-center">{{maintain_reason_list.lang}}</td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 简体中文 -->
            <table class="table-fixed w-full" v-if="selectLang == '简体中文'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >原因</th>
                        <th class="border border-gray-300" >类别</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6" >语言</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >删除</th>
                    </tr>
                </thead>

                <tbody v-if="maintain_reason_lists_cn[0].reason==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">无任何资料</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(maintain_reason_list,index) in maintain_reason_lists_cn" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="maintain_reason_list.reason">
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <!-- 之後要給予name 才能抓到表單資料 -->
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic">
                                <option v-for="(item,index) in maintain_reason_cn" :key="index" :selected="item.description == maintain_reason_list.class">
                                    {{item.description}}
                                </option>
                            </select>
                        </td>
                        <td class="border border-gray-300 text-center">{{maintain_reason_list.lang}}</td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- English -->
            <table class="table-fixed w-full" v-if="selectLang == 'English'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >Reason</th>
                        <th class="border border-gray-300" >Category</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6" >Language</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >Delete</th>
                    </tr>
                </thead>
                <tbody v-if="maintain_reason_lists_en[0].reason==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">No Data</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(maintain_reason_list,index) in maintain_reason_lists_en" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="maintain_reason_list.reason">
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <!-- 之後要給予name 才能抓到表單資料 -->
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic">
                                <option v-for="(item,index) in maintain_reason_en" :key="index" :selected="item.description == maintain_reason_list.class">
                                    {{item.description}}
                                </option>
                            </select>
                        </td>
                        <td class="border border-gray-300 text-center">{{maintain_reason_list.lang}}</td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 日本語 -->
            <table class="table-fixed w-full" v-if="selectLang == '日本語'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >理由</th>
                        <th class="border border-gray-300" >範疇</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6">言語</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >消去</th>
                    </tr>
                </thead>

                <tbody v-if="maintain_reason_lists_jp[0].reason==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">情報なし</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(maintain_reason_list,index) in maintain_reason_lists_jp" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="maintain_reason_list.reason">
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <!-- 之後要給予name 才能抓到表單資料 -->
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic">
                                <option v-for="(item,index) in maintain_reason_jp" :key="index" :selected="item.description == maintain_reason_list.class">
                                    {{item.description}}
                                </option>
                            </select>
                        </td>
                        <td class="border border-gray-300 text-center">{{maintain_reason_list.lang}}</td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-2">
                <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">儲存</button>
                <router-link to="/factory_settings">
                    <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">回上一頁</button>
                </router-link>
            </div>
        </div>
    </div>         
</template>