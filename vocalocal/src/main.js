import "tailwindcss/dist/tailwind.css";
import Vue from "vue";
import App from "./App";
import Location from "./Location.vue";
import Bands from "./Bands.vue";
import axios from "axios";

axios.defaults.baseURL =
  "https://rest.bandsintown.com/artists/Nas?app_id=codingbootcamp";

// import GoogleAuth from "vue-google-oauth";

// Vue.use(GoogleAuth, {
//   client_id: "xxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com"
// });
// Vue.googleAuth().load();

Vue.component("location", Location);
Vue.component("bands", Bands);
// Vue.component("bands", Bands);

new Vue({
  el: "#app",
  render: h => h(App)
});
