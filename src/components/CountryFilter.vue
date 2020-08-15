<template>
  <div class="flex-center color-gray">
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="countryFilter=='any' ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'country', filterValue:'any'})"
    >
      <p>ALL</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="countryFilter=='china'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'country', filterValue:'china'})"
    >
      <p>CHINA</p>
    </div>
    <div
      class="margin-1 cursor-pointer weight-600"
      :class="countryFilter=='usa'  ? 'underline' : 'no-underline'"
      @click="setFilter({filterType: 'country', filterValue:'usa'})"
    >
      <p>USA</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CountryFilter",
  components: {},
  props: {},
  computed: {
    countryFilter() {
      return this.$store.state.countryFilter;
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
