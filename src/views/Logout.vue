<script setup>
    const redirect = function(){
        window.location.href="/";
    }
</script>

<template>
    <!-- 要改變的title -->
    <div class="mx-auto mb-5 w-1/3 lg:w-1/2 md:w-3/5 sm:w-11/12 h-24 rounded bg-red-500 text-white">
        <div class="flex items-center justify-center w-full h-full">
            <div>
                <p class="text-center">
                    <i class="pe-7s-flag pe-fw pe-va text-3xl"></i>
                    <span class="ml-2 text-sm">Not login yet or No sign of any action after login.</span>
                </p>
                <p class="text-center text-lg">Plase login again.</p> 
            </div>
        </div>
    </div>
   <!-- 固定的title -->
    <div class="mx-auto mb-5 w-1/3 lg:w-1/2 md:w-3/5 sm:w-11/12 rounded shadow">
        <div class="flex items-center justify-center w-full h-20 rounded bg-blue-basic text-white">
            <span >PMS Login</span>
        </div> 
        <form action="" class="p-4">
            <input type="text" placeholder="Account" class="myInput w-full">
            <input type="password" placeholder="Password" class="my-4 myInput w-full ">
            <div class="flex justify-center w-full ">
                <button class="bg-blue-basic hover:bg-opacity-70 text-white text-sm px-4 py-2 rounded focus:outline-none" @click="redirect">Login</button>  
            </div>
        </form> 
    </div>
</template>