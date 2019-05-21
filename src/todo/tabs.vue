<template>
  <div class="helper">
    <span class="left">2 items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[filter === state ? 'active': '']"
        @click="toggoleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  methods: {
    clearAllCompleted() {},
    toggoleFilter() {}
  }
};
</script>

<style lang="stylus" scoped>
.active {
  color: red;
}
</style>