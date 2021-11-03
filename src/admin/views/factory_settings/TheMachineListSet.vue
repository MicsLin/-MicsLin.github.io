<script setup>
    import {ref} from 'vue'
    const machine_set_lists=ref([
        {main:'Machine04',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine03',currency:'Nike03',product:'Adidas09',cmp:'cmp2',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine01',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine08',currency:'Nike07',product:'Adidas02',cmp:'cmp13',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine06',currency:'Adidas01',product:'Nike2',cmp:'cmp8',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine07',currency:'Adidas03',product:'Adidas02',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine010',currency:'Adidas01',product:'Nike6',cmp:'cmp18',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine05',currency:'Nike06',product:'Nike6',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine012',currency:'Adidas01',product:'Nike2',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
    ])
    const sort_direction=ref('')
    const sort_lists=ref([
        {main:'Machine04',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine03',currency:'Nike03',product:'Adidas09',cmp:'cmp2',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine01',currency:'Nike01',product:'Nike1',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine08',currency:'Nike07',product:'Adidas02',cmp:'cmp13',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine06',currency:'Adidas01',product:'Nike2',cmp:'cmp8',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine07',currency:'Adidas03',product:'Adidas02',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine010',currency:'Adidas01',product:'Nike6',cmp:'cmp18',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine05',currency:'Nike06',product:'Nike6',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
        {main:'Machine012',currency:'Adidas01',product:'Nike2',cmp:'cmp1',brand:'尚未設定',machine_type:'尚未設定',machine_no:'尚未設定',operator:'尚未設定'},
    ])
    // 篩選
    const sortData=function(whitchData){
        if(whitchData == 'main'){
            let arrow_item ='sort_description_arrow'
            this.mysortdata('main','sort_title_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }
        if(whitchData == 'currency'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('currency','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }
        if(whitchData == 'product'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('product','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }if(whitchData == 'cmp'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('cmp','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }if(whitchData == 'brand'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('brand','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }if(whitchData == 'machine_type'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('machine_type','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }if(whitchData == 'machine_no'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('machine_no','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }if(whitchData == 'operator'){
            let arrow_item ='sort_title_arrow'
            this.mysortdata('operator','sort_description_arrow')
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
        }
    }
    const mysortdata=function(item,arrow_item){
        let sort_lists=this.sort_lists
        let sort_direction=this.sort_direction
        let mapped = sort_lists.map(function(el) {
            return {main:el.main.toLowerCase(),currency:el.currency.toLowerCase(),product:el.product,cmp:el.cmp,brand:el.brand,machine_type:el.machine_type,machine_no:el.machine_no,operator:el.operator}
        })
        if(sort_direction =='asc'){
            this.sort_direction ='desc'
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-chevron-down"></i>`
            mapped.sort(function(a,b){
                return b[item].localeCompare(a[item]);
            })
            return this.sort_lists = mapped
            
        }else if(sort_direction=='desc'){
            this.sort_direction =''
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-sort"></i>`
            return this.sort_lists = this.machine_set_lists
                
        }else{
            this.sort_direction ='asc'
            // this.$refs[arrow_item].innerHTML=`<i class="fas fa-chevron-up"></i>`
            mapped.sort(function(a,b){
                return a[item].localeCompare(b[item]);
            })
            return this.sort_lists = mapped   
        } 
    }

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
    //刪除
    const btnDelete = function(){
        // alert('刪除?')
        isActive.value = true
        showInfo.value = '刪除成功'
    }
</script>

<template>
    <!-- 之後要增加分頁功能，避免直接有800個資料顯示 影響讀取!!!!!!!!!!!!!! -->
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">機台設定清單</h1>
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
                    <i class="pe-7s-radio pe-lg pe-va"></i>
                    <span class="ml-3 mr-1">機台清單</span>
                    <!-- 總數 -->
                    <span>(803)</span>
                </span>
            </div>
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
            <sup class="text-purple-500">--點選以下清單，進入機台設定--</sup>
            <table class="table-fixed w-full">
                <!-- pe-7s-refresh-2 上下-->
                <!-- pe-7s-angle-up 上-->
                <!-- pe-7s-angle-down 下-->
                <!-- pe-7s-repeat 要旋轉90度-->
                <thead>
                    <tr>
                        <th class="border border-gray-300 py-3" @click="sortData('main')">
                            <div>
                                <span>機台</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-angle-up"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('currency')">
                            <div>
                                <span>目前的生產線</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-angle-down"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300"  @click="sortData('product')">
                            <div class="font-bold">
                                <span>產品</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-repeat transform -rotate-90"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('cmp')">
                            <div>
                                <span>製程</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-refresh-2"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('brand')">
                            <div>
                                <span>廠牌</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-refresh-2"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('machine_type')">
                            <div>
                                <span>車型</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-refresh-2"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('machine_no')">
                            <div>
                                <span>編號</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-refresh-2"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300" @click="sortData('operator')">
                            <div>
                                <span>操作人員</span> 
                                <span ref="sort_description_arrow" class="ml-1 text-lg">
                                    <!-- <i class="fas fa-sort"></i> -->
                                    <i class="pe-7s-refresh-2"></i>
                                </span>
                            </div>
                        </th>
                        <th class="border border-gray-300 w-1/12">刪除</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(machine_set_list,index) in sort_lists" :key="index">
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.main}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.currency}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.product}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.cmp}}</div>
                            </router-link>  
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.brand}}</div>
                            </router-link>
                        </td>
                        <td class="border border-gray-300 overflow-hidden">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.machine_type}}</div>
                            </router-link>  
                        </td>
                        <td class="border border-gray-300">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.machine_no}}</div>
                            </router-link>  
                        </td>
                        <td class="border border-gray-300">
                            <router-link :to="{name:'MachinelistSetLink',
                            params:{machine:machine_set_list.main,line:machine_set_list.currency}}">
                                <div>{{machine_set_list.operator}}</div>
                            </router-link>  
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