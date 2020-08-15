<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "@/components/Home.vue";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    let localThis = this;
    axios
      .get("test.php")
      .then(function (response) {
        console.log("response:", response.data);
        localThis.setProjectData([
          {
            name: "Tribute Page",
            description:
              "An HTML/CSS project in CodePen with a timeline detailing the life of Goku.",
            start_date: "2018-05-04",
            end_date: "2018-05-04",
            team_size: "1",
            project_id: "1",
          },
        ]);
        localThis.setProjectFilteredData([
          {
            name: "Tribute Page",
            description:
              "An HTML/CSS project in CodePen with a timeline detailing the life of Goku.",
            start_date: "2018-05-04",
            end_date: "2018-05-04",
            team_size: "1",
            project_id: "1",
          },
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["setProjectData", "setProjectFilteredData"]),
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
  // font-family: "Montserrat", sans-serif;
  // font-family: "Arvo", serif;
  font-family: "Bitter", serif;
}
</style>
