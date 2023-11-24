<template>
    <li class="social-item">
        <a href="">
            <svg>
                <use :href=href></use>
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
}
 .social-item svg {
                    width: 24px;
                        height: 24px;
                        fill: #ffffff;
                }
}
</style>