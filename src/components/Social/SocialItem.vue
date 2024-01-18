<template>
    <li class="social-item">
        <a href="">
            <svg>
                <use :href="'/cats-in-flats' + href"></use>
                   <!-- <use href="../../src/assets/img/icons.svg#
                    icon-instagram"></use> -->
             </svg>
        </a>
    </li>
</template>

<script>
export default {
    name: "SocialItem",
    props: {
        href: {
            type: String,
            required: true, 
            }
        }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
    .social-item a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        border-radius: 50%;
}
.social-item svg {
    width: 16px;
    height: 16px;
    fill: #ffffff;
}
}
@media (min-width: 768px) {}
@media (min-width: 1024px) {
     .social-item a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
         /* border-radius: 16px; */
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
               /* padding: 10px; */
                /* background-color: #e7ecf2; */
                transition: 600ms linear;
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
 .social-item svg {
                    width: 24px;
                        height: 24px;
                        fill: #ffffff;
                }
}
</style>