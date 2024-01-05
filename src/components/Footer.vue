<template>
    <footer class="footer">
        <Container>     
          <div class="footer-container container">
              <div class="footer-logo">
                  <Logo/>          
              <p class="footer-text">
                Котики — то щастя.<br />Забирай, люби й ставай щасливішим.
              </p>
            </div>
            <section class="social">
              <p class="social-text">Соцмережі</p>
              <SocialList/>
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
import Logo from "./Logo.vue";
import SocialList from "./Social/SocialList.vue";
export default {
    name: "Footer",
    components: {
        Container,
        Logo,
        SocialList,
    },
};
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
  .footer {
      background-color:#c8b69e;
      padding-top: 4px;
      padding-bottom: 4px;
}
.footer-container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
}
.footer-logo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.footer-text{
    color: var(--WHITE, #FFF);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
}

.social  { 
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
 }
        .social-text{
    color: var(--WHITE, #FFF);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-align: right;
        }       
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
  .footer {
    background-color:#c8b69e;
    padding-top: 8px;
    padding-bottom: 8px;
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
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
}

.social  { 
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
 }
        .social-text{
    color: var(--WHITE, #FFF);
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: right;
        }     
}
</style>
