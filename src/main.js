// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 手机端样式
import 'styles/reset.css'
// 手机端1像素边框
import 'styles/border.css'
// 手机端点击延迟
import fastClick from 'fastclick'
// iconfont引入
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
