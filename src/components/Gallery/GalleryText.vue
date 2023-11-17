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
.section-text{
                /* width: 604px; */
                color: var(--GREY, #2C2C2C);
                margin-top: 8px;
                background-color: #e7ecf2;
            }
</style>