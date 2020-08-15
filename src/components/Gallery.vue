<template>
  <div class="project-container row">
    <div
      class="project overflow-hidden"
      v-for="(project, index) in projectData"
      :key="index"
    >{{JSON.stringify(project)}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    projectData() {
      return this.$store.state.projectData;
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  width: 200px;
  height: 200px;
  border: 1px solid lightgray;
  margin-bottom: 3rem;
}

.project-container {
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.overflow-hidden {
  overflow: hidden;
}
</style>
