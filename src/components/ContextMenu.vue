<template>
  <!-- <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title @click="handler(item)">{{
          item.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->

  <v-toolbar flat class="edit-menu" v-if="isShown" :style="styles">
    <v-btn @click="deleteItem">Delete</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"> Edit </v-btn>
      </template>
      <v-card class="justify-self-center">
        <ExpenceAdd :settings="obj" action="edit" :indx="indx" />
      </v-card>
    </v-dialog>
    <button class="closer" @click="onContextHide">X</button>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ExpenceEdit",
  components: {
    ExpenceAdd: () => import("@/components/ExpenceAdd.vue"),
  },
  props: {
    arr: Array,
  },
  data() {
    return {
      items: [],
      dialog: false,
      isShown: false,
      obj: {},
      indx: null,
      xPos: 0,
      yPos: 0,
    };
  },
  methods: {
    ...mapMutations(["updEditExpence"]),
    handler(item) {
      item.action();
    },
    deleteItem() {
      this.updEditExpence([this.index]);
      this.onContextHide();
    },

    onContextShow([indx, obj, caller]) {
      this.isShown = true;
      this.indx = indx;
      if (caller) this.setPositon(caller);
      if (obj) this.obj = obj;
      // this.items = obj.items;
    },
    onContextHide() {
      this.isShown = false;
    },
    setPositon(caller) {
      const pos = caller.getBoundingClientRect();
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