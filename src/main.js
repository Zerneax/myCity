import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import Vue2leaflet from 'vue2-leaflet'

import 'semantic-ui-css/semantic.min.css'

Vue.component('v-map', Vue2leaflet.LMap);
Vue.component('v-tilelayer', Vue2leaflet.LTileLayer);
Vue.component('v-marker', Vue2leaflet.LMarker);

Vue.use(SuiVue);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
