<template>
  <div class="margin-1 width-100 mb-2" style="position:relative">
    <div class="align-center">
      <h1>Ethan Vernon</h1>
      <h3>Full-stack Web Developer</h3>
    </div>
    <div class="mobile-hide" style="position:absolute;top:0px;right:16px">
      <a href="https://linkedin.com/in/ethanvernon" target="blank">
        <img src="../assets/ethan.jpeg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div > a > img {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
}

.width-100 {
  width: 100%;
}

.margin-1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.align-center {
  align-self: center;
  text-align: center;
  width: 100%;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.left-0 {
  left: 0;
}

h1 {
  font-size: 3rem;
  margin-top: 0rem;
}

h3 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
}

.mb-2 {
  margin-bottom: 2rem;
}

@media only screen and (max-width: 500px) {
  .mobile-hide {
    display: none;
  }
}
</style>
