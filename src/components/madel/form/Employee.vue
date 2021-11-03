<script setup>
    import VCalendar from '../../../components/efficiency/VCalendar.vue'
    import {ref} from 'vue'
    import { useStore } from "vuex";
    const store = useStore()
  
    //關閉
     const offPopupForm=function(){
        store.commit('offPopupForm')
        // 並且要刪除表單的資廖
    }
    const gender = ref([
        {title:'d',description:'男'},
        {title:'d',description:'女'}
    ])
</script>

<template>
    <div class="overscroll-auto">
        <h2 class="pl-4 py-2 text-gray-400">新增員工</h2>
        <hr class="mb-8 sm:mb-4">
        <form action="" class="px-4 text-gray-500 text-sm">
            <div class="flex mb-8 sm:mb-4">
                <div class="relative w-full">
                    <label for="lastName" class="absolute -top-5 left-0 sm:hidden">姓氏</label>
                    <input type="text" id="lastName" class="myInput w-full" placeholder="姓氏 ex:Chen">
                </div>
                <div class="relative mx-3 w-full">
                    <label for="firstName" class="absolute -top-5 left-0 sm:hidden">名字</label>
                    <input type="text" id="firstName" class="myInput w-full" placeholder="名字 ex:Kevin">
                </div>
                <div class="relative w-full">
                    <label for="middletName" class="absolute -top-5 left-0 sm:hidden">中間名</label>
                    <input type="text" id="middleName" class="myInput w-full" placeholder="中間名 ex:D">
                </div>
            </div>
            <div class="flex mb-8">
                <div class="relative w-full mr-3">
                    <label for="IDNumber" class="absolute -top-5 left-0 sm:hidden">編號</label>
                    <input type="text" id="IDNumber" class="myInput w-full" placeholder="編號 ex:KT100010">
                </div>
                <div class="relative w-full">
                    <label  class="absolute -top-5 left-0 sm:hidden">性別</label>
                    <select class="custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic">
                        <option v-for="(item,index) in gender" :key="index" :selected="index ==0">
                            {{item.description}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex mb-8 sm:mb-4">
                <!-- date -->
                <div class="relative w-full mr-3">
                    <label  class="absolute -top-5 left-0">生日</label>
                    <VCalendar  placeholder="YYYY-mm-dd" />
                </div>
                <div class="relative w-full">
                    <label  class="absolute -top-5 left-0">到職日期</label>
                    <VCalendar  placeholder="YYYY-mm-dd" />
                </div>
            </div>
            <div class="flex mb-8 sm:mb-4">
                 <div class="relative w-full">
                    <label for="factory" class="absolute -top-5 left-0 sm:hidden">廠區</label>
                    <input type="text" id="factory" class="myInput w-full" placeholder="廠區 ex:Factory 01">
                </div>
                 <div class="relative w-full mx-3">
                    <label for="department" class="absolute -top-5 left-0 sm:hidden">部門</label>
                    <input type="text" id="department" class="myInput w-full" placeholder="部門 ex:Depart 02">
                </div>
                 <div class="relative w-full">
                    <label for="productionLine" class="absolute -top-5 left-0 sm:hidden">生產線</label>
                    <input type="text" id="productionLine" class="myInput w-full" placeholder="生產線 ex:line 03">
                </div>
            </div>
            <div class="flex mb-8 sm:mb-4">
                <div class="relative w-full mr-3">
                    <label for="phoneNumber" class="absolute -top-5 left-0 sm:hidden">電話</label>
                    <input type="text" id="phoneNumber" class="myInput w-full" placeholder="電話 ex:0911-123456">
                </div>
                <div class="relative w-full">
                    <label for="address" class="absolute -top-5 left-0 sm:hidden">地址</label>
                    <input type="text" id="address" class="myInput w-full" placeholder="地址 ex:Taichung,Taiwan">
                </div>
            </div>
            <div class="flex mb-8 sm:mb-4">
                <div class="relative w-full mr-3">
                    <label for="emergencyContact" class="absolute -top-5 left-0 sm:hidden">緊急聯絡人</label>
                    <input type="text" id="emergencyContact" class="myInput w-full" placeholder="緊急聯絡人 ex:Parents">
                </div>
                <div class="relative w-full">
                    <label for="emergencyNumber" class="absolute -top-5 left-0 sm:hidden">緊急聯絡人電話</label>
                    <input type="text" id="emergencyNumber" class="myInput w-full" placeholder="緊急聯絡人電話 ex:0922-123456">
                </div>
            </div>
            <div class="flex">
                <div class="relative w-full mr-3">
                    <label for="calculate" class="absolute -top-5 left-0 sm:hidden">技能</label>
                    <input type="text" id="calculate" class="myInput w-full" placeholder="技能 ex:Calculate">
                </div>
                <div class="relative w-full">
                    <label for="note" class="absolute -top-5 left-0 sm:hidden">備註</label>
                    <input type="text" id="note" class="myInput w-full" placeholder="備註 ex:Parents">
                </div>
            </div>
            <hr class="mt-3 mb-2">
            <div class="px-4 py-2 float-right">
                <button class=" mr-2 btn bg-gray-300" @click.prevent="offPopupForm">關閉</button>
                <button type="submit" class="btn bg-blue-basic text-white">儲存</button>
            </div>
        </form>
    </div>
</template>