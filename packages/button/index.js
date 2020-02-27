import AlexButton from './src/button.vue'

AlexButton.install = function (Vue) {
  Vue.component(AlexButton.name, AlexButton)
}

export default AlexButton
