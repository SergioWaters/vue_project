<template>
  <v-container>
    <CalculatorComp />
  </v-container>
</template>

<script>
export default {
  name: "CalculatorView",
  components: {
    CalculatorComp: () => import("../components/CalculatorComp.vue"),
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>

