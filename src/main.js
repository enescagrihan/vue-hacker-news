import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// Vue.filter("urlFormat", (url) => {
//   if(url != undefined) {
//     const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
//     const parts = host.split('.').slice(-3)
//     if (parts[0] == "www") parts.shift()
//     return parts.join('.')
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// check time in index.js/store - check for seconds, minutes, hours and days