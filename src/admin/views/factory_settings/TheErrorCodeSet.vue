<script setup>
    import {ref} from 'vue'
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
    // Axios表單資料
    const errorarray = ref([
        {
            errorcode:"Eh-1",
            errorcontent:"材料短缺"
        },
        {
            errorcode:"Eh-2",
            errorcontent:"斷針"
        },
        {
            errorcode:"Eh-3",
            errorcontent:"錯誤碼測試03"
        },
        {
            errorcode:"Eh-4",
            errorcontent:"錯誤碼測試04"
        },
        {
            errorcode:"Eh-5",
            errorcontent:"錯誤碼測試05"
        }
    ])
    const errorarray_cn = ref([
        {
            errorcode:"Eh-1",
            errorcontent:"材料短缺"
        },
        {
            errorcode:"Eh-2",
            errorcontent:"断针"
        }
    ])
    const errorarray_en = ref([
        {
            errorcode:"Eh-1",
            errorcontent:"Material shortage"
        },
        {
            errorcode:"Eh-2",
            errorcontent:"Broken needle"
        }
    ])
    const errorarray_jp = ref([
        {
            errorcode:"Eh-1",
            errorcontent:"資材不足"
        }
    ])

    //隱藏按鈕
    const isShow = ref(false)

    // 新增/刪除成功
    const isActive = ref(false)
    const showInfo = ref('')
    const btnSave = function(){
        //  alert('新增的項目')
        isActive.value = true
        showInfo.value = '新增成功'
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }

    //刪除(暫時隱藏，之後需要時，直接開啟即可!)
    // const btnDelete = function(){
    //     // alert('刪除?')
    //     isActive.value = true
    //     showInfo.value = '刪除成功'
    // }
</script>


<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">錯誤碼設定</h1>
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
                    <span class="ml-3 mr-1">錯誤碼清單</span>
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
            <!-- <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">新增</button> -->
            <!-- 定位用 -->
            <div></div>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <!-- 繁體中文 -->
            <table class="table-fixed w-full" v-if="selectLang == '繁體中文'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3 w-4/12" >錯誤碼</th>
                        <th class="border border-gray-300" >內容</th>
                        <!-- <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >刪除</th> -->
                    </tr>
                </thead>

                <tbody v-if="errorarray[0].errorcode==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">無任何資料</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(errorsingle,index) in errorarray" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            {{errorsingle.errorcode}}
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="errorsingle.errorcontent">
                        </td>
                        <!-- 刪除，之後可能會用到 -->
                        <!-- <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td> -->
                    </tr>
                </tbody>
            </table>
            <!-- 简体中文 -->
            <table class="table-fixed w-full" v-if="selectLang == '简体中文'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3 w-4/12" >错误码</th>
                        <th class="border border-gray-300" >內容</th>
                    </tr>
                </thead>

                <tbody v-if="errorarray_cn[0].errorcode==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">无任何资料</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(errorsingle,index) in errorarray_cn" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            {{errorsingle.errorcode}}
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="errorsingle.errorcontent">
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- English -->
            <table class="table-fixed w-full" v-if="selectLang == 'English'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3 w-4/12" >ErrorCode</th>
                        <th class="border border-gray-300" >Content</th>
                    </tr>
                </thead>

                <tbody v-if="errorarray_en[0].errorcode==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">No Data</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(errorsingle,index) in errorarray_en" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            {{errorsingle.errorcode}}
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="errorsingle.errorcontent">
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 日本語 -->
            <table class="table-fixed w-full" v-if="selectLang == '日本語'">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3 w-4/12" >エラーコード</th>
                        <th class="border border-gray-300" >コンテンツ</th>
                    </tr>
                </thead>

                <tbody v-if="errorarray_jp[0].errorcode==''">
                    <tr class="bg-red-300">
                        <td></td>
                        <td class="py-1 pl-20 sm:pl-0">情報なし</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(errorsingle,index) in errorarray_jp" :key="index">
                        <td class="border border-gray-300 px-2 py-3">
                            {{errorsingle.errorcode}}
                        </td>
                        <td class="border border-gray-300 px-2 py-3">
                            <input type="text" class="form-control myInput w-full" :value="errorsingle.errorcontent">
                        </td>
                    </tr>
                </tbody>
            </table>
            <!--  -->
            <div class="mt-2">
                <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">儲存</button>
                <router-link to="/factory_settings">
                    <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">回上一頁</button>
                </router-link>
            </div>
        </div>
    </div>         
</template>

