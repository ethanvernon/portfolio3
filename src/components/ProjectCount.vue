<template>
  <div class="flex-center">
    <p>{{projectFilteredData.length}} / {{projectData.length}}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectCount",
  components: {},
  computed: {
    projectData() {
      return this.$store.state.projectData;
    },
    projectFilteredData() {
      return this.$store.state.projectFilteredData;
    },
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-center {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    letter-spacing: 2px;
    padding-bottom: 3px;
  }
}
</style>
