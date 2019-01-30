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
      path: '/shop',
      component: () => import('./components/Shop.vue'),
      // component:  () => import('./views/Shop.vue'),
      children: [
        {
          path: '',
          name: 'shop',
          component: () => import('./views/Shop.vue'),
          meta: {
            breadcrumb: {
              parent: 'home',
              label: 'Shop'
            }
          }
        },
        {
          path: ':category',
          name: 'category',
          component: () => import('./views/Category.vue'),
          meta: {
            breadcrumb: {
              parent: 'shop',
              label: function () {
                return this.$route.params.category
              }
            }
          }
        },
        {
          path: ':category/:subcategory',
          name: 'subcategory',
          component: () => import('./views/Subcategory.vue'),
          meta: {
            breadcrumb: {
              parent: 'category',
              label: function () {
                return this.$route.params.subcategory
              }
            }
          }
        },
        {
          path: ':category/:subcategory/:productslug',
          name: 'product',
          component: () => import('./views/Product.vue'),
          meta: {
            breadcrumb: {
              parent: 'subcategory',
              label: function () {
                return this.$store.state.item.name
              }
            }
          }
        }
      ]

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        breadcrumb: {
          parent: 'home',
          label: 'about'
        }
      }
    }
  ]
})
