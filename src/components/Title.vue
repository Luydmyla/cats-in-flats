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
@media (min-width: 280px) {
    .section-title{
            font-family: Montserrat;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 20px;
                text-align: center;
                width: 100%;
                height: 100%;
                padding: 10px;
                letter-spacing: 0.5px;
                color: var(--GREY, #2C2C2C);
                  background-color:#c8b69e
            }
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
    .section-title{
            font-family: Montserrat;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 40px;
                text-align: center;
                width: 100%;
                height: 100%;
                letter-spacing: 0.5px;
                color: var(--GREY, #2C2C2C);
                  background-color:#c8b69e;
                  margin-top: 20px;
            }
}
</style>