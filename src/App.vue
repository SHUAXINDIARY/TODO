<template>
  <router-view></router-view>
</template>

<script>
import home from "./views/Home";
export default {
  name: "app",
  components: {
    home
  }
};
</script>
<style lang="less">
body,
ul {
  margin: 0;
  padding: 0;
}
</style>
