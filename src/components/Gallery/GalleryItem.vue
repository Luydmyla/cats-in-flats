<template>
    <div class="item" >
        <a :href="imgHref">
                 <img :src="imgSrc" />
            </a>     
         <!-- <a href="./img/vika-fleysher-Slj84JNcyfQ-unsplash.jpg">
             <img src="./img/1.jpg " alt="cats photo" />
        </a>        -->
    </div>
</template>

<script>
{/* <include src="../../../node_modules/simplelightbox/dist/simple-lightbox.css"></include>;
<include src="../../../node_modules/simplelightbox/dist/simple-lightbox.js"></include>; */}

// let galleryShow = new SimpleLightbox('.item a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// })




    export default {
    name: "GalleryItem", 
    // components: {
    //     SimpleLightbox
    // },
    props: {
        imgHref: {
             type: String,
            default: "",
        },
        imgSrc: {
             type: String,
            default: "",
        },
       }
    }
</script>

<style lang="scss" scoped>
/* @media (min-width: 280px) {} */
/* @media (min-width: 768px) {} */
/* @media (min-width: 1024px) {} */


 .item{
    width: 100%;
      height: 80%;
    display: flex;
    flex-basis: calc((100% - 80px) / 6);
    overflow: hidden;
   border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
                /* background-color: #d3d4c6; */
                background-color: #e7ecf2;
                transition: 500ms linear;
  &:hover,
  &:focus {
    transform: scale(1.08);
    transform-origin: center;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}
 .item > a{
 width: 100%;                        
 /* height: 100%; */
object-fit:cover;
  }
  .item > a> img{
 width: 100%;                        
 height: 100%;
object-fit:cover;
  }
                       
</style>