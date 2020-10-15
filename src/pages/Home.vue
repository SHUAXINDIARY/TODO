<style scoped>
</style>
<template>
  <h1>TODO By Vue3</h1>
  <div class="item">
    <p v-for="item in list.list" :key="item.id">
      {{ item.text }}
      <button @click="() => del(item.id)">删除</button>
    </p>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import Add from "../components/Add.vue";
export default {
  name: "Home",
  components: {
    Add,
  },
  setup() {
    const list = reactive({
      list: [
        {
          id: 1,
          text: "one",
        },
      ],
    });
    return {
      list,
      del(id) {
        let arr = this.list.list;
        arr.forEach((item, i) => {
          this.list.list.splice(i, 1);
        });
      },
    };
  },
};
</script>