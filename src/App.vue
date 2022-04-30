<template>
  <v-app>
    <v-app-bar app flat justify="center">
      <v-container>
        <v-btn plain :ripple="false" to="/">Home</v-btn>
        <v-btn plain :ripple="false" to="/ViewtyBoard">ViewtyBoard</v-btn>
        <v-btn plain :ripple="false" to="/AddExpence">Add</v-btn>
        <v-btn plain :ripple="false" to="/common">Common Expences</v-btn>
        <v-btn plain :ripple="false" to="/about">About</v-btn>
        <v-btn plain :ripple="false" to="/Calculator">Calculator</v-btn>
        <v-btn plain :ripple="false" to="/HelloWorld">HelloWorld</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
      <transition name="fade">
        <ModalWindow :name="name" :settings="{ settings }" v-if="name" />
      </transition>
    </v-main>
  </v-app>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    ModalWindow: () => import("./components/ModalWindow.vue"),
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
      console.log(this.name);
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
  color: #2c3e50;
}
a .v-btn-exact-active {
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