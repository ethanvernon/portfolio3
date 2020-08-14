<template>
  <div>
    <p>
      Viewing
      <span class="underline" @click="setActiveFilter('project')">ALL</span> projects made in
      <span class="underline" @click="setActiveFilter('country')">ANY</span> country in
      <span class="underline" @click="setActiveFilter('language')">ALL LANGUAGES</span>, with
      <span class="underline" @click="setActiveFilter('framework')">ALL FRAMEWORKS</span>, with
      <span class="underline" @click="setActiveFilter('team size')">ANY # OF</span> developers
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RowFilters",
  components: {},
  props: {},
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

span {
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
</style>
