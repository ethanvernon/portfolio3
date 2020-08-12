<template>
  <div class="project-container">
    <div
      class="project"
      v-for="(project, index) in projects"
      :key="index"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    };
  }
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
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
