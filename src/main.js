import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'
// import VueI18n  from './assets/languages/plugins/vue-i18n'
import VCalendar from 'v-calendar'
import HighchartsVue from 'highcharts-vue'
import './assets/js/Chart'

import VueClickAway from "vue3-click-away";
import './assets/icon/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css'
import store from './store'

createApp(App).use(store).use(VueClickAway).use(HighchartsVue).use(VCalendar, {}).use(router).mount('#app')
// .use(VueI18n )