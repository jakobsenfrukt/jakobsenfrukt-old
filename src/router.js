import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/projects/All.vue')
    },
    /*{
      path: '/blog',
      name: 'blog',
      component: () => import('./views/blog/All.vue')
    },*/
    {
      path: '*',
      name: 'notfound',
      component: () => import('./views/NotFound.vue')
    }
  ],
  scrollBehavior (to) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (to.hash) {
          resolve({ selector: to.hash })
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 100)
    })
  },
})
