<script setup>
    import {ref,computed} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const props =defineProps({
        index:String
    })
    //製作程序資料
    const getProccess = ref([
        {title:'製程1',std:10.5,pin:100,upperlimit:2,lowerlimit:3,cut:1,multiple:1,description:'以切線計'},
        {title:'製程2',std:18.6,pin:152,upperlimit:2,lowerlimit:1,cut:1,multiple:1,description:'以針數計'},
        {title:'製程3',std:20.4,pin:32,upperlimit:5,lowerlimit:4,cut:1,multiple:1,description:'標準計算'},
        {title:'製程4',std:2.1,pin:100,upperlimit:50,lowerlimit:50,cut:1,multiple:1,description:'以手動計'},
        {title:'製程5',std:0.6,pin:1,upperlimit:1,lowerlimit:1,cut:0,multiple:1,description:'標準計算'},
    ])
    const getData = computed(()=>{
        return getProccess.value[props.index]
    })
    const editData =ref(getData.value)
    //計算方式
    const vfors =ref([
        '標準計算',
        '以切線計',
        '以針數計',
        '以手動計'
    ])
    const selected = ref('以針數計')
    //瀏覽檔案
        const showFile = ref('getPhotos')
        //圖片
        const getPhotos = ref([1,2,3,4,5,6,7,8,9])
        //影片
        const getVideos = ref([1,2,3,4,5,6])
        //文件
        const getDocs = ref([1,2,3,4,5,6])
        const changeFile = function(value){
            return showFile.value = value
        }
    //新增檔案
    const btnAdd = function(){
        store.commit('onPopupForm','fileAdd')
    }
</script>

