<template>
  
                  <p class="section-text">
                    {{ textPre  }}<br />
                    {{ textAfter }}
                    <!-- Ти тільки поглянь, скільки ніжності!<br />
                    На місці цих задоволених людей можеш бути ти. -->
                  </p>
</template>

<script>
    export default {
  name: "GalleryText",
    props: {
      textPre: {
   type: String,
      required: true,
      },
textAfter: {
      type: String,
      required: true,
    }
  }
}

</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.section-text{
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 150% */
    letter-spacing: 0.5px;
                color: var(--GREY, #2C2C2C);
                margin-top: 8px;
                background-color: #ece0ce ;
                padding: 8px;
            }
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.section-text{
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.5px;
    color: var(--GREY, #2C2C2C);
    margin-top: 8px;
    background-color:#ece0ce ;
    padding: 10px;
            }
}
</style>