<template>
    <footer class="footer">
        <Container>
            
          <div class="footer-container container">
            <div class="footer-logo">
              <div class="logo-img">
                <a href="/" class="logo">
                  <img
                    src="../../src/assets/img/cat.svg"
                    class="logo-img"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
              <p class="footer-text">
                Котики — то щастя.<br />Забирай, люби й ставай щасливішим.
              </p>
            </div>
            <section class="social">
              <p class="social-text">Соцмережі</p>
              <ul class="social-links">
                <li class="social-item">
                  <a href="">
                    <svg>
                      <use href="../../src/assets/img/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="social-item">
                  <a href="">
                    <svg>
                      <use href="../../src/assets/img/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social-item">
                  <a href="">
                    <svg>
                      <use href="../../src/assets/img/icons.svg#icon-youtube"></use>
                    </svg>
                  </a>
                </li>
                <li class="social-item">
                  <a href="">
                    <svg>
                      <use href="../../src/assets/img/icons.svg#icon-tiktok"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
          </div>
      <!-- <router-link to="/cats-flats"> -->
                <!-- <Logo /> -->
            <!-- </router-link> -->
        </Container>
    </footer>
</template>

<script>
import Container from "./shared/Container.vue";
// import Logo from "./Logo.vue";
export default {
    name: "Footer",
    components: {
        Container,
        // Logo,
    },
};
</script>

<style lang="scss" scoped>
/* @import "../assets/scss/variables.scss"; */

.footer {
    /* background: $secondary-color; */
       background-color:#c8b69e;
    /* height: 30px; */
    padding-top: 48px;
        padding-bottom: 48px;
    /* background: var(--FOREST-GREEN, #0F3F3C); */
}
.footer-container{
   width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;

}
.footer-logo{
display: flex;
    width: 344px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
}



.footer-text{
color: var(--WHITE, #FFF);
    /* Body */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.5px;
}

.social  { 
    margin-bottom: 0;

/* display: flex; */
    /* flex-direction: column;
    align-items: flex-end; */
    /* gap: 8px; */
 }

        .social-text{
color: var(--WHITE, #FFF);
    /* Body */
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 150% */
    letter-spacing: 0.5px;
    text-align: right;
        }
        .social-links{
            /* width: 100%; */
            /* gap: 32px; */
            display: flex;
            gap: 8px;
            /* justify-content: space-between;
            align-items: center;
            text-align: center; */
        }
        /* .social-item {
          display: flex;
          justify-content: center;
          gap: 8px;
        }  */
        
        .social-item a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
}
        .social-item svg {
                    width: 16px;
                        height: 16px;
                        fill: #ffffff;
                }
</style>
