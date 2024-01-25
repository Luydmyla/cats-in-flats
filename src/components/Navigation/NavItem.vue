<template>
                <a href="">{{text}}</a>
</template>

<script>


    export default {
    name: "NavItem", 
    props: {
        text: {
            type: String,
            required: true,
        }
    }  
    }
</script>

<style lang="scss" scoped>
@media (min-width: 320px) {
a{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-basis: calc((100% - 8px) / 3);
     color: #4b523f ;
}
}
@media (min-width: 1024px) {
  a{
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-basis: fit-content;
    font-size: 22px;
    font-weight:bold;
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
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}  
} 
</style>