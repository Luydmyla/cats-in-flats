<template>
    <div>
     <HeroItem title="Привіт, людино!" text="Бракує в житті шовкових лапок, м’якенького пухнастого
                  животика, теплого муррркотіння й веселого розгардіяшу?" textFooter="Візьми собі котика!"/>
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
              return this.firstThreeCats(cats);
        },
    },
    methods: {
        firstThreeCats(cats) {
            console.log([cats[0], cats[1], cats[2]])
            return ([cats[0], cats[1], cats[2]])
        },
        // filterByRating(cats) {
        //     const bestCats = [];
        //     console.log(bestCats)
        //       console.log(cats)
        //     cats.map((cat) => {
        //           console.log(cat.rating)
        //         if (cat.rating > 3) {
        //             bestCats.push(cat) 
        //             console.log(bestCats)  
        //         }
        //     });     
        //     console.log(bestCats[0], bestCats[1], bestCats[2])
        //     return [bestCats[0], bestCats[1], bestCats[2]] 
        // },
    }
    }
</script>

<style lang="scss" scoped>

</style>