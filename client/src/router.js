import Vue from 'vue'
import Router from 'vue-router'
import Upload from './views/Upload.vue'
import ReadFile from './views/ReadFile.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'upload',
      component: Upload
    },
    {
      path: '/read/:id',
      name: 'readFile',
      component: ReadFile
    }
  ]
})
