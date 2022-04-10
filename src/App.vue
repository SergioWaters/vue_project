<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ModalView">Add</router-link>
    </nav>
    <main>
      <h1>Tag your Payments</h1>
      <ModalWindow
        :modalComponent="modalComponent"
        :settings="settings"
        v-if="modalComponent"
      />
      <router-view />
    </main>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "App",
  components: {
    ModalWindow,
  },
  data() {
    return {
      modalComponent: "",
      settings: {},
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    onModalShow(settings) {
      this.modalComponent = settings.title;
      this.settings = settings;
    },
    onModalHide() {
      this.modalComponent = "";
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
</style>