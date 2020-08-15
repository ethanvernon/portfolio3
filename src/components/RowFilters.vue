<template>
  <div>
    <p>
      Viewing
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('project')"
      >{{projectFilter}}</span>
      projects made in
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('country')"
      >{{countryFilter}}</span>, in
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('language')"
      >{{languageFilter}}</span>, with
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('framework')"
      >ALL FRAMEWORKS</span>, with
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('team size')"
      >ANY # OF</span> developers
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RowFilters",
  components: {},
  props: {},
  computed: {
    projectFilter() {
      return this.$store.state.projectFilter;
    },
    countryFilter() {
      return this.$store.state.countryFilter;
    },
    languageFilter() {
      return this.$store.state.languageFilter;
    },
  },
  methods: {
    ...mapActions(["setActiveFilter"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  text-align: center;
  margin: 1.5rem auto;
  line-height: 1.5rem;
  color: #555;
}

.bold {
  font-weight: 800;
  cursor: pointer;
}

.underline {
  border-bottom: 1px DASHED #1bbcf0;
  padding-bottom: 1.5px;
}

span:hover {
  color: #222;
}

.ls-1 {
  letter-spacing: 1px;
}

.uppercase {
  text-transform: uppercase;
}
</style>
