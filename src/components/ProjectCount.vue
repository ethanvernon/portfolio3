<template>
  <div class="flex-center">
    <p>39 / 39</p>
  </div>
</template>

<script>
export default {
  name: "ProjectCount",
  components: {},
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
