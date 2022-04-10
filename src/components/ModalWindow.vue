<template>
  <div :class="name">
    <div>{{ settings.title }}</div>
    <transition fade>
      <ExpenceAdd v-if="name === 'addExpence'" />
      <!-- <ExpenceEdit v-if="modalComponent === 'expenceEdit'" /> -->
    </transition>
    <button @click="$modal.hide()">close</button>
  </div>
</template>

<script>
import ExpenceAdd from "./ExpenceAdd.vue";

// import ExpenceEdit from "./ExpenceEdit.vue";

export default {
  components: { ExpenceAdd },
  name: "ModalWindow",
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    modalHandler() {},
  },
  computed: {},
  mounted() {},
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
</style>