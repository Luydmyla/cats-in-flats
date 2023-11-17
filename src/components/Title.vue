<template>
     <h2 class="section-title">{{ text }} </h2>
</template>

<script>
    export default {
    name: "Title",
    props: {
        text: {
            type: String,
            required: true,
        }
       } 
    }
</script>

<style lang="scss" scoped>
 .section-title{
            font-family: Montserrat;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 40px;
                width: 100%;
                height: 100%;
                /* 166.667% */
                letter-spacing: 0.5px;
                color: var(--GREY, #2C2C2C);
                  background-color:#c8b69e
                 /* color: red */
       
            }
</style>