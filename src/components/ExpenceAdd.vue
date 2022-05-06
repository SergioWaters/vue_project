<template >
  <v-container max-width="500px">
    <v-card class="text-left pa-8 cols-5">
      <h3 v-if="message">{{ message }}</h3>
      <v-text-field v-model="date" type="date" label="Choose Date" />
      <v-text-field v-model.number="value" label="Put amount" />
      <v-select
        v-model="category"
        label="Choose Category"
        :items="getCategoryArr"
      />
      <v-text-field
        v-model="customCategory"
        label="Or create a custom category"
      />
      <v-btn v-if="!settings" color="teal" dark @click="addExpence"
        >Add expence</v-btn
      >
      <v-btn v-if="action === 'edit'" color="teal" dark @click="addExpence"
        >Save changes</v-btn
      >
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "ExpenceAdd",
  props: {
    action: String,
    settings: Object,
    indx: Number,
  },
  data() {
    return {
      message: "",
      date: "",
      category: "",
      customCategory: "",
      id: null,
      value: null,
    };
  },
  methods: {
    ...mapMutations(["updNewExpence", "updEditExpence"]),
    addExpence() {
      this.message = "";
      this.category = this.customCategory || this.category;
      if (!this.category)
        return (this.message = "Choose category, or create one");
      if (!this.value) return (this.message = "Put expence's value");

      const expence = {
        id: this.id,
        category: this.customCategory || this.category,
        date: this.date || this.getCurrentDate,
        value: this.value,
      };

      if (this.action === "edit") {
        this.updEditExpence([this.indx, expence]);
      }
      if (!this.settings) this.updNewExpence(expence);
      this.message = `Your added ${this.value} to ${expence.category} category`;
    },
  },
  computed: {
    ...mapGetters(["getCategoryArr"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${y}.${m}.${d}`;
    },
  },
  mounted() {
    if (this.settings) {
      const obj = this.settings;
      this.category = obj.customCategory || obj.category;
      this.value = obj.value;
      this.date = obj.date;
      this.id = obj.id;
    }
    if (this.$route.query.push) {
      console.log(this.$route);
      if (this.$route.query.value !== "null") {
        this.customCategory = this.$route.params.category;
        this.value = this.$route.query.value;
        this.addExpence();
      }
      this.$router.push({
        name: "home",
      });
    }
  },
};
</script>

<style scoped>
</style>