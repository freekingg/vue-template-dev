import Vue from 'vue'
import Router from 'vue-router'
import routes from './route'
// import store from '../store'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes,
})

router.beforeEach((to, from, next) => {
  // 登录验证
  // if (isLoginRequired(to.name) && !store.state.logined) {
  //   next({ path: '/login' })
  //   return
  // }

  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
