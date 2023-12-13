<template>
       
                  <div class="logo-wrap">
                    <a href="/" class="logo-src">
                      <!-- <img
                        src="../../src/assets/img/cat.svg"
                        class="logo-img"
                        width="24"
                        height="24"
                      /> -->
                      <img
                          src="../../src/assets/img/catIcon.svg"
                          class="logo-img"
                          width="48"
                          height="48"
                          fill="orange"
                          :class="icon"
                        />
                    </a>
                  </div>
                  
              
</template>

<script>
export default {
    name: "Logo",
    //    props: {
    //     text: {
    //         type: String,
    //         required: true,
    //     }
    // }  
        
    }
</script>

<style lang="scss" scoped>

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
    /* stroke: brown; */
  fill: currentColor;
    /* fill: brown; */
}
.logo-wrap{
  /* width: 64px;
  height: 64px; */
  display: flex;
  background:  rgb(227, 135, 50, 0.2);
}
/* .logo{
display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.logo-text{
color: var(--WHITE, #FFF);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
} */
</style>