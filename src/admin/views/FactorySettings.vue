<template>
    <div class="px-5">
        <div class="w-full shadow">
            <div class="flex items-center justify-between h-16 pl-8 pr-10 bg-blue-title text-lg text-blue-title-text ">
                <span class="flex items-center">
                    <i class="pe-7s-credit pe-lg pe-va"></i>
                    <span class="ml-2">產線相關</span>
                </span>  
            </div>
            <div class="p-8 sm:px-2 sm:py-4">
                <div class="flex mb-5 w-full text-white">     
                    <div class="w-6/12">
                        <router-link to="/production_line_set">
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                               <span class="relative bottom-0.5">
                                    <i class="pe-7s-menu pe-lg pe-va"></i>
                                </span>
                                <span class="ml-1">生產線</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="w-6/12">
                        <router-link to="/machinelist_set" >
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                                <span class="relative bottom-0.5">
                                    <i class="pe-7s-radio pe-lg pe-va"></i> 
                                </span>
                                <span class="ml-1">機台</span>
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="flex w-full text-white">
                    <div class="w-6/12">
                        <router-link to="/product_set">
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                                <span class="relative bottom-0.5">
                                    <i class="pe-7s-ticket pe-lg pe-va"></i> 
                                </span>
                                <span class="ml-1">產品</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="w-6/12">
                        <router-link to="/employee_settings">
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                                <span class="relative bottom-0.5">
                                    <i class="pe-7s-door-lock pe-lg pe-va"></i> 
                                </span>
                                <span class="ml-1">員工</span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>          
    </div>
    <div class=" my-10 px-5">
        <div class="w-full shadow">
            <div class="flex items-center justify-between h-16 pl-8 pr-10 bg-blue-title text-lg text-blue-title-text ">
                <span class="flex items-center">
                    <i class="pe-7s-users pe-lg pe-va"></i>
                    <span class="ml-2">管理者設定</span>
                </span>  
            </div>
            <div class="p-8 sm:px-2 sm:py-4">
                <div class="flex mb-5 w-full text-white">     
                    <div class="w-6/12">
                        <router-link to="/user_set">
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                               <span class="relative bottom-0.5">
                                    <i class="pe-7s-id pe-lg pe-va"></i>
                                </span>
                                <span class="ml-1">使用者<span class="sm:hidden">設定</span></span>
                            </button>
                        </router-link>
                    </div>
                    <div class="w-6/12">
                        <router-link to="/index_set" >
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                                <span class="relative bottom-0.5">
                                    <i class="pe-7s-display2 pe-lg pe-va"></i> 
                                </span>
                                <span class="ml-1">首頁<span class="sm:hidden">設定</span></span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>             
    </div>
    <div class="px-5">
        <div class="w-full shadow">
            <div class="flex items-center justify-between h-16 pl-8 pr-10 bg-blue-title text-lg text-blue-title-text ">
                <span class="flex items-center">
                    <i class="pe-7s-edit pe-lg pe-va"></i>
                    <span class="ml-2">識別設定</span>
                </span>  
            </div>
            <div class="p-8 sm:px-2 sm:py-4">
                <div class="flex mb-5 w-full text-white">     
                    <div class="w-6/12">
                        <router-link to="/errorcode_set">
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                               <span class="relative bottom-0.5">
                                    <i class="pe-7s-junk pe-lg pe-va"></i>
                                </span>
                                <span class="ml-1">錯誤碼<span class="sm:hidden">設定</span></span>
                            </button>
                        </router-link>
                    </div>
                    <div class="w-6/12">
                        <router-link to="/maintain_reason_set" >
                            <button class="btn bg-blue-basic w-6/12 lg:w-8/12 sm:w-11/12 text-lg sm:text-sm">
                                <span class="relative bottom-0.5">
                                    <i class="pe-7s-tools pe-lg pe-va"></i> 
                                </span>
                                <span class="ml-1">保修<span class="lg:hidden">內容</span><span class="sm:hidden">設定</span></span>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>             
    </div>
</template>