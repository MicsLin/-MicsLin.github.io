<template>
  <div class="flex items-center w-full h-10 px-4 bg-gray-200 text-sm">
      <ul class="flex">
          <li class="m-auto text-blue-basic cursor-pointer">
            <router-link to="/">
              <svg class="stroke-current w-3.5 h-3.5 text-blue-basic" fill="#E5E7EB
" stroke-width="4" viewBox="0 0 41 44">
                <!-- glyph stroked home -->
                <path d="M42.723 23.448l-21-22-21 22"></path>
                <path d="M5.723 18.448v24h11v-16h10v16h11v-24"></path>
              </svg>
            </router-link>
          </li>
          <li v-for="(breadcrumb, index) in breadcrumbList" :key="index" @click="routeTo(index)" :class="{'linked': !!breadcrumb.link}">
              <span class="mx-2 text-gray-300">/</span>
              <span class="text-gray-400  cursor-default" v-if="index == breadcrumbList.length-1">
                {{ breadcrumb.name }}
              </span>
              <span class="text-blue-basic cursor-pointer" v-else>
                <span>{{ breadcrumb.name }}</span>
              </span>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
    name:'Breadcrumb',
    data(){
        return{
          breadcrumbList: []
        }
    },
     mounted () {
        this.updateList() 
    },
    watch: { 
        '$route' () { 
            this.updateList()
        } 
    },
    methods: {
        routeTo (pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
    }
}
</script>
