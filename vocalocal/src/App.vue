
<template>
  <h1 @click="onClick">
    {{message}}
  </h1>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
export default Component({})(
  class App extends Vue {
    message = "Vocal";
    onClick() {
      this.message = "Local";
    }
  }
);
</script>
<style>
body {
  background-color: bisque;
}
</style>
<style scoped>
h1 {
  background: black;
  text-align: center;
  color: #bb8a4a;
  font-size: 12vh;
}
</style>