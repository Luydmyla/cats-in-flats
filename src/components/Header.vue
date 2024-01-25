<template>

     <header class=" header">
     <Container >   
      <div class="header-containrt">
         <a href="/cats-in-flats/" class="logo">
          <Logo></Logo>
          <h2 class="logo-title">КотоХатка</h2>
         </a>
        
           <!-- <p v-if="isMobile">
          меню
         </p> -->
         
         <div  @click="showMenu" class="mobileMenu" >
               <!-- <div v-if="isMobile" ></div> -->
          <!-- <svg class="icon icon-menu"><use href="../assets/img/menu.svg"></use></svg>
  -->
  <!-- <a  href="">  -->
      <img src="../assets/img/cat.svg" />
    <!-- </a> -->
         </div>
            <NavList  class="displayMenu"/> 
      </div>
         </Container> 
        </header> 
</template>

<script>
import Container from "./shared/Container.vue";
import Logo from "./Logo.vue";
import NavList from "./Navigation/NavList.vue";
    export default {
    name: "Header", 
  components: {
         Container,
          Logo,
        NavList,
  },  
  //  data() {
  //   return {
  //     isOpen: false,
  //   }
  // },
  // methods: {
  //   ...mapActions('auth', ['logout']),
  //   open() {
  //     this.isOpen = true
  //   },
  //   close() {
  //     this.isOpen = false
  //   },
  //   toggle() {
  //     this.isOpen = !this.isOpen
  //   },
  data() {
    return {
       isMobile : false
    }
  },
  methods: {
    // MobileMedia() {
    //   return ("@media screen and(min - width: 320px);")
    // },
    // chooseMedia() {
    //  const mobileMedia= "@media screen and(min - width: 320px);"
    //   if (mobileMedia) {
    //    this.isMobile = true;
    //   }   
    //  else this.isMobile = false;

    // },
    showMenu() {

      console.log("open menu")
}
    
  }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {

.header{
    background-color: #ece0ce;
     
}
.header-containrt{
 width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.logo{
    display: flex;
    /* padding: 0px 2px; */
    align-items: center;
    /* gap: 4px; */
}
.logo-img {
    display: block;
    margin-right: 4px;
}
 .mobileMenu{
    display: block;
    }
    .displayMenu{
      display: none;
    }
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.logo-title{
font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.5px;
    border-radius: 16px;
      color:#4b523f ;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 8px;
    transition: 500ms linear;
     &:hover,
  &:focus {
    transform: scale(1.08);
    transform-origin: center;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

}
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
/* .container{
    padding-left: 8px;
    padding-right: 8px;
    margin-left: auto;
    margin-right: auto;
} */
.header{
  width: 100%;
   
    background-color: #ece0ce ;
}

.header-containrt{
 width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.logo{
    display: flex;
    /* padding: 0px 2px; */
    align-items: center;
    gap: 8px;
    
    
}
.logo-img {
    display: block;
    margin-right: 8px;
}
 .mobileMenu{
    display: none;
    }
    .displayMenu{
      display: flex;
    }
.logo-title{
font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.5px;
    color:#4b523f ;
      &:hover,
  &:focus {
    transform: scale(1.08);
    transform-origin: center;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
}
</style>