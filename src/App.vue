<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ModalView">Add</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <transition name="fade">
        <ModalWindow :name="name" :settings="{ settings }" v-if="name" />
      </transition>
      <router-view />
      <transition name="fade">
        <ExpenceEdit />
      </transition>
    </main>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue"),
    ExpenceEdit: () => import("./components/ExpenceEdit.vue"),
  },
  data() {
    return {
      name: "",
      settings: {},
      indx: null,
      obj: {},
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    onModalShow(settings) {
      this.name = settings.component;
      this.settings = settings;
    },
    onModalHide() {
      this.name = "";
      this.settings = {};
    },
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.$modal.EventBus.$on("shown", this.onModalShow);
    this.$modal.EventBus.$on("hide", this.onModalHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("shown", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
a .router-link-exact-active {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>