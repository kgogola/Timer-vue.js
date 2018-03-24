import Vue from 'vue'
import App from './App.vue'
import time from './time.vue'


Vue.component("TIME",time);

new Vue({
  el: '#app',
  render: h => h(App)
})
