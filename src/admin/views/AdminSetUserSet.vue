<script setup>
    import {ref} from 'vue'
    const userselect=ref('選擇群組')
    const select_group=ref([
        // if description ==選擇群組 時，要跳出警告視窗，或直接給他一個值
        {
        title:'',
        description:'選擇群組'
        },
        {
            title:'',
            description:'Administrator'
        },
        {
            title:'',
            description:'Manager'
        },
        {
            title:'',
            description:'Director'
        },
        {
            title:'',
            description:'Line Leader'
        }
    ])
    const select_production_lines=ref([
        {title:'123',description:'123'},
        {title:'3F Demo',description:'3F Demo'},
        {title:'China App',description:'China App'},
        {title:'Demo_F',description:'Demo_F'},
        {title:'Line_01',description:'Line_01'},
        {title:'oldMachineTest',description:'oldMachineTest'},
        {title:'Test02',description:'Test02'},
        {title:'14Test',description:'14Test'},
        {title:'Addidas',description:'Addidas'},
        {title:'Demo',description:'Demo'},
        {title:'Dwe',description:'Dwe'},
        {title:'Line01',description:'Line01'},
        {title:'Rebook',description:'Rebook'},
        {title:'Vang',description:'123'},
        {title:'2F Demo',description:'2F Demo'},
        {title:'Btest',description:'Btest'},
        {title:'Demo2017',description:'Demo2017'},
        {title:'HSR',description:'HSR'},
        {title:'Nike01',description:'Nike01'},
        {title:'Test',description:'Test'},
        {title:'壓模',description:'壓模'},
    ])
    const select_all=ref(false)
    const edit_group=ref(false)
    const edit_group_index=ref(Number)
    const input_edit=ref(String)


    const switch_check_all=function(){
        if(select_all.value ==false){
            select_all.value =true
            // this.switch_select_checkbox=true
        }else{
            select_all.value=false
            // this.switch_select_checkbox=false
        }
    }
    // const check_single=function(index){
    //     this.$refs['check'+index].checked =!this.$refs['check'+index].checked
    // }
    const select_group_renew=function(index){
        // 更改input-group的input value 跟button的push值
        edit_group.value=true
        edit_group_index.value=index
        input_edit.value =select_group.value[index].description
    }
    const btn_edit=function(){
        return select_group.value[edit_group_index.value].description =input_edit.value
    }

    //新增群組
     // 新增/刪除成功
    const isActive = ref(false)
    const showInfo = ref('')
    const btnSave = function(){
        isActive.value = true
        showInfo.value = '新增成功'
    }
    const btnClose = function(){
        isActive.value = false
        showInfo.value = ''
    }
    //刪除
    const btnDelete = function(){
        // alert('刪除?')
        isActive.value = true
        showInfo.value = '刪除成功'
    }
</script>

