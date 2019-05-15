<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "./todo/header.vue";
export default {
  components: {
    Header
  }
};
</script>


<style scoped lang="stylus">
#app {
  position: absolute;
}
</style>
