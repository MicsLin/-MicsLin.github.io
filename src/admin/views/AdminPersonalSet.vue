<script setup>
    import {ref} from 'vue'
    //選擇語言
    const vfors = ref([
        {
            title:'',
            description:'繁體中文'
        },
        {
            title:'',
            description:'简体中文'
        },
        {
            title:'',
            description:'English'
        },
        {
            title:'',
            description:'日本語'
        },
    ])
    const selectedLanguage =ref('繁體中文')

    //選擇 隱藏
    const showArray=ref([
        {title:'總件數',description:'bg-blue-basic'},
        {title:'目標',description:'bg-blue-basic'},
        {title:'達成率',description:'bg-blue-basic'},
        {title:'件數/小時',description:'bg-purple-500'},
        {title:'目標/小時',description:'bg-purple-500'},
        {title:'達成率/小時',description:'bg-purple-500'},
        {title:'件數製作時間',description:'bg-yellow-500'}
    ])
    const hiddenArray=ref([
        {title:'件數/小時',description:'bg-purple-500'},
        {title:'目標/小時',description:'bg-purple-500'},
        {title:'達成率/小時',description:'bg-purple-500'},
        {title:'件數製作時間',description:'bg-yellow-500'}
    ])
    const changeValue = function(){
        console.log('123');
    }
</script>

<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">個人化設定</h1>
    <div class="flex md:block justify-between mb-5">
        <!-- 左 -->
        <div class="mr-5 md:mr-0 md:mb-5 w-6/12 md:w-full shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <i class="pe-7s-key pe-lg pe-va"></i>
                    <span class="ml-3">密碼重設</span>
                </span>
            </div>
            <div class="px-8 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm">
                <small class="text-purple-400"> <span class="text-red-500">*</span>(請輸入6~12位字數)</small>
                <form action="">
                    <div class="flex items-center justify-between">
                        <div class="">原密碼</div>
                        <div class="w-8/12">
                            <input type="password" class="myInput w-full" placeholder="Password">
                        </div>
                    </div>
                    <div class="flex items-center justify-between my-2 sm:relative">
                        <div>新密碼<sup class="text-red-500">*</sup></div>
                        <div class="w-8/12">
                            <input type="password" class="myInput w-full" placeholder="New Password">
                        </div>
                    </div>
                    <div class="flex items-center justify-between mb-5">
                        <div>確認新密碼<sup class="text-red-500">*</sup></div>
                        <div class="w-8/12">
                            <input type="password" class="myInput w-full" placeholder="Confirm New Password">
                        </div>
                    </div>
                    <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">更新</button>
                </form>
            </div>
        </div> 
        <!-- 右 -->
        <div class="w-6/12 md:w-full md:shadow">
            <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
                <span class="flex items-center text-xl">
                    <svg class="stroke-current stroke-2 w-5 h-5 mr-2.5 text-blue-title-text" fill="#d9edf7" viewBox="0 0 44.02 43">
                        <path d="M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z" class="line"></path>
                    </svg>
                    <span class="ml-1">語言設定</span>
                </span>
            </div>
            <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm shadow md:shadow-none">
                <form action="">
                     <div class="flex items-center justify-between mb-5">
                        <div>選擇語言</div>
                        <div class="w-8/12">
                            <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="selectedLanguage">
                                <option v-for="(item,index) in vfors" :key="index">
                                    {{item.description}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <button type="button" class="mr-2 btn bg-blue-basic text-white" @click="btnSave">更新</button>
                </form>       
            </div>
        </div> 
    </div>
    <!-- 下面 -->
    <h2 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">資料顯示設定</h2>
    <div class="mb-10 w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-look pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">顯示區</span>
                </span>
            </div>
        </div>
        <div class="flex flex-wrap px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-xl">
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24" v-for="(show,index) in showArray" :key="index">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue" v-if="show.title == '總件數' || show.title == '目標' || show.title == '達成率'">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l">
                        <i class="pe-7s-albums" v-if="show.title == '總件數'"></i>
                        <i class="pe-7s-star" v-if="show.title == '目標'"></i>
                        <i class="pe-7s-flag" v-if="show.title == '達成率'"></i>
                    </div>
                    <div class="m-auto">
                        <span class="mr-7">{{show.title}}</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue" v-else-if="show.title == '件數/小時' || show.title == '目標/小時' || show.title == '達成率/小時'">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l">
                        <i class="pe-7s-albums" v-if="show.title == '件數/小時'"></i>
                        <i class="pe-7s-star" v-if="show.title == '目標/小時'"></i>
                        <i class="pe-7s-flag" v-if="show.title == '達成率/小時'"></i>
                    </div>
                    <div class="m-auto">
                        <span class="mr-7">{{show.title}}</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue" v-else>
                    <div class="flex items-center justify-center w-1/2 h-full bg-yellow-500 text-7xl text-white opacity-80 rounded-l">
                        <i class="pe-7s-clock"></i>
                    </div>
                    <div class="m-auto">
                        <span class="mr-7">{{show.title}}</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>  
            </div>

            <!-- <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-albums"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">總件數</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-star"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">目標</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-flag"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">達成率</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-albums"></i></div>
                    <div class="m-auto">
                        <span>件數/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-star"></i></div>
                    <div class="m-auto">
                        <span>目標/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-flag"></i></div>
                    <div class="m-auto">
                        <span>達成率/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-yellow-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-clock"></i></div>
                    <div class="m-auto">
                        <span class="text-lg">件數製作時間</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="flex px-8 pb-5 sm:px-2">
            <button class="mr-2 btn bg-blue-basic text-white">儲存排列</button>
            <button class="btn bg-green-btn text-white">重置</button>
        </div>
    </div> 
    <div class="w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-yellow-100 text-lg text-yellow-700">
            <div>
                <span class="flex items-center text-xl">
                    <i class="pe-7s-lock pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">隱藏區</span>
                </span>
            </div>
        </div>
        <div class="flex flex-wrap px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-xl">
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-albums"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">總件數</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-star"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">目標</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-blue-basic text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-flag"></i></div>
                    <div class="m-auto">
                        <span class="mr-7">達成率</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-albums"></i></div>
                    <div class="m-auto">
                        <span>件數/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-star"></i></div>
                    <div class="m-auto">
                        <span>目標/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-purple-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-flag"></i></div>
                    <div class="m-auto">
                        <span>達成率/小時</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="mb-5 w-1/3 md:w-1/2 sm:w-full h-24">
                <div class="flex w-11/12 h-full shadow cursor-pointer"  @click="changeValue">
                    <div class="flex items-center justify-center w-1/2 h-full bg-yellow-500 text-7xl text-white opacity-80 rounded-l"><i class="pe-7s-clock"></i></div>
                    <div class="m-auto">
                        <span class="text-lg">件數製作時間</span>
                        <span class="text-xl text-gray-400 hover:text-yellow-500 text-opacity-70 hover:text-opacity-100 cursor-pointer ">
                            <i class="pe-7s-close pe-lg pe-va"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>