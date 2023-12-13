<template>
    <div>
     <HeroItem title="Привіт, людино!" text="Бракує в житті шовкових лапок, м’якенького пухнастого
                  животика, теплого муррркотіння й веселого розгардіяшу?" textFooter="Візьми собі котика!"/>
         <CatsList :items="cats" />
         <GalleryList :items="gallery"/>
    </div>
</template>

<script>
import HeroItem from "../components/Hero/HeroItem.vue";
import Title from "../components/Title.vue";
import CatsList from "../components/Cats/CatsList.vue";
import GalleryList from "../components/Gallery/GalleryList.vue";
import cats from "../components/Cats/cats.js"
import gallery from "../components/Gallery/gallery";
// const cats = ref([]);
    export default {
    name: "HomePage",
    components: {
        HeroItem, 
        Title,
        CatsList,
        GalleryList,      
    },
        data() {
        return {
            cats: cats,
            gallery: gallery,
        }
    },
    }
</script>

<style lang="scss" scoped>

</style>