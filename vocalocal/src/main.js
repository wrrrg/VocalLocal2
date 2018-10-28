import "tailwindcss/dist/tailwind.css";
import Vue from "vue";
import App from "./App";
import Location from "./Location.vue";

Vue.component("location", Location);

new Vue({
  el: "#app",
  render: h => h(App)
});
