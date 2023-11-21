<template>   
<!-- <Container> -->
    <div class="cat-item">
                      <!-- <img src="../../assets/img/picture.jpg" alt="cat Барбарис" />
                      <div class="item-footer">
                        <h3 class="item-title">Барбарис</h3>
                        <p class="item-descr">
                          Хижий для ворогів, ласкавий та м’якесенький до своїх.
                        </p>
                      </div> -->
                      <div class="img-wrap">
                             <img :src="imgSrc" :alt="title" />
                      </div>
                      <div class="item-footer">
                            <h3 class="item-title">{{title}}</h3>
                            <p class="item-descr">
                              {{ descr }}
                            </p>
                      </div>
    </div>


<!-- </Container> -->
    
</template>

<script>
import Container from "../shared/Container.vue";
    export default {
    name: "CatsItem",
    components: {
            Container,
    },
        props: {
        // id: {
        //     type: String,
        //     required: true,
        // },
        descr: {
            type: String,
            default: "",
            },
        title: {
            type: String,
            default: "",
        },
        // rating: {
        //     type: Number,
        //     default: 0,
        // },
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
/* @media (min-width: 280px) {} */
/* @media (min-width: 768px) {} */
/* @media (min-width: 1024px) {} */


.cat-item{
                /* flex-basis: calc((100% - 80px) / 3); */
                  /* width: calc((100% - 80px) / 3); */
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
width: 100%;
display: flex;
overflow: hidden;
  height: 80%;
}
            .img-wrap > img{
                width: 100%;
              
                /* height: 100%; */
object-fit:cover;
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
padding-top: 16px;
padding-bottom: 16px;
padding-left: 16px;
padding-right: 8px;
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
    /* 150% */
    letter-spacing: 0.5px;
            }
</style>