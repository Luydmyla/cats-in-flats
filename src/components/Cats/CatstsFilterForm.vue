<template>
    <form @submit.prevent="handleSubmit" class="form">
        <CustomSelect :items="cities" placeholder="місто" v-model="city" class="form__select" />
        <CustomSelect :items="sexes" placeholder="стать" v-model="sex" class="form__select" />
        <CustomSelect :items="colors" placeholder="Колір" v-model="color" class="form__select" />
        <CustomInput v-model="price" placeholder="вік, від" error-message="Поле не повинно бути порожнім" :rules="rules" />
        <SubmitButton type="submit" class="form__submit">Обрати котика</SubmitButton>
        <SubmitButton @click="reset" type="button" class="btn__back">назад до всіх котиків</SubmitButton>
    </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/Button.vue";
import { isRequired, charLimit } from '../../utils/validationsRules.js'

export default {
    components: {
        CustomSelect,
        CustomInput,
        SubmitButton,
    },
    data() {
        return {
            price: "",
            city: "",
            sex: "",
            color: "",
            // reset: ""
        };
    },
    computed: {
        rules() {
            return [isRequired, charLimit(2)];
        },
        cities() {
            return [
                { value: "", label: "Місто", selected: true },
                "Kyiv",
                "Odesa",
                "Poltava",
                "Kharkiv",
                "Dnipro",
                "Lviv",
                "Kherson",
                "Mariupol",
            ];
        },
       sexes() {
            return [
                { value: "", label: "Стать котика", selected: true },
                "котик",
                "кішечка",
            ];
        },
        colors() {
            return [
                { value: "", label: "Колір", selected: true },
                "чорний",
                "білий",
                "рижий",
                "тримасний",
                "двомасний",
                "будь-який",
            ];
        },
    },
    methods: {
        handleSubmit() {
            this.$emit("update:modelValue", { city: this.city, price: this.price, sex: this.sex, color: this.color });   
        },
        reset() {
            this.$emit("update:modelValue", {
                city: "",
                price :"",
                sex : "",
                colors: ""
            });
                   
                    console.log(city, price, sex,colors)
        }
    },
    
    
};
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    justify-content: center;

    &__select {
        margin-right: 16px;
    }

    &__submit {
        margin-left: 16px;
         font-size: 18px;
        font-weight:700;
         border: 1px solid #9b7e6a;
    color: #4b523f ;
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
    /* background-color: #e7ecf2; */
    transition: 500ms linear;
     &:hover,
  &:focus {
    transform: scale(1.05);
    transform-origin: center;
     border: 1px solid #9b7e6a;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
    }
    .btn__back{
         margin-left: 16px;
         font-size: 18px;
        font-weight:700;
         border: 1px solid #9b7e6a;
    /* color: #4b523f ; */
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
    /* background-color: #e7ecf2; */
    transition: 500ms linear;
     &:hover,
  &:focus {
    transform: scale(1.05);
    transform-origin: center;
    border: 1px solid #9b7e6a;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
    }
   
}
</style>
