<template>
  <div class="edit-menu" v-if="obj" :style="styles">
    <div class="buttons" v-if="!isVisForm">
      <button @click="isVisForm = !isVisForm">Edit</button>
      <button @click="deleteItem()">Delete</button>
    </div>
    <div class="form" v-if="isVisForm">
      <input type="text" v-model="obj.category" :placeholder="obj.category" />
      <input type="number" v-model="obj.value" :placeholder="obj.value" />
      <input type="date" v-model="obj.date" :placeholder="obj.date" />
      <button @click="saveChanges()">Save</button>
    </div>
    <button class="closer" @click="onContextHide()">X</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ExpenceEdit",
  data() {
    return {
      isVisForm: false,
      obj: null,
      indx: null,
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    ...mapMutations(["updEditExpence"]),
    deleteItem() {
      this.updEditExpence([this.index]);
      this.onContextHide();
    },
    saveChanges() {
      const newObj = {
        category: this.obj.category,
        id: this.obj.id,
        date: this.obj.date,
        value: this.obj.value,
      };
      this.updEditExpence([this.indx, newObj]);
      this.onContextHide();
      this.isVisForm = false;
    },
    onContextShow([indx, obj, caller]) {
      this.setPositon(caller);
      this.indx = indx;
      if (obj) this.obj = obj;
    },
    onContextHide() {
      this.obj = null;
      this.isVisForm = false;
    },
    setPositon(caller) {
      const pos = caller.getBoundingClientRect();
      console.log(pos);

      this.xPos = pos.right;
      this.yPos = pos.top;
    },
  },
  computed: {
    styles() {
      return {
        top: `${this.yPos + 25}px`,
        left: `${this.xPos}px`,
      };
    },
  },
  mounted() {
    this.$context.EventBus.$on("show", this.onContextShow);
    this.$context.EventBus.$on("hide", this.onContextHide);
  },
  beforeDestroy() {
    this.$context.EventBus.$off("show", this.onContextShow);
    this.$context.EventBus.$off("hide", this.onContextHide);
  },
};
</script>

<style scoped>
.edit-menu {
  position: absolute;
  background-color: #f8f8f8;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #222;
}
.form {
  display: flex;
  flex-direction: column;
}
.closer {
  position: absolute;
  top: 0;
  right: 0;
}
.buttons {
  display: flex;
  flex-direction: column;
}
input,
select {
  min-height: 20px;
  min-width: 50px;
  margin: 5px;
  color: #222;
}
</style>