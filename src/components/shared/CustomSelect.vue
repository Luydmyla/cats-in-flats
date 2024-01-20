<template>
    <select @change="onSelect" class="custom-select">
        <option v-for="item in formatedItems" :key="item.value" :value="item.value" :selected="item.selected">
            {{ item.label }}
        </option>
    </select>
</template>

<script>
export default {
    name: "CustomSelect",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onSelect(event) {
            this.$emit("update:modelValue", event.target.value);
        },
        reset() {
            this.$emit("update:modelValue", '');
        }
    },
    computed: {
        formatedItems() {
            return this.items.map((item) => {
                return typeof item === "object" ? item : { value: item, label: item };
            });
        },
    },
};
</script>

<style lang="scss" scoped>
/* @import "../../assets/scss/variables"; */

.custom-select {
    height: 40px;
    max-width: 220px;
    width: 100%;
    /* border: 2px solid black; */
     /* border: 2px solid $main-color; */
    font-size: 18px;
     font-weight:bold;
    outline: none;
    padding: 8px 15px;
    cursor: pointer;
    display: inline-block;
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
}
</style>
