import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RemotoLogin from '@/components/RemotoLogin'
import RemotoRecuperarSenha from '@/components/RemotoRecuperarSenha'
import VueUi from '@vue/ui'

Vue.use(VueUi)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'RemotoLogin',
      component: RemotoLogin
    }, {
      path: '/recuperar-senha',
      name: 'RemotoRecuperarSenha',
      component: RemotoRecuperarSenha
    }
  ]
})
