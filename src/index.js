import Breadcrumbs from './breadcrumbComponent'

export default {
  version: '0.1.0',
  install (Vue, options) {
    Vue.component(Breadcrumbs.name, Breadcrumbs)
  }
}
