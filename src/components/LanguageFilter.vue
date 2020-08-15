<template>
  <div class="flex-center color-gray">
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='any language' ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'any language'})"
    >
      <p>ALL</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='javascript'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'javascript'})"
    >
      <p>JAVASCRIPT</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='c#'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'c#'})"
    >
      <p>C#</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='python'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'python'})"
    >
      <p>PYTHON</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='html'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'html'})"
    >
      <p>HTML</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="languageFilter=='css'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'language', filterValue:'css'})"
    >
      <p>CSS</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LanguageFilter",
  components: {},
  props: {},
  computed: {
    languageFilter() {
      return this.$store.state.languageFilter;
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
