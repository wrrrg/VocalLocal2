<template>
<div>
  <h1 id="bands">
    <button class="styled" @click="onBands" type="button">
    {{bands}}
    </button>
  </h1>
  </div>
</template>


<script>
import bandsintown from "@/api/bandsintown";
export default {
  name: "group",
  data() {
    return {
      bands: "Bands",
      onBands() {
        alert("Bands");
      }
    };
  },
  console() {
    bandsintown.getBands();
  }
};
</script>

<style>
input {
  margin-left: -20px;
  width: 20vw;
}
h1 {
  text-align: center;
}
.styled {
  border: 0;
  line-height: 2.5;
  padding: 0 25px;
  font-size: 1rem;
  text-align: center;
  color: black;
  text-shadow: 1px 1px 1px #000;
  border-radius: 10px;
  background-color: #bb8a4a;
  background-image: linear-gradient(
    to top left,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0)
  );
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.styled:hover {
  background-color: grey;
}

.styled:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
</style>