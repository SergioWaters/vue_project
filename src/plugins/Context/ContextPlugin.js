export default {
  install(Vue) {
    if (this.installed) return

    this.install = true;

    Vue.prototype.$context = {

      EventBus: new Vue(),

      show(indx, obj) {
        this.EventBus.$emit('show', indx, obj)
      },

      hide() {
        this.EventBus.$emit('hide')
      },

    }
  }
}