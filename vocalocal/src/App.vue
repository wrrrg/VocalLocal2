
<template>
<div>
<h1>{{title}}<img src="./assets/iconmonstr-headphones-8.svg" width="200px" height="60px"></h1>
<location id="test"></location>
</div>
  <!-- <h1 @click="onClick">
    {{message}}
    
  </h1> -->
  <!-- <location></location> -->
  

</template>

<script>
export default {
  data() {
    return {
      title: "VocaLocal"
    };
  }
};

// import Vue from "vue";
// import Component from "vue-class-component";
// export default Component({})(
//   class App extends Vue {
//     message = "Vocal";
//     location = "TBD";
//     onClick() {
//       this.message = "Local";
//     }
//   }
// );
</script>
<style>
body {
  background-color: bisque;
}
</style>
<style scoped>
h1 {
  /* background: black; */
  text-align: center;
  color: #bb8a4a;
  font-size: 15vw;
}

/* #test {
  margin: auto;
} */
</style>