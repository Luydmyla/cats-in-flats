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
@media (min-width: 320px) {
.error {
     background-color: #fff;
    &__title {
        font-size: 60px;
        text-align: center;
    }
}

}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.error {
     background-color: #fff;
    &__title {
        font-size: 60px;
        text-align: center;
    }
}

}

</style>
