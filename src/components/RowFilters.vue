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
      >{{countryFilter}}</span>, with
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('language')"
      >{{languageFilter}}</span>, with
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('framework')"
      >{{frameworkFilter}}</span>, with
      <!-- prettier-ignore -->
      <!-- prettier-ignore-attribute -->
      <span
        class="underline ls-1 uppercase bold"
        @click="setActiveFilter('team size')"
      >{{teamSizeFilter}}</span>
      <span v-if="teamSizeFilter!='one'">{{" "}}developers.</span>
      <span v-else>{{" "}}developer.</span>
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
    frameworkFilter() {
      return this.$store.state.frameworkFilter;
    },
    teamSizeFilter() {
      return this.$store.state.teamSizeFilter;
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
