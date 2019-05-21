<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么"
      @keyup="addTodo"
    >
    <Item :todo="todo"></Item>
    <Tabs :filter="filter"></Tabs>
  </section>
</template>

<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
export default {
  data() {
    return {
      todo: {
        id: 0,
        content: "121212121",
        completed: false
      },
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  methods: {
    addTodo() {}
  }
};
</script>