<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">使用者設定</h1>  
    <div class="flex md:block justify-between mb-5">
        <!-- 左 -->
        <div class="mr-5 md:mr-0 md:mb-5 w-6/12 md:w-full shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <svg class="stroke-current stroke-2 w-7 h-7 text-blue-title-text" fill="#d9edf7" viewBox="0 0 44 44">
                        <path d="M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z" class="line"></path>
                    </svg>
                    <span class="ml-3">新增使用者</span>
                </span>
            </div>
            <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm">
                <form action="">
                    <div class="flex">
                        <input type="text" class="mr-2 form-control myInput w-full" placeholder="使用者名稱">
                        <input type="text" class="form-control myInput w-full" placeholder="員工編號">
                    </div>
                    <div class="flex my-2">
                        <input type="text" class="mr-2 form-control myInput w-full" placeholder="帳號">
                        <input type="text" class="form-control myInput w-full" placeholder="密碼">
                    </div>
                    <div>
                        <div class="w-full">
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="userselect">
                                <option v-for="(item,index) in select_group" :key="index">
                                    {{item.description}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <table class="my-2 w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th class="border-b border-gray-300 py-3 pl-2 text-left">選擇生產線</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="flex items-center border-b border-gray-300 py-3 pl-2 hover:bg-gray-200">
                                    <input type="checkbox" id="check_all" class="mr-2" name="check_all" :checked="select_all">
                                    <label for="check_all" class="w-full cursor-pointer">選擇全部</label>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-8 lg:px-4 py-4 overflow-hidden">
                                    <ul class="flex flex-wrap">
                                        <li v-for="(select_production_line,index) in select_production_lines" :key="index" @click="check_single(index)" class="flex items-center mb-1 w-2/6 sm:w-6/12" >
                                            <input type="checkbox" :id="'check'+index" :name="'check'+index" :checked="select_all" :ref="'check'+index" @click="check_single(index)" class="mr-2">
                                            <label :for="'check'+index">{{select_production_line.description}}</label>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">送出</button>
                        <router-link to="/factory_settings">
                            <button type="button" class="btn bg-gray-300 text-black" @click="btnSave">重置</button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div> 
        <!-- 右 -->
        <div class="w-6/12 md:w-full md:shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <svg class="stroke-current stroke-2 w-7 h-7 text-blue-title-text" fill="#d9edf7" viewBox="0 0 44 44">
                        <path d="M17 13h8c1.105 0 2 .895 2 2v22c0 1.105-.895 2-2 2H3c-1.105 0-2-.895-2-2V15c0-1.105.895-2 2-2h8M14 0v26"></path>
                        <path d="M19.998 20.002L14 26l-5.998-5.998"></path>
                    </svg>
                    <span class="ml-1">新增群組</span>
                </span>
            </div>
            <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm shadow md:shadow-none">
                <!-- 顯示新增成功 -->
                <div class="flex items-center justify-between mb-5 px-8 sm:px-4 w-full h-16 bg-green-success text-green-700 font-bold round shadow"
                    :class="{'hidden':!isActive}">    
                    <span>{{showInfo}}</span>
                    <span class="flex text-xl text-gray-400 text-opacity-70 cursor-pointer hover:text-green-900" @click="btnClose">
                        <i class="pe-7s-close pe-lg pe-va"></i>
                    </span>
                </div>
                <div class="flex items-center mb-2 relative">
                    <input type="text"  placeholder="群組名稱" class="form-control myInput w-full">
                    <button class="absolute right-0 bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 h-full rounded-r rounded-l-sm  focus:outline-none" @click="btnSave">新增</button>
                </div>
                <table class="w-full  border border-gray-300">
                    <thead>
                        <tr>
                            <th class="border border-gray-300 py-3" >群組名稱</th>
                            <th class="border border-gray-300 w-2/12 lg:w-3/12 md:w-2/12 sm:w-3/12">刪除</th>
                        </tr>
                    </thead>

                    <tbody v-for="(select_single,index) in select_group" :key="index">
                        <!-- 警示顏色 -->
                        <tr v-if="select_single.description == 'Administrator'">
                            <!-- <td class="border-t border-gray-300 px-2 py-3 w-3/12">
                                111
                            </td>
                            <td class="border-t border-gray-300 px-2 py-3">
                               刪除
                            </td> -->
                            <td class="border-t border-r border-gray-300 px-2 py-3" @click="select_group_renew(index)" >{{select_single.description}}</td>
                            <td class="border-t border-gray-300 px-2 py-3"></td>
                        </tr>
                        <tr v-else-if="select_single.description == '選擇群組'" class="hidden"></tr>
                        <tr v-else >
                            <td class="border-t border-r border-gray-300 px-2 py-3" @click="select_group_renew(index)">{{select_single.description}}</td>
                            <td class="border-t border-gray-300">
                                <div class="flex items-center justify-center">
                                   <button class="bg-red-500 hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" @click="btnDelete">刪除</button> 
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        </div> 
    </div>
    <!-- 下面 -->
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <svg class="stroke-current stroke-2 w-7 h-7 text-blue-title-text" fill="#d9edf7" viewBox="0 0 44 44">
                        <path d="M41 43H3c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h38c1.105 0 2 .895 2 2v35c0 1.105-.895 2-2 2zM1 15h42M9 0v8M35 0v8M5 21h34M5 26h34M5 31h34M5 36h34"></path>
                    </svg>
                    <span class="ml-3 mr-1">管理清單</span>
                </span>
            </div>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" >使用者名稱</th>
                        <th class="border border-gray-300" >群組</th>
                        <th class="border border-gray-300 w-6/12 lg:w-5/12" >生產線管理</th>
                        <th class="border border-gray-300 w-1/12 lg:w-1/6 sm:w-1/12" >刪除</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <!-- 之後要forEach -->
                        <td class="border border-gray-300 px-2 sm:px-0 py-3 overflow-hidden">
                            <router-link to="/user_edit">
                                <div>Administrator</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 px-2 sm:px-0 py-3 overflow-hidden">
                            <router-link to="/user_edit">
                                <div>Administrator</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 text-center ">
                            <router-link to="/user_edit">
                                <div class="flex flex-wrap p-2 sm:p-0 max-h-28 overflow-hidden">
                                    <span v-for="(select_production_line,index) in select_production_lines" :key="index">
                                        <!-- {{select_production_line.description}}
                                        <span v-if="index+1 < select_production_lines.length">, </span> -->
                                        <span>{{ select_production_line.description }}</span><span v-if="index < select_production_lines.length - 1">,&nbsp;</span>
                                    </span> 
                                </div> 
                            </router-link>
                        </td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
</template>