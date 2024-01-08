<template>
     <header class="container header">
      
          <div>
            <a href="/cats-in-flats/" class="logo">
              <!-- <img src="../assets/img/cat.svg" class="logo-img" width="24" height="24" /> -->
      <Logo></Logo>
              <h2 class="logo-title">КотоХатка</h2>
            </a>
          </div>
          <!-- <nav class="nav">
            <a href="">Обрати котика</a>
            <a href="">Задонатити котикам</a>
            <a href="">Контакти</a>
          </nav> -->
          <NavList />
        </header>
</template>

<script>
import Logo from "./Logo.vue";
import NavList from "./Navigation/NavList.vue";
    export default {
    name: "Header", 
      components: {
          Logo,
        NavList,
    },   
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.container{
    /* width: 960px; */
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
     background-color: #e7ecf2;
}
.logo{
    display: flex;
        padding: 0px 2px;
        align-items: center;
        gap: 4px;
}
.logo-img {
    display: block;
    margin-right: 4px;
}
.logo-title{
font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    /* 166.667% */
    letter-spacing: 0.5px;
    color: var(--ORANGE, #F07F2E);
       color: #2b21f9;

}
/* .nav{
  
        align-items: center;
            align-content: center;
    
    color: var(--GREY, #2C2C2C);
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0.5px;
} */
/* .nav a{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-basis: calc((100% - 8px) / 3);
   
} */
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.container{
    /* width: 960px; */
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
     background-color: #e7ecf2;
}
.logo{
    display: flex;
        padding: 0px 2px;
        align-items: center;
        gap: 8px;
    
    
}
.logo-img {
    display: block;
    margin-right: 8px;
}
.logo-title{
font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    /* 166.667% */
    letter-spacing: 0.5px;
    /* color: var(--ORANGE, #F07F2E); */
        /* color: #149dd8 ; */
          color: #2b21f9;
}
/* .nav{
        display: flex;
        align-items: flex-start;
        gap: 40px;
        color: var(--GREY, #2C2C2C);
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
       
        letter-spacing: 0.5px;
} */



}



</style>