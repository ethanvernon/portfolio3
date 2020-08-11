<template>
    <div class="home">
        <Home />
    </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import axios from "axios";

export default {
    name: "Home",
    components: {
        Home
    },
    mounted() {
        console.log("test");
        axios
            .get("test.php")
            .then(function(response) {
                console.log("response:", response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
</script>
