<template>
    <div>
        <HeroItem title="Привіт, людино!" text="Бракує в житті шовкових лапок, м’якенького пухнастого
                  животика, теплого муррркотіння й веселого розгардіяшу?" textFooter="Візьми собі котика!"/>
        <Title  text=" Ці маленькі пухнасті комочки щастя готові подарувати радість в твоїй оселі та прийняти твою любов і піклування"></Title>
         <CatsList :items="actualCats" />
         
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
             filters: {
                rating: 0,
            }
        }
    },
    computed: {
        actualCats() {
            console.log(cats)
           
            // return this.filterByRating(cats);
              return this.firstCats(cats);
        },
    },
    methods: {
        firstCats(cats) {
            console.log([cats[0], cats[1], cats[2]])
            return ([cats[0], cats[1], cats[2], cats[3]] )
        },
       
    }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {}
</style>