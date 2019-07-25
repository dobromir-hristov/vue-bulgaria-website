import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import format from 'date-fns/format'
import router from './router'

Vue.use(VueAnalytics, {
  id: 'UA-29425482-11',
  router
})

Vue.config.productionTip = false

Vue.filter('date', (date) => {
  return format(date, 'DD MM YYYY')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
