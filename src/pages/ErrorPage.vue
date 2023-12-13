<template>
    <section class="error">
        <h1 class="error__title">Такої сторінки немає</h1>
    </section>
</template>

<script>
export default {
    name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error {
     background-color: #fff;
    &__title {
        font-size: 60px;
        text-align: center;
    }
}
</style>
