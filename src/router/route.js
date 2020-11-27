const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/home/home'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/login'),
  },
  {
    redirect: '/404',
    path: '*',
  },
]

export default routes
