<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="numberOfButtons"
      plain
      color="teal"
      @click="handler()"
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
      page: null,
    };
  },
  methods: {
    ...mapMutations(["updateFocusPage"]),
    handler() {
      console.log("handler");
    },
    next(ctx) {
      console.log("from next", ctx);
      // this.page += 1;
      // if (this.page < 1 || this.page > this.numberOfButtons) return;
      // this.updateFocusPage(this.page);
      // this.$emit("clickHandler", this.page);
    },
  },
  computed: {
    numberOfButtons() {
      return Math.ceil(this.pages / this.stack);
    },
  },
  onChange() {
    console.log(this.page);
  },
};
</script>

<style scoped>
</style>