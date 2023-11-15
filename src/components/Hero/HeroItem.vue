<template>
    <div class="hero-item">
    <div class="greeting">
     <!-- <h1 class="greeting-title">Привіт, людино</h1>
                    <p class="greeting-text">
                      Бракує в житті шовкових лапок, м’якенького пухнастого
                      животика, теплого муррркотіння й веселого розгардіяшу?
                      <br />
                      <br />
                      Візьми собі котика.
                    </p> -->
                     <h1 class="greeting-title">{{ title }}</h1>
                        <p class="greeting-text">
                         {{ text }}
                          <br />
                          <br />
                          Візьми собі котика.
                        </p>
    </div>
</div>
</template>

<script>
    export default {
    name: "HeroItem",
    props: {
        title: {
            type: String,
            required:true,
        },
        text: {
            type: String,
            required: true,
        }
            
        }
    }
</script>

<style lang="scss" scoped>
.hero-item{
    position: relative;
    /* width: 944px; */
        height: 480px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        background-color: #7EA6A7;
        background: url(../../assets/img/picture1.png) center no-repeat ;
        /* background-repeat: no-repeat; */
        /* background-size: contain; */
        margin-bottom: 60px;
        border-radius: 16px;
 }
.greeting{
    position: absolute;
    top: 236px;
   /* bottom: 28px; */
    left: 28px;
  
    display: inline-flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 432px;
        margin-bottom: 0;
        /* height: 216px; */
        border-radius: 16px;
            background: var(--FOREST-GREEN, #0F3F3C);

color: var(--WHITE, #FFF);
    /* Header 1 */
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    /* 100% */
    letter-spacing: 1.25px;
        }
 .greeting-text{
        color: var(--WHITE, #FFF);
            /* Body */
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            /* 150% */
            letter-spacing: 0.5px;
            width: 384px;
        }
        .greeting-title{
            display: flex;
                width: 313px;
                height: 40px;
                flex-direction: column;
                justify-content: center;
                color: var(--WHITE, #FFF);
                /* Header 1 */
                font-family: Montserrat;
                font-size: 32px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
                /* 100% */
                letter-spacing: 1.25px;
        }
</style>