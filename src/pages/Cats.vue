<template>
     <Title  text=" Ці маленькі пухнасті комочки щастя готові подарувати радість в твоїй оселі та прийняти твою любов і піклування"></Title>
     <Container class="filtercontainer">
            <CatstsFilterForm
              @update:modelValue="filter"
              class="cats-filter"
            />
          </Container>
         
           <p v-if="!filteredCats.length" class="text-info">
              По вашому запиту нічого не знайдено
            </p>
          <CatsList v-else :items="filteredCats">
          </CatsList>

  
</template>

<script>

import cats from "../components/Cats/cats.js";
import CatsList from "../components/Cats/CatsList.vue";
import Container from "../components/shared/Container.vue";
import CatstsFilterForm from "../components/Cats/CatstsFilterForm.vue"
import Title from "../components/Title.vue";
export default {
    name: "Cats",
    components: {
        CatstsFilterForm,
        CatsList,
        Container,
            Title
        },
         data() {
        return {
            cats: cats,
            selected :"name",
            filters: {
              city: "",
                price: 0,
                sex: "",
              color: ""
         }  
        }
    },
    computed: {
        filteredCats() {
            console.log(cats)
        // return cats
            return this.filterByCityName(this.filterByPrice(cats));
        },
    },
    methods: {
    filter({ city, price, sex,color }) {
 
    this.filters.city = city;
            this.filters.price = price;
             this.filters.sex = sex;
            this.filters.color = color;

    //    console.log(this.filters.city, this.filters.price);
},    
    handleItemClick() {
   
},
    filterByCityName(cats) {
            console.log(this.filters.city);
            if (!this.filters.city) return cats;
            return cats.filter((cat) => {
                return cat.location.city === this.filters.city;
            });
        },
        filterByPrice(cats) {
            console.log(this.filters.price);
            if (!this.filters.price) return cats;
            return this.cats.filter((cat) => {
                return cat.price >= this.filters.price;
            });
        }  
    }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
.apartments-filter {
  margin-bottom: 40px;
}
.filtercontainer{
    display: flex;
    justify-content: center;
    padding: 8px;
    /* margin-top: 40px; */
    background-color: #ece0ce ;
}
.text-info{
    font-size: 60px;
        text-align: center;
}
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.apartments-filter {
  margin-bottom: 40px;
}
.filtercontainer{
    display: flex;
    justify-content: center;
    padding: 8px;
    /* margin-top: 40px; */
    background-color: #ece0ce ;
}
.text-info{
    font-size: 60px;
        text-align: center;
}
}

</style>
