<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from "vuex";
    const router =useRouter()
    const store = useStore()

    const props = defineProps({
        productionName:String,
        productionSize:String
    })
    const btnEdit = function(){
        store.commit('onPopupForm','productAddEdit')
        store.commit('onPopupOtherData',props.productionName)
        store.commit('onPopupOtherData2',props.productionName)
    }
    //獲取產品
     const product_set_lists=ref([
        {title:'Nike',description:'標準',number:9},
        {title:'Adidas2',description:'8號',number:6},
        {title:'Nike2',description:'切線',number:10},
        {title:'Adidas',description:'9號',number:7},
        {title:'Puma',description:'標準',number:9},
        {title:'2020',description:'切線',number:9},
        {title:'切',description:'8號',number:9}
    ])
    //新增製程
    const btnAdd = function(){
        store.commit('onPopupForm','processAdd')
    }

    //製作程序資料
    const getProccess = ref([
        {title:'製程1',std:10.5,pin:100,upperlimit:2,lowerlimit:3,cut:1,multiple:1,description:'以切線計'},
        {title:'製程2',std:18.6,pin:152,upperlimit:2,lowerlimit:1,cut:1,multiple:1,description:'以針數計'},
        {title:'製程3',std:20.4,pin:32,upperlimit:5,lowerlimit:4,cut:1,multiple:1,description:'標準計算'},
        {title:'製程4',std:2.1,pin:100,upperlimit:50,lowerlimit:50,cut:1,multiple:1,description:'以手動計'},
        {title:'製程5',std:0.6,pin:1,upperlimit:1,lowerlimit:1,cut:0,multiple:1,description:'標準計算'},
    ])

    //警示
    const isActive = ref(false)
        //完成(新增產品)
        const isAdd = ref(false)
        const postForm = function(){
            if(getProccess.value){
                isAdd.value =true
            }else{
                //沒有製程 顯示新增製程
                isActive.value = true
            }   
            
        }
        const btnNext = function(){
            //完成新增產品後
            //因為是新增 所以id會是最後一個
            let productID = product_set_lists.value.length-1
            router.push({ name: "ProductLine",params:{productID:productID}});
        }
        const btnClose = function(){
            isActive.value = false
        }
    //顯示圖片
    const showPhoto=function(){
        store.commit('onPopupForm','showPhoto')
    }
     const showVideo=function(){
        store.commit('onPopupForm','showVideo')
    }
    const showDoc = function(){
        store.commit('onPopupForm','showDoc')
    }
    const showAll = function(){
         store.commit('onPopupForm','showAll')
    }
</script>

