<template>
  <div>
    <Header />
    <div class="filter-container">
      <RowFilters />
      <div class="flex-center relative">
        <transition name="fade">
          <ProjectCount class="absolute" v-if="!activeFilter" />
        </transition>
        <transition name="fade">
          <div class="absolute flex-center ls-2" v-if="activeFilter">
            <ProjectFilter v-if="activeFilter == 'project'" />
            <CountryFilter v-if="activeFilter == 'country'" />
            <LanguageFilter v-if="activeFilter == 'language'" />
            <FrameworkFilter v-if="activeFilter == 'framework'" />
            <TeamSizeFilter v-if="activeFilter == 'team size'" />
            <CloseFilter />
          </div>
        </transition>
      </div>
    </div>
    <div class="flex-row">
      <!--<Filters style="width:20%" />-->
      <Gallery style="max-width:799px" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Gallery from "@/components/Gallery.vue";
import RowFilters from "@/components/RowFilters.vue";
import ProjectCount from "@/components/ProjectCount.vue";
import ProjectFilter from "@/components/ProjectFilter.vue";
import CountryFilter from "@/components/CountryFilter.vue";
import LanguageFilter from "@/components/LanguageFilter.vue";
import FrameworkFilter from "@/components/FrameworkFilter.vue";
import TeamSizeFilter from "@/components/TeamSizeFilter.vue";
import CloseFilter from "@/components/CloseFilter.vue";

export default {
  name: "Home",
  components: {
    Header,
    Gallery,
    Filters,
    RowFilters,
    ProjectCount,
    ProjectFilter,
    CloseFilter,
    CountryFilter,
    LanguageFilter,
    FrameworkFilter,
    TeamSizeFilter,
  },
  props: {
    msg: String,
  },
  mounted() {
    console.log(this);
  },
  computed: {
    activeFilter() {
      return this.$store.state.activeFilter;
    },
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
  margin-top: 5rem;
  margin-bottom: 4rem;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.relative {
  position: relative;
  height: 4rem;
}

.absolute {
  position: absolute;
}

.ls-2 {
  letter-spacing: 2px;
}
</style>
