<template>
    <slot name="title"></slot> 
    <div class="cats-list">
        <CatsItem v-for="{id, descr, title, imgUrl,rating } in items"
          :key="id"
            :descr="descr"
            :title="title"
            :imgSrc="imgUrl.main"
            :id="id"
            :rating="rating"
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

    export default {
       name: "CatsList",
    components: { Container, CatsItem },

    props: {
        items: {
            type: Array,
            default: () => [],
        },
    }, 
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
  .cats-list{
                width: 100%;
                display: block;
                /* justify-content: space-between; */
                /* gap: 40px; */
                margin-top: 10px;
                margin-bottom: 10px;
            }
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
  .cats-list{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                gap: 40px;
                /* margin-top: 40px; */
                margin-bottom: 60px;
                  padding-left: 8px;
    padding-right: 8px;
            }
}
</style>