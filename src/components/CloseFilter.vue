<template>
  <div class="pb-3px cursor-pointer">
    <vue-fontawesome icon="times" class="transition" />
  </div>
</template>

<script>
export default {
  name: "ProjectFilter",
  components: {},
  props: {},
  data() {
    return {
      spin: false,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pb-3px {
  padding-bottom: 3px;
}

.cursor-pointer {
  cursor: pointer;
}

.transition {
  transition: transform 0.1s linear;
}

.transition:hover {
  transform: rotate(180deg);
}
</style>
