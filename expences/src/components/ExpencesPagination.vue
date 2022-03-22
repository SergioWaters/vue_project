<template>
  <div>
    <button @click="clickHandler(focus - 1)">-</button>
    <button v-for="n in numberOfButtons" :key="n" @click="clickHandler(n)">
      {{ n }}
    </button>
    <button @click="clickHandler(focus + 1)">+</button>
  </div>
</template>

<script>
export default {
  name: "ExpencesPagination",
  props: {
    pages: Number,
    focus: Number,
    stack: Number,
  },
  methods: {
    clickHandler(n) {
      if (n < 1 || n > this.numberOfButtons) return;
      this.$emit("clickHandler", n);
    },
  },
  computed: {
    numberOfButtons() {
      return Math.ceil(this.pages / this.stack);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
button {
  padding: 5px;
  margin: 5px;
}
</style>