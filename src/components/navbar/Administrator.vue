<template>
    <div class="w-full h-7 leading-7 hover:bg-gray-100">
        <router-link to="/adminpersonalset">
            <div class="ml-5 flex items-center">
                <svg class="stroke-current stroke-2 w-5 h-5 mr-2.5 text-black" fill="white" viewBox="0 0 44.02 43">
                    <path d="M1 38.207c0-1.983 1.168-3.777 2.983-4.575 2.325-1.022 5.505-2.42 7.638-3.366 1.925-.85 2.34-1.363 4.28-2.235 0 0 .2-1.012.13-1.615h1.516s.347.206 0-2.176c0 0-1.85-.5-1.936-4.294 0 0-1.39.476-1.475-1.823-.058-1.56-1.243-2.912.462-4.03l-.867-2.38s-1.733-9.617 3.25-8.206c-2.1-2.56 11.92-5.117 12.83 3 0 0 .65 4.38 0 7.38 0 0 2.05-.24.68 3.765 0 0-.75 2.882-1.907 2.235 0 0 .19 3.646-1.632 4.265 0 0 .13 1.94.13 2.073l1.736.265s-.26 1.588.043 1.764c0 0 2.49 1.29 4.506 2.074 2.378.917 4.86 2.002 6.714 2.84 1.788.81 2.932 2.592 2.93 4.555 0 .847.003 1.63.01 2.007.023 1.224-.873 2.27-2.1 2.27H3.105C1.943 42 1 41.057 1 39.895v-1.688z" class="line"></path>
                </svg>
                <span>個人資料</span>
            </div>
        </router-link>
    </div>
    <hr class="my-1.5">   
    <div class="w-full h-7 leading-7 hover:bg-gray-100">
        <router-link to="/logout">
            <div class="ml-5 flex items-center">
                <svg class="stroked-cancel w-5 h-5 mr-2.5" viewBox="0 0 44 44">
                    <g class="line" fill="none" stroke="#000" stroke-width="2" stroke-miterlimit="10">
                        <circle cx="22" cy="22" r="21"></circle>
                        <path d="M13.868 14.075l15.557 15.557M30.132 13.368L13.868 29.632"></path>
                    </g>
                </svg>
                <span>登出</span>
            </div>
        </router-link>
    </div>
</template>