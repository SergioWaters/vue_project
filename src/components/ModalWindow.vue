<template>
  <div>
    <div :class="header">{{ settings.title }}</div>
    <div :class="content">
      <ExpenceAdd v-if="modalComponent === 'expenceAdd'" />
      <!-- <ExpenceEdit v-if="modalComponent === 'expenceEdit'" /> -->
    </div>
    <div>
      <button :class="modalComponent" @click="$modal.hide()">close</button>
    </div>
  </div>
</template>

<script>
import ExpenceAdd from "./ExpenceAdd.vue";

// import ExpenceEdit from "./ExpenceEdit.vue";

export default {
  components: { ExpenceAdd },
  name: "ModalWindow",
  props: {
    modalComponent: String,
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
.expenceAdd {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
}
.expenceEdit {
  display: flex;
  position: absolute;
}
</style>