import{m as e,P as t,o as l,a as r,j as s,v as a,d as o,F as i,l as c,n,t as d,r as u,b as p,w as b}from"./vendor.6f924201.js";import{_ as v}from"./index.c2d568a1.js";const y={class:"w-full"},m=["selected"];var x=v({props:{vfors:Array,userselect:String},setup(u){const p=u,b=e("");return t(b,(()=>{console.log("我是select",b.value)})),(e,t)=>(l(),r("div",y,[s(o("select",{class:"custom-select w-full text-sm h-9 pl-2 text-gray-500 border-2 rounded focus:outline-none focus:border-blue-basic",id:"inputGroupSelect04","onUpdate:modelValue":t[0]||(t[0]=e=>b.value=e)},[(l(!0),r(i,null,c(p.vfors,((e,t)=>(l(),r("option",{key:t,class:n("color"+e.value),selected:p.userselect==e.description},d(e.description),11,m)))),128))],512),[[a,b.value]])]))}},[["__scopeId","data-v-c527ce46"]]);const f=o("h1",{class:"flex sm:block mb-8 sm:mb-4 text-4xl text-gray-600"},"首頁設定",-1),g={class:"flex md:block justify-between"},h={class:"mr-5 md:mr-0 md:mb-5 w-auto shadow"},w=o("div",{class:"flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},[o("span",{class:"flex items-center text-xl"},[o("i",{class:"pe-7s-star pe-lg pe-va"}),o("span",{class:"ml-3 mr-1"},"一般設定")])],-1),k={class:"px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm"},S={class:"table-fixed w-full"},A=o("thead",{class:"hidden"},[o("tr",null,[o("th",{class:"border border-gray-300 py-3"}),o("th",{class:"border border-gray-300"})])],-1),_={class:"border-t border-gray-300 px-2 py-3 w-3/12"},H={class:"border-t border-gray-300 px-2 py-3"},C=["value"],I={class:"border-t border-gray-300 px-2 py-3"},j={class:"border-t border-gray-300 px-2 py-3"},N={class:"border-t border-gray-300 px-2 py-3"},Y={class:"border-t border-gray-300 px-2 py-3"},D=["value"],M={class:"mt-2"},F={class:"w-auto shadow"},G=o("div",{class:"flex items-center h-16 pl-8 sm:pl-4 pr-10 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},[o("span",{class:"flex items-center text-xl"},[o("i",{class:"pe-7s-speaker pe-lg pe-va"}),o("span",{class:"ml-3 mr-1"},"警示功能")])],-1),P={class:"px-4 sm:px-2 py-6 sm:py-4 bg-white text-gray-500 text-sm"},U={class:"table-fixed w-full"},V=o("thead",{class:"hidden"},[o("tr",null,[o("th",{class:"border border-gray-300 py-3"}),o("th",{class:"border border-gray-300"}),o("th",{class:"border border-gray-300"})])],-1),q={class:"border-t border-gray-300 px-2 py-3 w-3/12"},z={class:"border-t border-gray-300 px-2 py-3"},B={class:"border-t border-gray-300 px-2 py-3"},E={class:"border-t border-gray-300 px-2 py-3"},J={class:"border-t border-gray-300 px-2 py-3"},K={class:"border-t border-gray-300 px-2 py-3"},L={class:"mt-2"},O={setup(t){const s=e(0),a=e({company:{title:"公司名稱",description:"YHHISM"},worktime:{title:"上班時間",description:"07:30"},factorycode:{title:"工廠代碼",description:"Demo YHH"},alertcolor:{title:"警示顏色",description:"red"},Noneachievementrate:{title:"未達成率",description:"60%"},errorcodetime:{title:"錯誤碼轉換時間",description:"一秒"}}),c=e({company:{title:"公司名稱",description:"YHHISM AAA"},worktime:{title:"上班時間",description:"06:30"},factorycode:{title:"工廠代碼",description:"Demo AAA"},alertcolor:{title:"警示顏色",description:"無填滿"},Noneachievementrate:{title:"未達成率",description:"70%"},errorcodetime:{title:"錯誤碼轉換時間",description:"五秒"}}),n=e([{description:"05:00",value:"05:00"},{description:"05:30",value:"05:30"},{description:"06:00",value:"06:00"},{description:"06:30",value:"06:30"},{description:"07:00",value:"07:00"},{description:"07:30",value:"07:30"},{description:"08:00",value:"08:00"},{description:"08:30",value:"08:30"},{description:"09:00",value:"09:00"},{description:"09:30",value:"09:30"},{description:"10:00",value:"10:00"}]),v=e([{description:"無填滿",value:"none"},{description:"紅色",value:"red"},{description:"黃色",value:"yellow"}]),y=e([{description:"100%",value:1},{description:"90%",value:.9},{description:"80%",value:.8},{description:"70%",value:.7},{description:"60%",value:.6}]),m=e([{description:"一秒",value:1},{description:"五秒",value:5},{description:"十秒",value:10}]),O=function(){return s.value+=1,c.value=a.value};return(e,t)=>{const a=u("router-link");return l(),r(i,null,[f,o("button",{type:"button",class:"mb-5 bg-green-btn hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none",onClick:O}," 回復原廠 "),o("div",g,[o("div",h,[w,o("div",k,[o("table",S,[A,o("tbody",null,[o("tr",null,[o("td",_,d(c.value.company.title),1),o("td",H,[(l(),r("input",{type:"text",class:"form-control myInput w-full",value:c.value.company.description,key:s.value},null,8,C))])]),o("tr",null,[o("td",I,d(c.value.worktime.title),1),o("td",j,[p(x,{vfors:n.value,userselect:c.value.worktime.description,key:s.value},null,8,["vfors","userselect"])])]),o("tr",null,[o("td",N,d(c.value.factorycode.title),1),o("td",Y,[(l(),r("input",{type:"text",class:"form-control myInput w-full",value:c.value.company.description,key:s.value},null,8,D))])])])]),o("div",M,[o("button",{type:"button",class:"mr-2 btn bg-blue-basic text-white",onClick:t[0]||(t[0]=(...t)=>e.btnSave&&e.btnSave(...t))},"更新"),p(a,{to:"/factory_settings"},{default:b((()=>[o("button",{type:"button",class:"btn bg-blue-basic text-white",onClick:t[1]||(t[1]=(...t)=>e.btnSave&&e.btnSave(...t))},"返回")])),_:1})])])]),o("div",F,[G,o("div",P,[o("table",U,[V,o("tbody",null,[o("tr",null,[o("td",q,d(c.value.alertcolor.title),1),o("td",z,[p(x,{vfors:v.value,userselect:c.value.alertcolor.description,key:s.value},null,8,["vfors","userselect"])])]),o("tr",null,[o("td",B,d(c.value.Noneachievementrate.title),1),o("td",E,[p(x,{vfors:y.value,userselect:c.value.Noneachievementrate.description,key:s.value},null,8,["vfors","userselect"])])]),o("tr",null,[o("td",J,d(c.value.errorcodetime.title),1),o("td",K,[p(x,{vfors:m.value,userselect:c.value.errorcodetime.description,key:s.value},null,8,["vfors","userselect"])])])])]),o("div",L,[o("button",{type:"button",class:"mr-2 btn bg-blue-basic text-white",onClick:t[2]||(t[2]=(...t)=>e.btnSave&&e.btnSave(...t))},"更新"),p(a,{to:"/factory_settings"},{default:b((()=>[o("button",{type:"button",class:"btn bg-blue-basic text-white",onClick:t[3]||(t[3]=(...t)=>e.btnSave&&e.btnSave(...t))},"返回")])),_:1})])])])])],64)}}};export{O as default};
