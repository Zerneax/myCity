import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import Vue2leaflet from 'vue2-leaflet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import infiniteScroll from 'vue-infinite-scroll'

import "leaflet/dist/leaflet.css"
import 'semantic-ui-css/semantic.min.css'

library.add(faBicycle)

Vue.component('v-map', Vue2leaflet.LMap);
Vue.component('v-tilelayer', Vue2leaflet.LTileLayer);
Vue.component('v-marker', Vue2leaflet.LMarker);
Vue.component('v-tooltip', Vue2leaflet.LTooltip);
Vue.component('v-zoom', Vue2leaflet.LControlZoom);


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(SuiVue);
Vue.use(infiniteScroll)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
