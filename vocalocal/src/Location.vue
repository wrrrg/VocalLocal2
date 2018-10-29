<template>
<div>
  <h1 id="button_location">
    <button class="styled" @click="onLogin" type="button">
    {{buttonLogin}}
    </button>
    <button class="styled" @click="onLocation" type="button">
    {{button}}
    </button>
    <button class="styled" @click="onFind" type="button">
    {{button2}}
    </button>
    
    <button class="styled" @click="onArtist" type="button">
    {{button3}}
    </button>
  </h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      buttonLogin: "Log In/Sign Up",
      onLogin() {
        alert("Login");
      },
      button: "Location",
      onLocation() {
        alert("Location");
      },
      button2: "Find Events Near Me",
      onFind() {
        alert("Find");
      },
      button3: "Artist",
      onArtist() {
        alert("Artist");
      }
    };
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