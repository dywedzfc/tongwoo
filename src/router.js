import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('./views/Home.vue')
        }
        // {
        //   path: '/zdfx/zjgz',
        //   name: 'helloworld',
        //   component: HelloWorld
        // },
        // {
        //   path: '/pbgl/pbcx',
        //   name: 'helloworld',
        //   component: HelloWorld
        // },
        // {
        //   path: '/tjgl/cxtj',
        //   name: 'About',
        //   component: () => import('./views/About.vue')
        // }
      ]
    },
    {
      path: '/backstage',
      name: 'home',
      component: () => import('./views/backstage/Index.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/backstage/zjgz',
          name: 'helloworld',
          component: HelloWorld
        },
        {
          path: '/backstage/cxmb/cxmb1',
          name: 'QueryPanelInfo',
          component: () => import('./views/backstage/form/QueryPanelInfo.vue')
        },
        {
          path: '/backstage/cxmb/fycxmb',
          name: 'fycxmb',
          component: () => import('./views/backstage/form/VehicleInquiry.vue')
        },
        {
          path: '/backstage/map',
          name: 'map',
          component: () => import('./views/backstage/map/map.vue')
        },
        {
          path: '/backstage/imageDrag',
          name: 'imageDrag',
          component: () => import('./views/backstage/map/ImageDrag.vue')
        },
        {
          path: '/backstage/tabs/card',
          name: 'mCardTabsap',
          component: () => import('./views/backstage/tabs/CardTabs.vue')
        },
        {
          path: '/backstage/tabs/card2',
          name: 'CardTabs2',
          component: () => import('./views/backstage/tabs/CardTabs2.vue')
        },
        {
          path: '/backstage/tabs/customize',
          name: 'CustomizeTabs',
          component: () => import('./views/backstage/tabs/CustomizeTabs.vue')
        },
        {
          path: '/pbgl/pbcx',
          name: 'helloworld',
          component: HelloWorld
        },
        {
          path: '/tjgl/cxtj',
          name: 'About',
          component: () => import('./views/About.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
