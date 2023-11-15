<template>   
<Container>
    <div class="cat-item">
                      <!-- <img src="../../assets/img/picture.jpg" alt="cat Барбарис" />
                      <div class="item-footer">
                        <h3 class="item-title">Барбарис</h3>
                        <p class="item-descr">
                          Хижий для ворогів, ласкавий та м’якесенький до своїх.
                        </p>
                      </div> -->



                       <img :src="imgSrc" :alt="title" />
                          <div class="item-footer">
                            <h3 class="item-title">{{title}}</h3>
                            <p class="item-descr">
                              {{ descr }}
                            </p>
                          </div>
                    </div>


</Container>
    
</template>

<script>
import Container from "../shared/Container.vue";
    export default {
    name: "CatsItem",
    components: {
            Container,
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
.cat-item{
                flex-basis: calc((100% - 80px) / 3);
                /* height: 360px; */
                margin-bottom: 8px;
                overflow: hidden;
                border-top-right-radius: 16px;
                border-top-left-radius: 16px;
               
                /* background-color: blueviolet; */
            }
            .cat-item > img{
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