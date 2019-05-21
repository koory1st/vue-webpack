<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Footer></Footer>
    <Todo></Todo>
  </div>
</template>

<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.jsx";
import Todo from "./todo/todo.vue";

export default {
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>


<style scoped lang="stylus">
#app {
  position: absolute;
}
</style>
