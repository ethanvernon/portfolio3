<template>
    <div class="margin-2 flex-row relative">
        <div class="align-center">
            <h1>Ethan Vernon</h1>
            <h2>Full-stack Web Developer</h2>
        </div>
        <div class="absolute right-0">
            <img src="../assets/ethan.jpeg" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
div > img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
}

.margin-2 {
    margin: 2rem;
}

.flex-row {
    display: flex;
    flex-direction: row;
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

.right-0 {
    right: 0;
}
</style>
