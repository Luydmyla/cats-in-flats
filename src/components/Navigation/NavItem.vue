<template>
    <!-- <div class="link"> -->
                <a href="">{{text}}</a>
              <!-- </div> -->
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
    /* width: calc((100%-8px)/3); */
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
    /* width: 100%; */
}  
} 
</style>