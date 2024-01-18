<template>
        <div class="cats-info">
            <h2 class="cats-info-title">{{ items.title }}</h2>
               <Rating :rating="items.rating" />
        <div class="cats-info-wrap">
       <!-- <div  v-if="items.imgUrl" class="cats-info-image"></div>        -->
     <div   class="cats-info-image">

          <!-- :src="'/cats-in-flats' + imgSrc" -->
                      <!-- <img src="../../../public/img/catsInfo/IMG_20231109_134838.jpg" alt="items.title" class="image-poster" /> -->
                      <img :src="'/cats-in-flats' + items.imgUrl.main " alt="items.title"    class="image-poster" />
                       <img :src="'/cats-in-flats' + items.imgUrl.one" alt="items.title"    class="image-poster" />

                        <img :src="'/cats-in-flats' + items.imgUrl.two" alt="items.title"    class="image-poster" />

                         <img :src="'/cats-in-flats' + items.imgUrl.three" alt="items.title"    class="image-poster" />

                          <img :src="'/cats-in-flats' + items.imgUrl.four" alt="items.title"    class="image-poster" />

                           <img :src="'/cats-in-flats' + items.imgUrl.five" alt="items.title"    class="image-poster" />
                              <img :src="'/cats-in-flats' + items.imgUrl.six" alt="items.title"    class="image-poster" />




             </div>
     <div class="cats-info-table">
                       <table>
                    <tr class="info-table-tr">
                      <th class="info-table-th" data-key="original-title"> Сравжнє імя котика</th>
                      <td class="info-table-td" valign="bottom">{{ items.title }}</td>
                    </tr>
                    <tr class="info-table-tr">
                      <th class="info-table-th" data-key="vote">Трохи про котика</th>
                      <td class="info-table-td"> {{ items.descr }}</td>
                    </tr>
                    <tr class="info-table-tr">
                      <th class="info-table-th" data-key="age">Вік котика</th>
                      <td class="info-table-td">{{ items.price }}</td>
                    </tr>
                     <tr class="info-table-tr">
                          <th class="info-table-th" data-key="popularity">Популярність</th>
                          <td class="info-table-td">{{ items.rating }}</td>
                        </tr>
                  </table>
                    </div>

        </div>
            
               
    </div>
</template>


<script>
import Rating from "../shared/StarRating.vue";
// import cats from "../components/Cats/cats";
export default {
    name: "CatsInfo",
    // props: {
    //     id: {
    //         type: String,
    //         required: true,
    //     },
    //     descr: {
    //         type: String,
    //         default: "",
    //     },
    //     title: {
    //         type: String,
    //         default: "",
    //     },
    //     rating: {
    //         type: Number,
    //         default: 0,
    //     },
    //     price: {
    //         type: Number,
    //         required: true,
    //     },
    //     imgSrc: {
    //         type: String,
    //         default: "",
    //     },
  // },
     components: {
    Rating,
   
  },
     props: {
        items: {
            type: Object,
             default: () => {},
            
        },
    },

}
</script>

<style lang="scss" scoped>
.cats-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cats-info-title{ 
                font-size: 28px;
                font-style: normal;
                font-weight: 700;
                line-height: 20px;
                text-align: center;
                width: 100%;
                height: 100%;
                padding: 10px;
                letter-spacing: 0.5px;
                color:  #f04730;
                  background-color:#c8ec6f
}
.cats-info-wrap{
    display: flex;
    width: 100%;
}
.image-poster{
 background-color: #c8ec6f;
}
.cats-info-image{
   width: 50%;
   /* height: 50%; */
   
}
.cats-info-image img{
   /* width: 50%; */
   height: 400px;
   
}
.cats-info-table{
    display: flex;
        align-items: center;
    background-color: aliceblue;
    width: 50%;
    padding: 8px;
}
.cats-info-table table{
    /* background-color: aliceblue; */
    width: 100%;
}
.info-table-tr{
    display: flex;
  
}
.info-table-th{
     font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 20px;
                text-align: center;
    display: flex;
    color: #f04730;
      width: 30%;
}
.info-table-td{
 font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 20px;
                text-align: start;
    display: flex;
    color: #50f030;
    width: 70%;
}
</style>