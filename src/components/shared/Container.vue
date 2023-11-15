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
.container {
width: 960px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;



    /* max-width: 1110px; */
    /* margin: 0 auto; */
}
</style>
