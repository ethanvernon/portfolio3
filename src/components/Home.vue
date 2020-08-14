<template>
  <div>
    <Header />
    <div class="filter-container">
      <RowFilters />
      <ProjectCount v-if="!currentFilter" />
      <!-- <ProjectFilter v-else-if='currentFilter == 'project'/> -->
    </div>
    <div class="flex-row">
      <!--<Filters style="width:20%" />-->
      <Gallery style="max-width:799px" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Gallery from "@/components/Gallery.vue";
import RowFilters from "@/components/RowFilters.vue";
import ProjectCount from "@/components/ProjectCount.vue";

export default {
  name: "Home",
  components: {
    Header,
    Gallery,
    Filters,
    RowFilters,
    ProjectCount,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      currentFilter: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-row {
  display: flex;
  //   align-items: center;
  justify-content: center;
  flex-direction: row;
}

.filter-container {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
