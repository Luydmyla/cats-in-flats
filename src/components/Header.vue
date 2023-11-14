<template>
     <header class="container header">
          <div>
            <a href="/" class="logo">
              <img src="../assets/img/cat.svg" class="logo-img" width="24" height="24" />

              <h2 class="logo-title">Котодім</h2>
            </a>
          </div>
          <nav class="nav">
            <a href="">Обрати котика</a>
            <a href="">Задонатити котикам</a>
            <a href="">Контакти</a>
          </nav>
        </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
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
    color: var(--ORANGE, #F07F2E);
}
.nav{
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
}
</style>