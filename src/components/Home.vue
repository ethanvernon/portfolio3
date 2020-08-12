<template>
    <div>
        <Header />
        <!-- <Filters /> -->
        <!-- <Gallery /> -->
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
// import Filters from "@/components/Filters.vue";
// import Gallery from "@/components/Home.vue";

export default {
    name: "Home",
    components: {
        Header
    },
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
