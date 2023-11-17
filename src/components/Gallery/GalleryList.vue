<template>
    <slot name="title"></slot>
    <!-- <div class="container"> -->
                <Title  text="Котики, які вже знайшли сім’ю"></Title>
                <GalleryText textPre="Ти тільки поглянь, скільки ніжності!" textAfter="На місці цих задоволених людей можеш бути ти."></GalleryText>
              <div class="galllery">
                <GalleryItem  v-for="{ id, imgUrl, imgUrlBig } in items"
            :key="id"
              :imgHref="imgUrlBig"
              :imgSrc="imgUrl" />
              </div>
            <!-- </div> -->
         
</template>

<script>
import Title from '../Title.vue';
import GalleryText from './GalleryText.vue';
import GalleryItem from "./GalleryItem.vue"
export default {
  name: "GalleryList",
   components: {
     Title,
     GalleryText,
    GalleryItem,
  },
   props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
        
    }
</script>

<style lang="scss" scoped>
.galllery{
    width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-top: 40px;
                margin-bottom: 60px;
                gap: 16px;
            }
</style>