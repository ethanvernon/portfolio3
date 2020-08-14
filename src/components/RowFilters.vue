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
  margin: 1.5rem auto;
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

span:hover {
  color: #222;
}
</style>
