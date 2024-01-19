<template>   
<!-- <Container> -->
  <router-link :to="`/catsinfo/${$props.id}`"   class="cat-item">
                        <div class="img-wrap">         
                        <img :src="'/cats-in-flats' + imgSrc" :alt="title" />
                        
                        </div>
                          <Rating :rating="rating" />
                        <div class="item-footer">
                              <h3 class="item-title">{{ title }}</h3>
                              <p class="item-descr">
                                {{ descr }}
                              </p>
                              <!-- <p class="icon-heart">
                                💙💛 
                                </p> -->
                                
                                  
                        </div>   
     
  </router-link>
   


<!-- </Container> -->
    
</template>

<script>
import Container from "../shared/Container.vue";
import Rating from "../shared/StarRating.vue";
    export default {
    name: "CatsItem",
    components: {
      Container,
      Rating,
  },
    
        props: {
        id: {
            type: String,
            required: true,
        },
        descr: {
            type: String,
            default: "",
            },
        title: {
            type: String,
            default: "",
        },
        rating: {
            type: Number,
            default: 0,
        },
        // price: {
        //     type: Number,
        //     required: true,
        // },
        imgSrc: {
            type: String,
            default: "",
        },
  },
 
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.cat-item{
                margin-bottom: 8px;
                overflow: hidden;
                border-top-right-radius: 16px;
                border-top-left-radius: 16px;
                box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
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

.img-wrap{
width: 100%;
display: flex;
overflow: hidden;
  height: 80%;
}
            .img-wrap > img{
                width: 100%;
              
                /* height: 80%; */
/* object-fit:cover; */
                        }
                       
            .item-title{
                color: var(--GREY, #2C2C2C);
                    /* Header 3 */
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 24px;
                    /* 150% */
                    letter-spacing: 0.5px;
                  

            }
           
            .item-footer{
              padding: 16px;
/* padding-top: 16px;
padding-bottom: 16px;
padding-left: 16px;
padding-right: 16px; */
            }
            .item-title{
                margin-bottom: 8px;
            }

            .item-descr{
color: var(--GREY, #2C2C2C);
    /* Body */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
        overflow: hidden;
    letter-spacing: 0.5px;
            }


}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.cat-item{
                /* flex-basis: calc((100% - 80px) / 3); */
                  width: calc((100% - 120px) / 4);
                /* height: 360px; */
                margin-bottom: 8px;
                overflow: hidden;
                border-top-right-radius: 16px;
                border-top-left-radius: 16px;
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

.img-wrap{
     position: relative;
width: 100%;
display: flex;
overflow: hidden;
  height: 80%;
}
            .img-wrap > img{
                width: 100%;
           
                /* height: 100%; */
/* object-fit:contain; */
                        }
                       
            .item-title{
                color: var(--GREY, #2C2C2C);
                    /* Header 3 */
                    font-family: Montserrat;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 24px;
                    /* 150% */
                    letter-spacing: 0.5px;
                  

            }
           
            .item-footer{
              padding: 16px;
            }
            .item-title{
                margin-bottom: 8px;
            }

            .item-descr{
color: var(--GREY, #2C2C2C);
    /* Body */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
        overflow: hidden;
    letter-spacing: 0.5px;
            }
}


</style>