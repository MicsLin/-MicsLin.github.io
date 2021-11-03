<script setup>
import VCalendarRange from '../components/efficiency/VCalendarRange.vue'
import {ref} from 'vue'

            const production_line_lists=ref([
                {
                    title:"123",
                    description:"123"
                },
                {
                    title:"14Test",
                    description:"14Test"
                },
                {
                    title:"2F Demo",
                    description:"2F Demo"
                },
                {
                    title:"3F Demo",
                    description:"3F Demo"
                },
                {
                    title:"Addidas",
                    description:"Addidas"
                },
                {
                    title:"China App",
                    description:"China App"
                },
                {
                    title:"Btest",
                    description:"Btest"
                },
                {
                    title:"壓模",
                    description:"壓模"
                },
                {
                    title:"HSR",
                    description:"HSR"
                },
                {
                    title:"Nike",
                    description:"Nike"
                },
                {
                    title:"Line",
                    description:"Line"
                },
                {
                    title:"oldMachineTest",
                    description:"oldMachineTest"
                }
            ])
            const select_all=ref(false)
            const isSwitch_select_all=ref(false)
            const keyNumber=ref(0)
            const filter_result=({
                title:[1,2,3],
                start:'12',
                end:'24'
            })
            const myString=ref([
                {title:'MyTitle'},
                'MyString1','MyString2'
            ])     

        const switch_check_all=function(){
            if(isSwitch_select_all.value ==false){
                if(select_all.value){
                   keyNumber.value ++
                   console.log(keyNumber.value);
                }else{
                   select_all.value =true
                } 
                isSwitch_select_all.value=true     
            }else{
                select_all.value=false
                isSwitch_select_all.value=false
            }
        }
        const check_single=function(){
            isSwitch_select_all.value=false
        }
        const click_me=function(){

            console.log('1o404');

            // for (let index = 0; index < production_line_lists.length; index++) {
            //     const element = array[index];
                
            // }
        }
</script>
<template>
    <h1 class="flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600">產線效率查詢</h1>
    <div class="w-full shadow">
        <div class="flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text">
            <span class="flex items-center text-xl">
                <i class="pe-7s-target pe-lg pe-va"></i>
                <span class="ml-3">產線效率</span>
            </span>
        </div>
        <div class="px-8 sm:px-2 py-6 sm:py-4 text-gray-500 text-sm">
            <form action="">
                <div class="flex md:block  items-end mb-10">
                    <div class="mt-5">
                         <VCalendarRange />
                    </div>
                    <div class="ml-5 md:ml-0 md:mt-5  md:w-20">
                        <label class="flex items-center border border-blue-basic text-blue-basic hover:bg-blue-basic hover:text-gray-200 rounded px-4 py-2 cursor-pointer">
                            <input type="checkbox" id="check_all" name="check_all" :checked="isSwitch_select_all" @click="switch_check_all">
                            <p for="check_all" class="ml-1">全選</p>
                        </label>
                    </div>
                </div>
                
                <div>
                    <ul class="flex flex-wrap">
                        <li v-for="(select_production_line,index) in production_line_lists" :key="index" class="mb-5 w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 overflow-hidden">
                            <div class="flex items-center">
                                <label :for="'check'+index" class="bg-blue-basic hover:bg-opacity-70 text-white text-sm py-3 w-10/12 sm:w-full sm:mr-2  rounded focus:outline-none cursor-pointer">
                                    <div class="flex items-center justify-center">
                                        <input type="checkbox" :id="'check'+index" :name="'check'+index" :key="keyNumber" :checked="select_all" :ref="'check'+index" @click="check_single">
                                        <span class="ml-1">{{select_production_line.description}}</span>
                                    </div>
                                </label>  
                            </div>
                        </li>
                    </ul>
                </div>
                <router-link :to="{name:'EfficiencyDaily',params:{filterResult:myString}}">
                    <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" @click="click_me">送出</button>
                </router-link>
            </form>    
        </div>
    </div>
</template>

