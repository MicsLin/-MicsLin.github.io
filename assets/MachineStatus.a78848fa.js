import{_ as e}from"./index.c2d568a1.js";import{r as t,o as s,a as l,d as o,b as a,w as n,m as d,F as r,l as i,g as u}from"./vendor.6f924201.js";const c={},p=o("div",{class:"flex items-center p-4 mb-2.5 w-full h-16 rounded-t bg-blue-500 text-lg"},[o("span",{class:"font-bold"},"14Test "),o("span",{class:"ml-2 w-8 h-5 leading-5 bg-white text-blue-400 text-sm text-center rounded-2xl font-bold"},"29")],-1),m={class:"m-auto w-9/12 pt-2 flex-wrap font-bold"},f={class:"flex justify-between w-full mb-5"},b=o("i",{class:"pe-7s-cloud-upload pe-lg pe-fw pe-va"},null,-1),x=o("span",null,"0",-1),w=o("i",{class:"pe-7s-cloud-download pe-lg pe-fw pe-va"},null,-1),h=o("span",null,"19",-1),g={class:"flex justify-between w-full"},v=o("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"},null,-1),y=o("span",null,"50",-1),_=o("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"},null,-1),j=o("span",null,"20",-1);var k=e(c,[["render",function(e,d){const r=t("router-link");return s(),l("div",null,[p,o("div",m,[o("div",f,[a(r,{class:"flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-green-btn hover:bg-opacity-70",to:"/machine_online"},{default:n((()=>[b,x])),_:1}),a(r,{class:"flex items-center justify-center w-5/12 h-11 text-lg rounded text-gray-600 focus:outline-none bg-gray-300 hover:bg-opacity-70",to:"/machine_offline"},{default:n((()=>[w,h])),_:1})]),o("div",g,[a(r,{class:"flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-red-600 hover:bg-opacity-70",to:"/machine_out_of_order"},{default:n((()=>[v,y])),_:1}),a(r,{class:"flex items-center justify-center w-5/12 h-11 text-lg rounded focus:outline-none bg-yellow-400 hover:bg-opacity-70",to:"/machine_warning"},{default:n((()=>[_,j])),_:1})])])])}]]);const F={class:"shadow"},T={class:"flex md:block items-center h-16 md:h-32 md:pt-5 pl-8 sm:pl-4 sm:pr-4 bg-blue-title text-lg text-blue-title-text"},q={class:"md:mb-4 sm:mb-0 sm:flex sm:justify-between"},z=o("span",{class:"flex items-center"},"產線狀態",-1),A={class:"hidden md:text-sm sm:block"},B=o("button",{class:"md:mb-2 border border-blue-500 hover:border-opacity-50 bg-blue-500 hover:bg-opacity-80 text-white rounded px-5 py-2.5"},[o("i",{class:"pe-7s-note2 pe-lg pe-fw pe-va"}),u("全部"),o("span",{class:"sm:hidden"},"列表"),u("(50) ")],-1),C={class:"m-auto md:m-0 md:flex md:flex-wrap md:text-sm"},D=o("button",{class:"sm:hidden md:mb-2 border border-blue-500 hover:border-opacity-50 bg-blue-500 hover:bg-opacity-80 text-white rounded px-5 py-2.5"},[o("i",{class:"pe-7s-note2 pe-lg pe-fw pe-va"}),u("全部"),o("span",{class:"sm:hidden"},"列表"),u("(50) ")],-1),E=o("button",{class:"mx-10 md:mx-8 sm:mx-0 sm:mr-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded px-5 py-2.5"},[o("i",{class:"pe-7s-tools pe-lg pe-fw pe-va"}),u("故障"),o("span",{class:"sm:hidden"},"列表"),u("(9) ")],-1),G=o("button",{class:"border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white rounded px-5 py-2.5"},[o("i",{class:"pe-7s-attention pe-lg pe-fw pe-va"}),u("警示"),o("span",{class:"sm:hidden"},"列表"),u("(30) ")],-1),H={class:"flex flex-wrap w-full pt-5 text-sm text-white"},I={class:"w-72 lg:w-60 md:w-72 h-52 m-auto round bg-gray-200 shadow"},J={setup(e){const u=d([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);return(e,d)=>{const c=t("router-link");return s(),l("div",F,[o("div",T,[o("div",q,[z,o("div",A,[a(c,{to:"/machine_status"},{default:n((()=>[B])),_:1})])]),o("div",C,[a(c,{to:"/machine_status"},{default:n((()=>[D])),_:1}),a(c,{to:"/machine_status_out_of_order"},{default:n((()=>[E])),_:1}),a(c,{to:"/machine_status_warning"},{default:n((()=>[G])),_:1})])]),o("div",H,[(s(!0),l(r,null,i(u.value,((e,t)=>(s(),l("div",{class:"w-3/12 xl:w-4/12 md:w-6/12 sm:w-full mb-7",key:t},[o("div",I,[a(k)])])))),128))])])}}};export{J as default};
