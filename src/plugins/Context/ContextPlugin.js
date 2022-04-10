export default {
  install(Vue) {
    if (this.installed) return

    this.install = true;

    Vue.prototype.$context = {

      EventBus: new Vue(),

      showContext(indx, obj) {
        this.EventBus.$emit('show', indx, obj)
        console.log(indx, obj)
      },

      hideContext() {
        this.EventBus.$emit('hide')
      },

    }
  }
}