<template>
    <h1 class="flex items-center justify-between mb-8 sm:mb-4 text-4xl text-gray-600">
        <div class="flex items-center">
            <span class="mr-5 sm:mr-2">新增產品</span>
            <router-link to="/product_set" class="flex items-center sm:hidden">
                <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" @click="isAdd = false">
                    <span> 返回產品設定</span>
                </button>
            </router-link>
        </div>
        <button class="btn bg-green-btn text-white float-right" v-if="isAdd == true" @click="btnNext">產線/產品設定</button>
    </h1>
     <!--警示 -->
    <div class="flex items-center justify-between mb-6 px-8 sm:px-4 w-full h-16 bg-red-300 text-red-600 font-bold rounded shadow"
        :class="{'hidden':!isActive}">    
        <span>尚無製程，請新增至少一個製程</span>
        <span class="flex text-xl text-red-400 text-opacity-70 cursor-pointer hover:text-red-900" @click="btnClose">
            <i class="pe-7s-close pe-lg pe-va"></i>
        </span>
    </div>
    <div class="mb-5 w-full shadow">
        <div class="flex sm:block items-center justify-between h-16 sm:h-auto sm:py-2 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <div class="sm:mb-2 w-2/4 sm:w-full">
                <span class="flex sm:block items-center justify-between text-xl sm:text-lg">
                    <p >產品：{{props.productionName}}</p>
                    <p >尺寸：{{props.productionSize}}</p>
                </span>
            </div>
            <div>
                <router-link to="/product_set" class="hidden sm:inline sm:mr-2">
                    <button class="bg-gray-400 hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none">
                        <span>返回</span>
                    </button>
                </router-link>
                <button class="mr-2 btn bg-blue-basic text-white" @click="btnEdit">更換</button>
                <button class="btn bg-blue-basic text-white" v-if="getProccess[0].title" @click="postForm">完成</button>
            </div>
        </div>
    </div>
    <div class="w-full md:w-full md:shadow">
        <div class="flex items-center justify-between h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                <i class="pe-7s-ticket pe-lg pe-va"></i>
                <span class="ml-2">製程清單</span>
            </span>
            <button class="btn bg-blue-basic text-white" @click="btnAdd">新增製程</button>
        </div>
        <div class="px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm shadow md:shadow-none">
            <sup class="sm:hidden float-right text-red-500">-- 若無製程，請先新增。--</sup> 
            <sup class="sm:hidden pl-4 float-left text-purple-500">--點選以下清單，修改製程。--</sup>
            <div class="hidden sm:block"> <sup class="pl-4 text-red-500">--若無製程，請先新增。--</sup> </div>
            <div class="hidden sm:block"><sup class="pl-4 text-purple-500">--點選以下清單，修改製程。--</sup></div>  
            <div class="mt-5 sm:mt-0">
                <table class="w-full">
                    <thead>
                        <tr>
                            <th class="border">製程<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">標準時間/秒<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">針數<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">公差下限<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">公差上限<i class="pe-7s-angle-down pe-lg pe-va"></i></th>
                            <th class="border">切線<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="border">倍數<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="border py-2">計算方法<i class="pe-7s-angle-up pe-lg pe-va"></i></th>
                            <th class="sm:hidden border">圖片</th>
                            <th class="sm:hidden border">影片</th>
                            <th class="sm:hidden border">文件</th>
                            <th class="hidden sm:table-cell border">圖文</th>
                            <th class="border">刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="cursor-pointer" v-for="(proccess,index) in getProccess" :key="proccess+index">
                           <td class="border pl-2">
                                <div></div>
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}">
                                    <div class="w-full h-full">{{proccess.title}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.std}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.pin}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.upperlimit}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.lowerlimit}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full">{{proccess.cut}}</div>
                                </router-link>
                            </td>
                            <td class="border text-center">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full"> {{proccess.multiple}}</div>
                                </router-link>
                            </td>
                            <td class="border pl-2">
                                <router-link :to="{name:'ProductSetEditNext',params:{index:index}}" >
                                    <div class="w-full h-full"> {{proccess.description}}</div>
                                </router-link>
                            </td>
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file" accept="image/*" id="filePhoto" class="hidden">
                                <label for="filePhoto" class="btn bg-blue-basic text-white cursor-pointer" @click.prevent="showPhoto">
                                    <span class="lg:hidden">圖片</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-photo pe-lg pe-va"></i></span>
                                </label>
                            </td>
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file"  accept="video/*,audio/*" id="fileVideo" class="hidden">
                                <label for="fileVideo" class="btn bg-blue-basic text-white cursor-pointer"  @click.prevent="showVideo">
                                    <span class="lg:hidden">影片</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-video pe-lg pe-va"></i></span> 
                                </label>
                            </td>
                            <td class="sm:hidden border cursor-text text-center">
                                <input type="file" accept="application/*" id="fileDoc" class="hidden">
                                <label for="fileDoc" class="btn bg-blue-basic text-white cursor-pointer" @click.prevent="showDoc">
                                    <span class="lg:hidden">文件</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-file pe-lg pe-va"></i></span>
                                </label>
                            </td>
                            <!-- 圖 影 文 三個合併 避免手機板會破圖 -->
                            <td class="hidden sm:table-cell bg-blue-basic text-center text-white  border cursor-piont">
                                <span @click.prevent="showAll"><i class="pe-7s-next-2 pe-lg pe-va"></i></span>
                            </td>
                            <td class="py-2 border cursor-text sm:cursor-pointer sm:bg-red-500 text-center sm:text-white">
                                <button class="sm:hidden btn bg-red-500 text-white">
                                    <span class="lg:hidden">刪除</span> 
                                    <span class="hidden lg:inline"><i class="pe-7s-trash pe-lg pe-va"></i></span>
                                </button>
                                <span class="hidden sm:inline"><i class="pe-7s-trash pe-lg pe-va"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
    </div>
</template>