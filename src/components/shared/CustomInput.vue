<template>
    <div class="wrapper-input">
        <input :value="modelValue" v-bind="$attrs" @input="onInput" class="custom-input"
            :class="!isValid && 'custom-input--error'" />
        <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
    </div>
</template>

<script>
export default {
    name: "CustomInput",
    data() {
        return {
            isValid: true,
            error: "",
        };
    },
    inject: {
        form: {
            default: null
        }
    },
    inheritAttrs: false,
    props: {
        modelValue: {
            type: String,
            required: true,
        },

        errorMessage: {
            type: String,
            default: ""
        },
        rules: {
            type: Array,
            // якщо ми вказуємо дефолтне значення ссилочного типу, то робимо це через функцію
            default: () => []
        }
    },
    watch: {
        modelValue() {
            this.validate()
            // console.log(value)
        }
    },
    mounted() {
        // перевіряємо чи є форма, якщо ні просто повертаємось, якщо так - реєструємо саме цю форму, що є
        if (!this.form) return
        this.form.registerInput(this)
    },
    // памятаємо про утєчку памяті, тому перед анмаунтінгом прибираємо інпут із загального масива нашої форми
    beforeUnmount() {
        if (!this.form) return
        this.form.unRegisterInput(this)
    },
    methods: {
        onInput(event) {
            this.$emit("update:modelValue", event.target.value);
            console.log(event.target.value)
        },
        validate() {
            this.isValid = this.rules.every((rule) => {
                const { hasPassed, message } = rule(this.modelValue)
                if (!hasPassed) {
                    this.error = message || this.errorMessage;
                }
                return hasPassed;
            });
            return this.isValid;
        },
        reset() {
            this.$emit("update:modelValue", '');
        }
    },
};
</script>

<style lang="scss" scoped>
/* @import "../../assets/scss/variables"; */
@media (min-width: 280px) {
.wrapper-input {
    position: relative;
    display: inline-flex;
    width: 50%;
    /* margin-bottom: 20px; */
}
.custom-input {
    height: 40px;
    /* max-width: 220px; */
    width:100%; 
    font-size: 18px;
    outline: none;
    line-height: inherit;
    font-weight:bold;
    border: 1px solid #9b7e6a;
    color: #4b523f ;
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
    transition: 500ms linear;
     &:hover,
  &:focus {
    /* transform: scale(1.05); */
    /* transform-origin: center; */
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  
    &::placeholder {
        color: inherit;
    }
    &--error {
        border-color: #b700ff;
    }
    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-size: 12px;
        color: #b700ff;
        line-height: 1.3;
    }
}
}
@media (min-width: 1024px) {

.wrapper-input {
    position: relative;
    display: inline-flex;
    width: 100%;
    /* margin-bottom: 20px; */
}
.custom-input {
    height: 40px;
    /* max-width: 220px; */
    width: 100%; 
    font-size: 18px;
    outline: none;
    line-height: inherit;
    padding: 8px 15px;
    /* font-size: 26px; */
    font-weight:bold;
    border: 1px solid #9b7e6a;
    color: #4b523f ;
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
    /* background-color: #e7ecf2; */
    transition: 500ms linear;
     &:hover,
  &:focus {
     /* border: 2px solid grey; */
    transform: scale(1.05);
    transform-origin: center;
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  
    &::placeholder {
        color: inherit;
    }
    &--error {
        border-color: #b700ff;
    }
    &__error {
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        font-size: 12px;
        color: #b700ff;
        line-height: 1.3;
    }
}
}
</style>
