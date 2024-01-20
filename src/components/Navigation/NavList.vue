<template>
   <nav class="nav">           
                <router-link to="/cats">
      <NavItem text="Обрати котика"></NavItem>
                </router-link>
   <router-link to="/donats">
     <NavItem text="Задонатити котикам "></NavItem>
   </router-link>
     <router-link to="/contacts">
      <NavItem text=" Контакти "></NavItem>
     </router-link>
              </nav>
</template>

<script>
import NavItem from './NavItem.vue';
export default {
    name: "NavList",
    components: {
            NavItem,
        }       
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.nav{
    color: var(--GREY, #2C2C2C);
        font-family: Montserrat;
        font-size: 14px;
        /* font-style: normal; */
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0.5px;
        padding: 8px;
}
@media (min-width: 1024px) {
    .nav{
        display: flex;
        align-items: flex-start;
        gap: 40px;
        color: var(--GREY, #2C2C2C);
        font-family: Montserrat;
        font-size: 24px;
        /* font-style: normal; */
        font-weight: 700;
        line-height: 24px;  
        letter-spacing: 0.5px;
         padding: 16px;
}
}
}

</style>