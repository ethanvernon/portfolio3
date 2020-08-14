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
    console.log("test");
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(37, 37, 37);
  max-width: 1080px;
  margin: auto;
}

// Custom variables go here
$primary: #1bbcf0;
// Import Bulma and Buefy styles
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";

html {
  font-size: 14.5px;
}
</style>
