<script setup>
    import {ref,watch} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()

    const product_set_lists=ref([
        {title:'Nike',description:'標準',number:9},
        {title:'Adidas2',description:'8號',number:6},
        {title:'Nike2',description:'切線',number:10},
        {title:'Adidas',description:'9號',number:7},
        {title:'Puma',description:'標準',number:9},
        {title:'2020',description:'切線',number:9},
        {title:'切',description:'8號',number:9},
    ])
    const sort_direction=ref('')
    const sort_lists=ref([
        {title:'Nike',description:'標準',number:9},
        {title:'Adidas2',description:'8號',number:6},
        {title:'Nike2',description:'切線',number:10},
        {title:'Adidas',description:'9號',number:7},
        {title:'Puma',description:'標準',number:9},
        {title:'2020',description:'切線',number:9},
        {title:'切',description:'8號',number:9},
    ])
    // 篩選
    const sortData=function(whitchData){
        if(whitchData == 'productName'){
            let arrow_item ='sort_description_arrow'
            this.mysortdata('title','sort_title_arrow')
            this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }
        if(whitchData == 'productSize'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('description','sort_description_arrow')
            this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }
    }
    const mysortdata=function(item,arrow_item){
        let sort_lists=this.sort_lists
        let sort_direction=this.sort_direction
        let mapped = sort_lists.map(function(el) {
            return {title:el.title.toLowerCase(),description:el.description.toLowerCase(),number:el.number}
        })
        console.log(mapped);
        if(sort_direction =='asc'){
            this.sort_direction ='desc'
            this.$refs[arrow_item].innerHTML=`<i class="fas fa-chevron-down"></i>`
            mapped.sort(function(a,b){
                return b[item].localeCompare(a[item]);
            })
            return this.sort_lists = mapped
            
        }else if(sort_direction=='desc'){
            this.sort_direction =''
            this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
            return this.sort_lists = this.product_set_lists
                
        }else{
            this.sort_direction ='asc'
            this.$refs[arrow_item].innerHTML=`<i class="fas fa-chevron-up"></i>`
            mapped.sort(function(a,b){
                return a[item].localeCompare(b[item]);
            })
            return this.sort_lists = mapped   
        } 
    }
    //修改(之後可能改成傳id到LineEdit 之後LineEdit修改的值就直接傳到後端修改，就不用props到這裡)
    const editID = ref()
    const btnEdit = function(index){
        editID.value = index
        store.commit('onPopupForm','productEdit')
        store.commit('onPopupOtherData',sort_lists.value[index].title)
        store.commit('onPopupOtherData2',sort_lists.value[index].description)
    }
    const props = defineProps({
        productionName:String,
        productionSize:String
    })
    watch(props,()=>{
        sort_lists.value[editID.value].title = props.productionName
        sort_lists.value[editID.value].description = props.productionSize
    })

    //新增
    const btnSave = function(){
        store.commit('onPopupForm','productAdd')
    }

    const isActive=ref(false)
    const showInfo = ref('')
    // const btnSave = function(){
    //     isActive.value = true
    //     showInfo.value = '新增成功'

    // }
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
    <h1 class="flex justify-between sm:block mb-8 sm:mb-4 text-4xl text-gray-600">
        <span>產品設定</span>
        <router-link to="/product_line">
            <button class="btn bg-green-btn text-white float-right">產線/產品設定</button>
        </router-link>       
    </h1>
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
                    <i class="pe-7s-ticket pe-lg pe-va"></i>
                    <span class="ml-3">產品搜尋</span>
                </span>
            </div>
            <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" @click="btnSave">新增產品</button>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <!-- 搜尋 -->
            <div class="flex items-center justify-between mb-6 sm:mb-4 w-full">
                <div class="flex items-center relative">
                    <span class="sm:hidden">關鍵字搜尋:</span>  
                    <input type="search" class="ml-2 sm:ml-0 form-control myInput w-80 md:w-72 sm:w-auto" placeholder="搜尋">
                    <button type="button" class="absolute right-0 btn bg-blue-basic text-white" @click="btnSave">搜尋</button>   
                </div>
                <button type="button" class="btn bg-blue-basic text-white" @click="btnSave">顯示全部</button> 
            </div>
            <sup class="text-purple-500">--點選以下清單，進入該產品的製程設定--</sup>
            <table class="table-fixed w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" @click="sortData('productName')">
                            <span>產品名稱</span>
                            <i class="pe-7s-angle-down pe-lg pe-va"></i>
                        </th>
                        <th class="border border-gray-300" @click="sortData('productSize')">
                            <span>尺寸</span>
                            <i class="pe-7s-angle-down pe-lg pe-va"></i>
                        </th>
                        <th class="border border-gray-300 w-1/12">修改</th>
                        <th class="border border-gray-300 w-1/12">刪除</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(product_set_list,index) in sort_lists" :key="index">
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'ProductSetEdit',params:{productionName:product_set_list.title,productionSize:product_set_list.description}}">
                                <div class="pl-2">{{product_set_list.title}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'ProductSetEdit',params:{productionName:product_set_list.title,productionSize:product_set_list.description}}">
                                <div class="pl-2">{{product_set_list.description}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-blue-400 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn lg:px-2 md:px-1 bg-blue-400 text-white sm:hidden" @click="btnEdit(index)">修改</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnEdit(index)">E</span>
                            </div>
                        </td>
                        <td class="border border-gray-300">
                            <div class="flex items-center justify-center sm:bg-red-500 sm:rounded-2xl sm:hover:opacity-70">
                                <button type="button" class="btn lg:px-2 md:px-1 bg-red-500 text-white sm:hidden" @click="btnDelete">刪除</button>
                                <span class="hidden sm:block text-white h-11/12 cursor-pointer" @click="btnDelete">X</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>    
</template>
