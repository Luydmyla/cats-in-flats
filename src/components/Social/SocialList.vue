<template>
          
                  <!-- <p class="social-text">Соцмережі</p> -->
                  <ul class="social-links">
<SocialItem href="/img/icons.svg#icon-instagram"/>
    <SocialItem href="/img/icons.svg#icon-facebook"/>
    <SocialItem href="/img/icons.svg#icon-youtube"/>
    <SocialItem href="/img/icons.svg#icon-tiktok"/>
                  
                  </ul>
             
</template>

<script>
import SocialItem from './SocialItem.vue';
    export default {
    name: "SocialList",
    components: {
        SocialItem,
    }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
/* .social-text{
color: var(--WHITE, #FFF);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: right;
        } */
        
        .social-links{
            /* width: 100%; */
            /* gap: 32px; */
            display: flex;
            gap: 8px;
            /* justify-content: space-between;
            align-items: center;
            text-align: center; */
        }
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
   .social-links{
            /* width: 100%; */
            /* gap: 32px; */
            display: flex;
            gap: 8px;
            /* justify-content: space-between;
            align-items: center;
            text-align: center; */
        }
}
</style>