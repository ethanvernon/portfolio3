<template>
  <div class="flex-center color-gray">
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="active=='all' ? 'underline' : 'no-underline'"
      @click="changeActive('all')"
    >
      <p>ALL</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="active=='one'  ? 'underline' : 'no-underline'"
      @click="changeActive('one')"
    >
      <p>ONE</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="active=='two'  ? 'underline' : 'no-underline'"
      @click="changeActive('two')"
    >
      <p>TWO</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSizeFilter",
  components: {},
  props: {},
  data() {
    return {
      active: "all",
    };
  },
  methods: {
    changeActive(filter) {
      this.active = filter;
    },
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
