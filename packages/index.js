import Button from './button'

const components = [
  Button
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.vue) {
  install(window.vue)
}

export default {
  install,
  Button
}
