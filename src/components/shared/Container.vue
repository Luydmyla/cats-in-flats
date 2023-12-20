<template>
    <div class="container">
        <slot>Default value</slot>
    </div>
</template>

<script>
export default {
    name: "Container",
};
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.container {
    display: flex;
/* width: 960px; */
    /* padding-left: 8px; */
    /* padding-right: 8px; */
    margin-left: auto;
    margin-right: auto;



    /* max-width: 1110px; */
    /* margin: 0 auto; */
}


}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.container {
    display: flex;
    /* padding-left: 8px; */
    /* padding-right: 8px; */
    margin-left: auto;
    margin-right: auto;
}


}


</style>
