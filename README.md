# vue-2-crumbs

Breadcumb plugin for VueJS

## Setup

Clone or download the plugin in your project folder 

```js
import Vue from 'vue'
import breadCrumb from 'from/your/path/src/index'

Vue.use(breadCrumb)
```

or import only the component:

```js
import breadCrumb from 'from/your/path/breadcrumbComponent.vue'
...
components: {
    breadCrumb
}
```

## Usage

For well understant of how is work and possibilities check the demo !

Defined meta in your router:

```js 
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
    ...
```

All route was independent. You can use in all of case.

## Demo

I provide for you a little demo.
you can simplely clone the project and move in demo folder
`cd demo`

and lunch serve task :
`npm run serve`

## Issues

Feel free to post issues if you have any trouble, bugs, or something like that :)

## Participate

I invite you to make some PR on this project.
Base project is from [https://github.com/Suruat/vue-2-crumbs](Suruat/vue-2-crumbs)
