import Vue from 'vue'
import App from './App.vue'

import AlexUI from '../packages/index.js'

Vue.use(AlexUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
