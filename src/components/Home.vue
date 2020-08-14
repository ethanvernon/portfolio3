<template>
  <div>
    <Header />
    <RowFilters/>
    <div class="flex-row">
      <!--<Filters style="width:20%" />-->
      <Gallery style="width:74%" />
      <div style="width:6%" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Gallery from "@/components/Gallery.vue";
import RowFilters from "@/components/RowFilters.vue";

export default {
  name: "Home",
  components: {
    Header,
    Gallery,
    Filters,
    RowFilters
  },
  props: {
    msg: String
  }
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
</style>
