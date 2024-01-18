<template>
    <Container class="container-donat">
        <Title text="Ви можете допомогти цим пухнастикам, задонативши будь-яку суму на наш рахунок" />
          <nav class="nav">
     <NavItem text="Тут буде посилання на банку для донату на вкусняшки для пухнастиків" class="navItem"></NavItem>
            <NavItem text="Тут буде посилання на банку для донату на лікування хворих хвостиків" class="navItem"></NavItem>
            <NavItem text="Тут буде посилання на банку для донату на загальні потреби - облаштування житла, іграшки і тд" class="navItem"></NavItem>

          </nav>
       
    </Container>


</template>

<script>
import Title from '../components/Title.vue';
import Container from '../components/shared/Container.vue';
import NavItem from '../components/Navigation/NavItem.vue';
export default {
  
    name: "DonatsPage",
    components: {
        Title,
        Container,
            NavItem,
        }
        
}
    
</script>

<style lang="scss" scoped>
.container-donat{
    display: flex;
    flex-direction: column;
}
.nav{
    width: 100%;
                display: flex;
               
                margin-top: 40px;
                margin-bottom: 60px;
                gap: 16px;}
                .navItem{
                     flex-basis: calc((100% - 20px) / 3);
                      width: 100%;
    height: 80%;
    display: flex;
    overflow: hidden;
   border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
               padding: 10px;
                background-color: #e7ecf2;
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
</style>