<template>
    <h1 class="flex items-center justify-between mb-8 sm:mb-4 text-4xl text-gray-600">
        <div class="flex items-center">
            <span class="mr-5 sm:mr-2">製程檔案修改</span>
            <router-link to="/product_set" class="flex items-center sm:hidden">
                <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">
                <span> 返回產品設定</span>
                </button>
            </router-link>
        </div>
    </h1>
    <div class="mb-5 w-full shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                <i class="pe-7s-ticket pe-lg pe-va"></i>
                <span class="ml-2">製程修改</span>
            </span>
            <!-- <button class="mr-2 btn bg-blue-basic text-white" @click="btnEdit">新增檔案</button> -->
        </div>
        <div class="py-6 px-4">
            <form action="" class="w-full">
                <div class="px-4 text-sm">
                    <div class="flex flex-wrap">
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="title" class="pl-2">製程名稱</label></div>
                            <div><input type="text" id="title" class="myInput w-full" v-model="editData.title"></div>
                        </div>
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="std" class="pl-2">標準時間/秒</label></div>
                            <div><input type="number" id="std" class="myInput w-full" v-model="editData.std"></div>
                        </div>
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="pin" class="pl-2">針數</label></div>
                            <div><input type="number" id="pin" class="myInput w-full" v-model="editData.pin"></div>
                        </div>
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div> <label for="lowerlimit" class="pl-2">公差下限</label></div>
                            <div> <input type="number" id="lowerlimit" class="myInput w-full" v-model="editData.lowerlimit"></div>
                        </div>
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="upperlimit" class="pl-2">公差上限</label></div>
                            <div><input type="number" id="upperlimit" class="myInput w-full" v-model="editData.upperlimit"></div>  
                        </div>
                   
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="cut" class="pl-2">切線</label></div>
                            <div><input type="number" id="cut" class="myInput w-full" v-model="editData.cut"></div>
                        </div>
                        <div class="mr-2 mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="multiple" class="pl-2">倍數</label></div>
                            <div><input type="number" id="multiple" class="myInput w-full" v-model="editData.multiple"></div>
                        </div>
                        <div class="mb-5 w-2/12 md:w-3/12 sm:w-5/12">
                            <div><label for="description" class="pl-2">計算方式</label></div>
                            <div class="w-full">
                                <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic" v-model="editData.description">
                                    <option v-for="(item,index) in vfors" :key="index">
                                        {{item}}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                     <div class="flex mb-2">
                        <button class="mr-2 btn bg-yellow-500 text-white">Sample</button>
                        <button class="btn bg-blue-basic text-white">儲存</button>
                    </div>
                    <hr class="my-5">
                </div>
            </form>
            <div>
                <div class="flex items-center justify-between mb-5">
                    <div class="flex items-center">
                        <button class="btn bg-blue-basic text-white" @click="changeFile('getPhotos')">
                            <span class="sm:hidden">圖片</span>
                            <span class="hidden sm:inline"><i class="pe-7s-photo pe-lg pe-va"></i></span>
                        </button>
                        <button class="mx-2 sm:mx-px btn bg-blue-basic text-white"  @click="changeFile('getVideos')">
                            <span class="sm:hidden">影片</span>
                            <span class="hidden sm:inline"><i class="pe-7s-video pe-lg pe-va"></i></span>
                        </button>
                        <button class="btn bg-blue-basic text-white"  @click="changeFile('getDocs')">
                            <span class="sm:hidden">文件</span>
                            <span class="hidden sm:inline"><i class="pe-7s-file pe-lg pe-va"></i></span>
                        </button>
                    </div>
                    <button class="btn bg-green-btn text-white" @click="btnAdd">
                        新增<span class="sm:hidden">檔案</span>
                    </button>
                </div> 
                <div>
                    <div v-if="showFile == 'getPhotos'" class="flex flex-wrap">
                        <div v-for="(getPhoto,index) in getPhotos" :key="'getPhoto'+index" class="mr-5 sm:mr-2 mb-5">
                            <div class="bg-gray-300 w-48 h-48">
                                <img :src="'./'+getPhoto" alt="" class="w-full h-full">
                            </div>
                            <div class="flex w-48">
                                <div class="text-center w-9/12 overflow-hidden">{{getPhoto}}</div>
                                <div class="w-3/12">
                                    <span class="text-blue-basic hover:bg-gray-200 cursor-pointer"><i class="pe-7s-trash pe-lg"></i></span>
                                    <span class="text-blue-basic hover:bg-gray-200 cursor-pointer"><i class="pe-7s-pen pe-lg"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="showFile == 'getVideos'" class="flex flex-wrap">
                        <div v-for="(getVideo,index) in getVideos" :key="'getVideo'+index" class="mr-5 sm:mr-2 mb-5">
                            <div class="bg-gray-300 w-48 h-48">
                                <video class="w-full h-full" controls>
                                    <source :src="'./'+getVideo" type="video/mp4">
                                </video>
                            </div>
                            <div class="flex w-48">
                                <div class="text-center w-9/12 overflow-hidden">{{getVideo}}</div>
                                <div class="w-3/12">
                                    <span class="text-blue-basic hover:bg-gray-200 cursor-pointer"><i class="pe-7s-trash pe-lg"></i></span>
                                    <span class="text-blue-basic hover:bg-gray-200 cursor-pointer"><i class="pe-7s-pen pe-lg"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="showFile == 'getDocs'">
                        <table class="table-fixed w-full">
                            <thead>
                                <tr>
                                    <th class="w-1/12">編號</th>
                                    <th class="w-7/12">檔名</th>
                                    <th class="w-2/12">修改</th>
                                    <th class="w-2/12">刪除</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(getDoc,index) in getDocs" :key="'getDoc'+index">
                                    <td class="text-center">{{index+1}}</td>
                                    <td class="text-center overflow-hidden">{{getDoc}}</td>
                                    <td class="text-center py-2 sm:border-r">
                                        <span class="sm:hidden btn bg-red-400 text-white hover:bg-opacity-80 cursor-pointer">
                                            <i class="pe-7s-pen pe-lg"></i>
                                        </span>
                                        <span class="hidden sm:inline text-red-400 hover:text-red-600 hover:bg-red-200 rounded cursor-pointer"><i class="pe-7s-pen pe-lg"></i></span>
                                        
                                    </td>
                                    <td class="text-center">
                                        <span class="sm:hidden btn bg-red-400 text-white hover:bg-opacity-80 cursor-pointer">
                                            <i class="pe-7s-trash pe-lg"></i>
                                        </span>
                                        <span class="hidden sm:inline text-red-400 hover:text-red-600 hover:bg-red-200 rounded cursor-pointer"><i class="pe-7s-trash pe-lg"></i></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div v-else>尚無資料</div>
                </div>
            </div>
        </div>
    </div>
</template>