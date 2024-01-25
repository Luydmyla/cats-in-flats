<template>
    <slot name="title"></slot>
                <Title  text="Щасливі котики, які вже знайшли свій дім"></Title>
                <GalleryText textPre="Скільки ніжності в цих обіймах, поглянь!" textAfter="Ти також можеш бути на місці цих щасливих людей"></GalleryText>
                <div class="galllery">
                <GalleryItem  v-for="{ id, imgUrl, imgUrlBig } in items"
              :key="id"
              :imgHref="imgUrlBig"
              :imgSrc="imgUrl" />
              </div>
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
@media (min-width: 320px) {
  .galllery{
    width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-top: 10px;
                margin-bottom: 10px;
                gap: 10px;
                /* padding: 10px; */
            }
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.galllery{
    width: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-top: 40px;
                margin-bottom: 60px;
                gap: 16px;
            }


}


</style>