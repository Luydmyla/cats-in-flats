<template>
                <a href="">{{text}}</a>
</template>

<script>


    export default {
    name: "NavItem", 
    props: {
        text: {
            type: String,
            required: true,
        }
    }  
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
a{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-basis: calc((100% - 8px) / 3);
}
}
@media (min-width: 1024px) {
  a{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-basis: fit-content;
    font-size: 26px;
    font-weight:bold;
    color: #2b21f9;
}  
} 
</style>