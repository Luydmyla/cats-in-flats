<template>
                  <div class="logo-wrap">
                    <a href="/cats-in-flats/" class="logo-src">
                      <!-- <svg>
                        <use href="../../src/assets/img/catIcon.svg"></use>
                      </svg> -->
                     <!-- <use href="../../src/assets/img/icons.svg#
                    icon-instagram"></use> -->
           
                      <!-- <img
                          src="../../src/assets/img/catIcon.svg"
                          class="logo-img"
                          width="48"
                          height="48"
                          fill="orange"             
                        /> -->
                         <img
                            src="../../src/assets/img/catIcon.svg"
                            class="logo-img"
                          
                            fill="orange"             
                          />
                    </a>
                  </div>
                  
              
</template>

<script>
import { useLink } from 'vue-router';

export default {
    name: "Logo",
    components: { useLink }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
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
  width: 40px;
  height: 40px;
  display: flex;
   border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
               padding: 8px;
                background-color:#fffcf1;
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
.logo-img{
  width:  24px;
  height: 24px;
}
.logo-src{
  width: 100%;
}
  
}

@media (min-width: 1024px) {
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
  width: 64px;
  height: 64px;
  display: flex;
   border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
               padding: 10px;
                background-color:#fffcf1;
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
.logo-img{
  width:  48px;
  height: 48px;
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