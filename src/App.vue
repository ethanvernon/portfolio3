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

    if (
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1"
    ) {
      this.setProjectData([
        {
          name: "Tribute Page",
          description:
            "An HTML/CSS project in CodePen with a timeline detailing the life of Goku.",
          start_date: "2018-05-04",
          end_date: "2018-05-04",
          team_size: "1",
          project_id: "1",
          is_pro: "0",
          technologies: "HTML, CSS",
          countries: "China",
        },
        {
          name: "ClimateSpy App",
          description:
            "A full-stack JavaScript, global temperature tracker with data visualization, authentication, authorization, and multiple screens. Cloud database using MongoDB.",
          start_date: "2019-06-05",
          end_date: "2019-07-09",
          team_size: "2",
          project_id: "2",
          is_pro: "0",
          technologies: "JavaScript, React, HTML, CSS",
          countries: "China, USA",
        },
        {
          name: "ClimateSpy App",
          description:
            "A full-stack JavaScript, global temperature tracker with data visualization, authentication, authorization, and multiple screens. Cloud database using MongoDB.",
          start_date: "2019-06-05",
          end_date: "2019-07-09",
          team_size: "2",
          project_id: "2",
          is_pro: "0",
          technologies: "JavaScript, React, HTML, CSS",
          countries: "China, USA",
        },
        {
          name: "ClimateSpy App",
          description:
            "A full-stack JavaScript, global temperature tracker with data visualization, authentication, authorization, and multiple screens. Cloud database using MongoDB.",
          start_date: "2019-06-05",
          end_date: "2019-07-09",
          team_size: "2",
          project_id: "2",
          is_pro: "0",
          technologies: "JavaScript, React, HTML, CSS",
          countries: "China, USA",
        },
        {
          name: "ClimateSpy App",
          description:
            "A full-stack JavaScript, global temperature tracker with data visualization, authentication, authorization, and multiple screens. Cloud database using MongoDB.",
          start_date: "2019-06-05",
          end_date: "2019-07-09",
          team_size: "2",
          project_id: "2",
          is_pro: "0",
          technologies: "JavaScript, React, HTML, CSS",
          countries: "China, USA",
        },
      ]);

      this.setProjectFilteredData([
        {
          name: "Tribute Page",
          description:
            "An HTML/CSS project in CodePen with a timeline detailing the life of Goku.",
          start_date: "2018-05-04",
          end_date: "2018-05-04",
          team_size: "1",
          project_id: "1",
          is_pro: "0",
          technologies: "HTML, CSS",
          countries: "China",
        },
        {
          name: "ClimateSpy App",
          description:
            "A full-stack JavaScript, global temperature tracker with data visualization, authentication, authorization, and multiple screens. Cloud database using MongoDB.",
          start_date: "2019-06-05",
          end_date: "2019-07-09",
          team_size: "2",
          project_id: "2",
          is_pro: "0",
          technologies: "JavaScript, React, HTML, CSS",
          countries: "China, USA",
        },
      ]);

      return;
    }

    axios
      .get("test.php")
      .then(function (response) {
        console.log("response:", response.data);
        localThis.setProjectData(response.data);
        localThis.setProjectFilteredData(response.data);
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
