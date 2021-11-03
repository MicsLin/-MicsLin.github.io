<script setup>
    import Hamburger from'./navbar/Hamburger.vue'
    import Gear from './navbar/Gear.vue'
    import Administrator from './navbar/Administrator.vue'
    import {computed} from 'vue';
    import { useStore } from "vuex";
    const store = useStore()
    //語言
    const getLanguage = computed(()=>{
        let lang = store.state.language.toLowerCase()
        return lang.replace(/^./, lang[0].toUpperCase())
    })
    //漢堡 onClick
    const getHam = computed(()=>{
        return store.getters.onClickAway.hamburger
    })
    const onClickHam=function(){
        if(getHam.value){
            store.commit('onClickAwayHam')
        }else{
            store.commit('onClickHam')
        }
    }
    const onClickAwayHam = function(){
        store.commit('onClickAwayHam')
    }
   //Gear總攬 onClick
    const getGear = computed(()=>{
        return store.getters.onClickAway.gear
    })
    const onClickGear=function(){
        if(getGear.value){
            store.commit('onClickAwayGear')
        }else{
            store.commit('onClickGear')
        }
    }
    const onClickAway_Gear = function(){
        store.commit('onClickAwayGear')
    }
    //會員 onClick
    const getAdmin = computed(()=>{
        return store.getters.onClickAway.admin
    })
    const onclickAdmin =function(){
        if(getAdmin.value){
            store.commit('onClickAwayAdmin')
        }else{
            store.commit('onClickAdmin')
        }
    }
    const onClickAway_Admin=function(){
        store.commit('onClickAwayAdmin')
    }
</script>

<template>
    <nav class="h-12 bg-black text-white text-base flex justify-between items-center px-4">
        <div class="flex items-center justify-center ">
            <!-- 漢堡 -->
            <span class="cursor-pointer" @click="onClickHam" v-click-away="onClickAwayHam"> 
                <i class="pe-7s-menu pe-lg pe-2x pe-fw pe-va text-white" ></i>
                <div class="absolute z-50 top-12 left-0  w-64 h-screen transition-all shadow-lg bg-white" :class="{'-left-72':!getHam}">
                    <Hamburger />
                </div>
                <div class="absolute z-40 top-12 left-0 w-full h-screen bg-gray-300 bg-opacity-50 cursor-default" :class="{'hidden':!getHam}" ></div>
                <!-- <div class="absolute z-50 top-12 left-0  w-64 h-screen transition-all shadow-lg bg-white" :class="{'-left-72':!getHam}" >
                    <Hamburger />
                </div>  -->
            </span>
            <!-- 文字 -->
            <div class="mr-1 tracking-widest">
                <span class="mx-1 text-blue-basic">YHHISM</span>
                <span class="mx-1 sm:hidden">PMS</span>
                <span class="mr-4 sm:hidden">ADMIN</span>
            </div>  
            <sup class="text-gray-400 lg:hidden">Design by ISM 版本1.5.6</sup>
            <sup class="text-gray-400 hidden lg:block md:hidden">ISM v-1.5.6</sup>
        </div>
        <div class="text-sm flex items-center justify-center ">
            <ul class="flex m-auto ">
                <li @click="onClickGear" class="list-none  cursor-pointer hover:underline relative" v-click-away="onClickAway_Gear" >
                    <i class="pe-7s-config pe-lg pe-2x pe-fw pe-va"></i>
                    <div class="w-40 absolute top-10 z-50 py-1.5 rounded bg-white text-black shadow" :class="{'hidden':!getGear}">
                        <!-- 手機板 可能要做Gear2 將選單改成 超連結a 連結到另一個選單是方塊的網頁 -->
                        <Gear />
                    </div>
                </li>
                <li class="hidden list-none ml-2.5 cursor-pointer hover:underline md:block relative">
                    <i class="pe-7s-global pe-lg pe-2x pe-fw pe-va"></i>
                    <span class="absolute -right-1 -bottom-1 bg-blue-basic">{{getLanguage}}</span>
                </li>
                <li class="list-none ml-2.5 cursor-pointer hover:underline md:hidden" :class="{'hidden':getLanguage=='Zh'}">繁體中文 </li>
                <li class="list-none ml-2.5 cursor-pointer hover:underline md:hidden" :class="{'hidden':getLanguage=='Cn'}" >简体中文</li>
                <li class="list-none ml-2.5 cursor-pointer hover:underline md:hidden" :class="{'hidden':getLanguage=='Jp'}">日本語</li>
                <li class="list-none ml-2.5 cursor-pointer hover:underline md:hidden" :class="{'hidden':getLanguage=='En'}">ENGLISH</li>
                <li  @click="onclickAdmin" class="relative flex list-none ml-4 lg:ml-2 md:ml-4 cursor-pointer hover:underline" v-click-away="onClickAway_Admin">
                    <span class="ml-1">
                        <svg class="w-5 h-5 stroke-current stroke-2  text-white" viewBox="0 0 44.02 43">
                            <path d="M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z" class="line"></path>
                        </svg>
                    </span>
                    <span class="ml-4 lg:ml-1 md:ml-2 sm:hidden">Administrator</span>
                    <span :class="{hidden:!getAdmin}">
                        <i class="pe-7s-angle-up pe-lg pe-2x pe-fw pe-va"></i>
                    </span>
                    <span :class="{hidden:getAdmin}">        
                        <i class="pe-7s-angle-down pe-lg pe-2x pe-fw pe-va"></i>
                    </span>
                    <div class="w-40 absolute top-10 sm:right-0 z-50 py-1.5 rounded bg-white text-black shadow" :class="{'hidden':!getAdmin}">
                        <Administrator />
                    </div>    
                </li>
            </ul>
        </div>
    </nav>
</template>