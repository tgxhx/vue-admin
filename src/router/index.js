import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'
import Page11 from '@/pages/page11'
import Page22 from '@/pages/page22'
import Page33 from '@/pages/page33'
import NotFound from '@/pages/404'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/page1',
      meta: {
        requireAuth: true
      },
      component: Index,
      children: [
        {
          path: '/page1',
          component: Page1,
        },
        {
          path: '/page1/page11',
          component: Page11
        },
        {
          path: '/page2',
          component: Page2,
        },
        {
          path: '/page2/page22',
          component: Page22
        },
        {
          path: '/page3',
          component: Page3,
        },
        {
          path: '/page3/page33',
          component: Page33
        }
      ]
    },
    {
      path: '/login',
      meta: {
        login: true
      },
      component: resolve => require(['@/pages/login'], resolve)
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = !!sessionStorage.getItem('login')
  //拦截未登录进入首页
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    //拦截登陆后跳转到login
  } else if (to.meta.login) {
    if (token) {
      console.log(from)
      next({
        path: from.fullPath
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
