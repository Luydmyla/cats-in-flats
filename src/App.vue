<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";
import Container from "./components/shared/Container.vue";
import HeroItem from "./components/Hero/HeroItem.vue";
// import CatsItem from "./components/Cats/CatsItem.vue";
import Title from "./components/Title.vue";
import CatsList from "./components/Cats/CatsList.vue";
import GalleryList from "./components/Gallery/GalleryList.vue";
import cats from "./components/Cats/cats.js" 
import gallery from "./components/Gallery/gallery";

</script>

<template>
   <div id="app">
  <div class="content">
   <AppHeader />
      <!-- <router-view></router-view> -->

      <HeroItem title="Привіт, людино" text="Бракує в житті шовкових лапок, м’якенького пухнастого
                  животика, теплого муррркотіння й веселого розгардіяшу?"/>
      <!-- <Container> -->
        <!-- <Title  text=" Ці друзяки готові приймати твою любов і піклування"></Title> -->
     <CatsList :items="cats" />
     <GalleryList :items="gallery"/>
    <!-- <template v-slot:cat="{ cat }">
  </template> -->

      <!-- </Container> -->


  </div>
   <AppFooter />
   </div>
</template>

<style  lang="scss" scoped >

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
   background: url(./assets/img/fon3.png) center repeat-y ;
   
}
.content {
  flex-grow: 1;
 
  /* padding-top: 120px; */
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
