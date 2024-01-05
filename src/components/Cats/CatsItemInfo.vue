<template>
    <div>
            <h2 class="cats-info-title">{{ items.title }}</h2>
    <div class="cat-info-image">
                  <img src="../../../public/img/catsInfo/IMG_20231109_134838.jpg" alt="items.title" class="image-poster" />
         </div>
                <div class="cats-info">
              
                   <table>
                     <tr>
                  <th class="info-table-td" data-key="original-title"> Сравжнє імя котика</th>
                  <td class="info-table-original_title" valign="bottom">{{ items.title }}</td>
                </tr>
                <tr>
                  <th class="info-table-td" data-key="vote">Трохи про котика</th>
                  <td> <span class="info-table-vote_average"> {{ items.descr }}</span>/<span class="info-table-vote_count"> {{ items.price }} </span></td>
                </tr>
                <tr>
                  <th class="info-table-td" data-key="popularity">Популярність</th>
                  <td>{{ items.rating }}</td>
                </tr>
              </table>
                </div>
    </div>
    

    <!-- <div class="cat-item">
        <img src="../../../public/img/catsInfo/IMG_20231109_134838.jpg" alt="cat Барбарис" />
      
        <div class="img-wrap">
            <img :src="items.imgUrl" :alt="items.title" />
        </div>
        <div class="item-footer">
            <h3 class="item-title">{{ items.title }}</h3>
            <p class="item-descr">
                {{ items.descr }}
            </p>
        </div>
    </div> -->
</template>

<script>
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
     props: {
        items: {
            // type: Array,
             //  default: () => [],
            type: Object,
             default: () => {},
            
        },
    },

}
</script>

<style lang="scss" scoped></style>