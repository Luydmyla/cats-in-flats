<script setup>
import AppFooter from "./components/Footer.vue";
import AppHeader from "./components/Header.vue";
import Container from "./components/shared/Container.vue";
import HeroItem from "./components/Hero/HeroItem.vue";
import Title from "./components/Title.vue";
import CatsList from "./components/Cats/CatsList.vue";
import GalleryList from "./components/Gallery/GalleryList.vue";
import cats from "./components/Cats/cats.js" 
import gallery from "./components/Gallery/gallery";
// import SimpleLightbox from "simplelightbox/dist / simple - lightbox.esm";
// import css from "../../../node_modules/simplelightbox/dist/simple-lightbox.css";

</script>

<template>
   <div id="app">
  <div class="content">
   <AppHeader />
      <!-- <router-view></router-view> -->

      <HeroItem title="Привіт, людино!" text="Бракує в житті шовкових лапок, м’якенького пухнастого
                  животика, теплого муррркотіння й веселого розгардіяшу?" textFooter="Візьми собі котика!"/>
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
/* @media (min-width: 280px) {} */
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
   background: url(./assets/img/fon3.png) center repeat-y ; 
}
.content {
  flex-grow: 1;
}
}

</style>
