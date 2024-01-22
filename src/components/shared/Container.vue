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
@media screen and (min-width: 280px) {
.container {
    /* display: flex; */
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
    max-width: 280px;
   }
}

 @media screen and (min-width: 768px) {
    .container {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }}

 @media screen and (min-width: 1024px) {
.container {
    /* display: flex; */
    margin-left: auto;
    margin-right: auto;
    max-width: 1024px;
    padding-left: 16px;
    padding-right: 16px;
}
}
</style>