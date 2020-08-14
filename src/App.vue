<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    axios
      .get("test.php")
      .then(function (response) {
        console.log("response:", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(37, 37, 37);
  max-width: 1080px;
  margin: auto;
}

html,
body {
  font-size: 14.5px;
  font-family: "Montserrat", sans-serif;
}
</style>
