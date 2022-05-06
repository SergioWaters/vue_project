<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="numberOfButtons"
      plain
      color="teal"
    ></v-pagination>
  </div>
  <!-- <div>
      <button @click="clickHandler(focus - 1)">-</button>
      <button v-for="n in numberOfButtons" :key="n" @click="clickHandler(n)">
        {{ n }}
      </button>
      <button @click="clickHandler(focus + 1)">+</button>
    </div> -->
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "ExpencesPagination",
  props: {
    pages: Number,
    focus: Number,
    stack: Number,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    ...mapMutations(["updateFocusPage"]),
    changePage() {
      this.updateFocusPage(this.page);
    },
    // handler() {
    //   console.log("handler");
    // },
    // clickHandler(ctx) {
    //   console.log("from next", ctx);
    //   // this.page += 1;
    //   // if (this.page < 1 || this.page > this.numberOfButtons) return;
    //   // this.updateFocusPage(this.page);
    //   // this.$emit("clickHandler", this.page);
    // },
  },
  computed: {
    numberOfButtons() {
      return Math.ceil(this.pages / this.stack);
    },
  },
};
</script>

<style scoped>
</style>