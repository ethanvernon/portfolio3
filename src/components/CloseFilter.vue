<template>
  <div class="pb-3px mx-2 cursor-pointer" @click="setActiveFilter(null)">
    <vue-fontawesome icon="times" class="transition" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CloseFilter",
  components: {},
  props: {},
  data() {
    return {
      spin: false,
    };
  },
  methods: {
    ...mapActions(["setActiveFilter"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pb-3px {
  padding-bottom: 3px;
}

.mx-2 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.cursor-pointer {
  cursor: pointer;
}

.transition {
  transition: transform 0.1s linear;
}

div:hover > .transition {
  transform: rotate(180deg);
}
</style>
