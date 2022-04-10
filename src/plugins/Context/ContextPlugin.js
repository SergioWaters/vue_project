export default {
  install(Vue) {
    if (this.installed) return

    this.install = true;

    Vue.prototype.$modal = {

      EventBus: new Vue(),

      showContext(name, settings) {
        this.EventBus.$emit('showContext', { name, ...settings })
      },

      hideContext() {
        this.EventBus.$emit('showContext')
      },

      edit() {

      }

    }
  }
}