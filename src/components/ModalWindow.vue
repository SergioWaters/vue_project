<template>
  <v-container :class="name">
    <div>{{ settings.title }}</div>
    <transition fade>
      <ExpenceAdd v-if="name === 'addExpence'" />
    </transition>
    <button @click="$modal.hide()">X</button>
  </v-container>
</template>

<script>
export default {
  components: { ExpenceAdd: () => import("./ExpenceAdd.vue") },
  name: "ModalWindow",
  props: {
    name: String,
    settings: Object,
  },
};
</script>

<style scoped>
.addExpence {
  position: absolute;
  top: 30vh;
  left: 20vw;
  background: #f8f8f8;
  padding: 20px;
}
.expenceEdit {
  display: flex;
  position: absolute;
}
button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>