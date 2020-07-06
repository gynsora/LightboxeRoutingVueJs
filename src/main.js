import Vue from 'vue'
import VueRouter from 'vue-router'
import PageA from './components/PageA'
import EnfantAa from './components/EnfantAa'
import EnfantAb from './components/EnfantAb'
import PageB from './components/PageB'
import PageC from './components/PageC'
import PageImage from './components/PageImage'
import PageAccueil from './components/PageAccueil'
import Page404 from './components/Page404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: PageAccueil ,name:'root'},
    { path: '/404', component: Page404},
    { path: '/PageA', component: PageA ,name:'pageA',
      children:[
        { path:'enfantAa', component: EnfantAa ,name:'enfantAa'},
        { path:'enfantAb', component: EnfantAb ,name:'enfantAb'}
      ]
    },
    { path: '/lightBox', component: PageImage ,name:'lightbox'},
    { path: '/article/:id(\\d+)', components: {default: PageB, sidebar:PageC},name:'article' },
    { path: '*', redirect: '/404' }
  ]
})

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
