import Vue from 'vue'
import App from './App'
import router from './router'

// import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import App from './App.vue'

Vue.use(MintUI)
import "bootstrap/dist/css/bootstrap.min.css"

import "./mui/css/mui.min.css"






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
