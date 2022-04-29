<template>
  <v-container class="common_expences">
    <h3>Popular Categories</h3>
    <v-text-field v-model="amount" type="number" label="Put your expence" />
    <v-btn
      :to="`/addExpence/${item}?value=${amount}&push=true`"
      v-for="item in getCategoryArr"
      :key="item"
    >
      {{ item }}
    </v-btn>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      amount: null,
    };
  },
  computed: {
    ...mapGetters(["getCategoryArr"]),
  },
};
</script>