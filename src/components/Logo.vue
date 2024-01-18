<template>
       
                  <div class="logo-wrap">
                    <a href="/cats-in-flats/" class="logo-src">
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
   border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
               padding: 10px;
                background-color: #e7ecf2;
                transition: 500ms linear;
     &:hover,
  &:focus {
    transform: scale(1.05);
    transform-origin: center;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
     rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
       rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
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