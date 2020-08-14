<template>
  <div>
    <p>
      Viewing
      <span class="underline">ALL</span> projects made in
      <span class="underline">ANY</span> country in
      <span class="underline">ALL LANGUAGES</span>, with
      <span class="underline">ALL FRAMEWORKS</span>, with
      <span class="underline">ANY # OF</span> developers
    </p>
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {},
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
p {
  text-align: center;
  font-size: 0.9rem;
  margin: 1.35rem auto;
  color: #555;
}

span {
  font-weight: 800;
  cursor: pointer;
}

.underline {
  border-bottom: 1px DASHED #1bbcf0;
  padding-bottom: 3px;
}

// .underline {
//   text-decoration: none;
//   position: relative;
// }

// .underline:after {
//   position: absolute;
//   height: 1px;
//   margin: 0 auto;
//   content: "";
//   left: 0;
//   right: 0;
//   width: 100%;
//   color: #000;
//   background-color: #1bbcf0;
//   left: 0;
//   bottom: -3px; /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
// }

span:hover {
  color: #222;
}

div {
  margin-top: 3rem;
  margin-bottom: 6rem;
}
</style>
