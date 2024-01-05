<template>
    <div>
        <Container>
     <!-- <CatsItemInfo v-for="{ id, descr, title, imgUrl, rating, price } in items"
              :key="id"
                :descr="descr"
                :title="title"
                :imgSrc="imgUrl"
                :rating="rating"
                :price="price"
                /> -->
                 <CatsItemInfo :items="cat" />
        </Container>
      
    </div>
</template>

<script>
import Container from '../components/shared/Container.vue';
import CatsItemInfo from "../components/Cats/CatsItemInfo.vue"
import cats from "../components/Cats/cats.js"
export default {
       name: "CatsInfoPage",
       components: {
           Container,
        CatsItemInfo,
    },
     data() {
        return {
            cats: cats,
           
        }
    },
     computed: {  
        cat() {
          return cats.find(
            (cat) => cat.id === this.$route.params.id
          );
        },
    },
    //  props: {
    //     items: {
    //         type: Array,
    //         default: () => [],
    //     },
    // },
}
</script>

<style lang="scss" scoped></style>