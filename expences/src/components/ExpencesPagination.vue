<template>
  <div>
    <button v-for="n in lists" :key="n" @click="getlistToView(n)">
      {{ n }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ExpencesPagination",
  data() {
    return {
      listToView: 0,
    };
  },
  methods: {
    getListToView(n) {
      this.$emit("getListToView", n);
    },
  },
  props: {
    lists: Number,
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