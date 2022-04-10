<template>
  <div v-if="obj">
    <button @click="isVisForm = !isVisForm">Edit</button>
    <button>Delete</button>
    <div v-if="isVisForm">
      <input type="text" v-model="category" :placeholder="category" />
      <input type="number" v-model="value" :placeholder="value" />
      <input type="date" v-model="date" :placeholder="date" />
      <button @click="saveChanges()">save</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ExpenceEdit",
  props: {
    indx: Number,
    obj: Object,
  },
  data() {
    return {
      isVisForm: false,
      date: "",
      category: "",
      value: "",
    };
  },
  methods: {
    ...mapMutations(["updEditExpence"]),
    saveChanges() {
      console.log(this.data);
      const newObj = {
        category: this.category,
        id: this.obj.id,
        date: this.date,
        value: this.value,
      };
      this.updEditExpence(this.indx, newObj);
    },
  },
  computed: {},
  mounted() {
    if (this.obj) {
      this.date = this.obj.date;
      this.category = this.obj.category;
      this.value = this.obj.value;
    }
  },
};
</script>

<style scoped>
input,
select {
  min-height: 20px;
  min-width: 50px;
  margin: 5px;
  color: #222;
}
.add {
  margin: 10px;
}
</style>