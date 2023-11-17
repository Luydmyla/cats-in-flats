<template>
   <!-- <Container> -->
  
    <slot name="title"></slot>
       <Title  text=" Ці друзяки готові приймати твою любов і піклування"></Title>
    <div class="cats-list">
   
        <CatsItem v-for="{id, descr, title, imgUrl } in items"
          :key="id"
            :descr="descr"
            :title="title"
            :imgSrc="imgUrl"
        />
          <!-- <template v-for="cat in items">
            <slot name="cat" v-bind:cat="cat"></slot>
          </template> -->
        </div>
   <!-- </Container> -->
</template>

<script>
import Container from "../shared/Container.vue";
import CatsItem from "./CatsItem.vue";
import Title from "../Title.vue";

    export default {
       name: "CatsList",
    components: { Container, CatsItem, Title },

    props: {
        items: {
            type: Array,
            default: () => [],
        },
    }, 
    }
</script>

<style lang="scss" scoped>
.cats-list{
                width: 100%;
                display: flex;
                justify-content: space-between;
                gap: 40px;
                margin-top: 40px;
                margin-bottom: 60px;
            }
</style>