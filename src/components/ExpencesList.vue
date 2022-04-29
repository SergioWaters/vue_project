<template>
  <v-container class="expences">
    <v-row>
      <v-col class="text-h5" :cols="1">#</v-col>
      <v-col class="text-h5" :cols="4">Date</v-col>
      <v-col class="text-h5" :cols="4">Category </v-col>
      <v-col class="text-h5" :cols="3">Value </v-col>
    </v-row>
    <v-row v-for="expence in expencesArr" :key="expence.id">
      <v-col :cols="1">{{ getIndex(expence) + 1 }}</v-col>
      <v-col :cols="4">{{ getDate(expence.date) }}</v-col>
      <v-col :cols="4">{{ expence.category }}</v-col>
      <v-col :cols="2">{{ expence.value }}</v-col>
      <v-col
        :cols="1"
        @click="$context.show([getIndex(expence), expence, $event.target])"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-col>
    </v-row>
    <ExpenceEdit />
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "ExpencesList",
  components: {
    ExpenceEdit: () => import("./ContextMenu.vue"),
  },
  data() {
    return {
      items: [{ title: "Edit", action: () => {} }, { title: "Delete" }],
      index: null,
    };
  },
  props: {
    expencesArr: Array,
  },
  methods: {
    getDate(date) {
      return new Intl.DateTimeFormat("ru-RU").format(new Date(date));
    },

    getIndex(expence) {
      return this.getAllExpences.indexOf(expence);
    },
  },
  computed: {
    ...mapGetters(["getAllExpences"]),
  },
};
</script>

<style scoped>
.expences {
  min-height: 300px;
}
</style>
