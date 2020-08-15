<template>
  <div class="flex-center color-gray">
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="frameworkFilter=='any framework' ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'framework', filterValue:'any framework'})"
    >
      <p>ANY FRAMEWORK</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="frameworkFilter=='vue'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'framework', filterValue:'vue.js'})"
    >
      <p>VUE.JS</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="frameworkFilter=='react'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'framework', filterValue:'react'})"
    >
      <p>REACT</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="frameworkFilter=='jquery'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'framework', filterValue:'jquery'})"
    >
      <p>JQUERY</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FrameworkFilter",
  components: {},
  props: {},
  computed: {
    frameworkFilter() {
      return this.$store.state.frameworkFilter;
    },
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-center {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .margin-1 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .cursor-pointer:hover {
    color: black;
  }

  .underline {
    border-bottom: 1px DASHED #222;
    transition: border-bottom 0.2s linear;
    padding-bottom: 3px;
  }

  .no-underline {
    border-bottom: 1px DASHED rgba(34, 34, 34, 0);
    padding-bottom: 3px;
    transition: border-bottom 0.2s linear;
  }

  .weight-600 {
    font-weight: 600;
  }

  p {
    margin: 0;
  }
}

.color-gray {
  color: #555;
}
</style>
