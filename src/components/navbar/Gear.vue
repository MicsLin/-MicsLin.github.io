<script setup>
        const $scrollToTop=function() {
    return window.scrollTo(0, 0);
}


</script>

<template>
    <div class="w-full h-7 leading-7 hover:bg-gray-100">
        <router-link to="/factory_settings">
            <div class="ml-2.5 font-bold">
                <i class="pe-7s-exapnd2 pe-lg pe-va mr-1"></i>設定總覽
            </div>
        </router-link>
    </div>
    <hr class="my-1.5">   
    <ul>   
        <div class="ml-2.5 text-gray-500 font-bold cursor-text">
            <i class="pe-7s-credit pe-lg pe-va mr-1"></i>產線相關
        </div>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/product_line">
                <div class="pl-6">
                    <i class="pe-7s-network pe-lg pe-va mr-1"></i>生產線/產品
                </div>
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/production_line_set">
                <div class="pl-6">
                    <i class="pe-7s-menu pe-lg pe-va mr-1"></i>生產線
                </div>
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/product_set">
                <div class="pl-6">
                    <i class="pe-7s-ticket pe-lg pe-va mr-1"></i>產品
                </div>    
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/machinelist_set">
                <div class="pl-6">
                <i class="pe-7s-radio pe-lg pe-va mr-1"></i>機台 
                </div>       
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/employee_settings"> 
                <div class="pl-6">
                    <i class="pe-7s-door-lock pe-lg pe-va mr-1"></i>員工
                </div>    
            </router-link>
        </li>
    </ul>
    <hr class="my-1.5">
    <div class="ml-2.5 text-gray-500 font-bold cursor-text">
        <i class="pe-7s-users pe-lg pe-va mr-1"></i>管理者設定
    </div>
    <ul>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/user_set">
                <div class="pl-6">
                    <i class="pe-7s-id pe-lg pe-va mr-1"></i>使用者設定
                </div>   
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/index_set">
                <div class="pl-6">
                    <i class="pe-7s-display2 pe-lg pe-va mr-1"></i>首頁設定
                </div>   
            </router-link>
        </li>
    </ul>
    <hr class="my-1.5">
    <div class="ml-2.5 text-gray-500 font-bold cursor-text">
        <i class="pe-7s-edit pe-lg pe-va mr-1"></i>識別設定
    </div> 
    <ul>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/errorcode_set">
                <div class="pl-6">
                    <i class="pe-7s-junk pe-lg pe-va mr-1"></i>錯誤碼設定
                </div>    
            </router-link>
        </li>
        <li class="w-full h-7 leading-7 hover:bg-gray-100">
            <router-link to="/maintain_reason_set">
                <div class="pl-6">
                    <i class="pe-7s-tools pe-lg pe-va mr-1"></i>保修內容設定
                </div>   
            </router-link>
        </li>
    </ul>
    <hr class="my-1.5">
    <div class="w-full h-7 leading-7 hover:bg-gray-100">
        <router-link to="/ver_list">
            <div class="ml-2.5 font-bold">
                <i class="pe-7s-exapnd2 pe-lg pe-va pe-va mr-1"></i>版本更新
            </div>
        </router-link>
    </div> 
</template>