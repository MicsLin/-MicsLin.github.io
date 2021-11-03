import { createStore } from "vuex";
import axios from 'axios'

export default createStore({
    state(){
        return{
            // onClick系列，是解決windows.onclick事件，關閉所有選單。
            onClickAway:{
                hamburger:false,
                gear:false,
                admin:false
            },
            language:'jp',
            madel:{
                isPopup:false,
                formName:'',
                otherData:'',
                otherData2:''  
            }  
        }
    },
    getters:{
        onClickAway(state){
            return  state.onClickAway
        },
        getMadel(state){
            return state.madel
        }
    },
    mutations:{
        onClickAwayHam(state){
            state.onClickAway.hamburger = false
        },
        onClickHam(state){
            state.onClickAway.hamburger = true
        },
        onClickGear(state){
            state.onClickAway.gear = true
        },
        onClickAwayGear(state){
            state.onClickAway.gear = false
        },
        onClickAdmin(state){
            state.onClickAway.admin = true
        },
        onClickAwayAdmin(state){
            state.onClickAway.admin = false
        },
        onPopupForm(state,data){
            state.madel.isPopup = true
            state.madel.formName = data
        },
        onPopupOtherData(state,data){
            state.madel.otherData = data
        },
        onPopupOtherData2(state,data){
            state.madel.otherData2 = data
        },
        offPopupForm(state){
            state.madel.isPopup = false
            state.madel.formName = ''
            state.madel.otherData = ''
            state.madel.otherData2 = ''
        }
    },
    actions:{

    }
})