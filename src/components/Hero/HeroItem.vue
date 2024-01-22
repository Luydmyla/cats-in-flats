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
                        <p class="greeting-text">{{ text }}              
                          <!-- <br />
                          <br />
                          Візьми собі котика. -->
                        </p>
                        <p class="greeting-textfooter">
                         {{ textFooter }}
                    </p>
    </div>
 
</div>
     
</template>

<script>

    export default {
    name: "HeroItem",
    components: {
       
    },
    props: {
        title: {
            type: String,
            required:true,
        },
        text: {
            type: String,
            required: true,
        },
        textFooter: {
            type: String,
            required: true,
        }
            
        }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 280px) {
.hero-item{
    display: flex;  
        height: 60vh;
        align-items: end;
        flex-shrink: 0;
        background-color: #7EA6A7;
        background: url(/public/img/hero2.png)  no-repeat ;
        background-size: cover;
        margin-bottom: 10px;
        border-radius: 16px;
        padding: 4px;
       

 }
.greeting{ 
    display: inline-flex;
    padding-bottom: 4px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    padding: 8px;
    border-radius: 10px;
    /* background-color: rgb(234,236,234, 0.9); */
      background-color: rgb(255,252,241, 0.8);
     box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
    transition: transform 600ms linear,
                background-color 600ms linear;
  &:hover,
  &:focus {
    background-color: rgb(255,252,241);
    transform: scale(1.09);
    transform-origin: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
        }
        .greeting-title{
        display: flex;
        flex-direction: column;
        justify-content: center;   
        color: #33665b; 
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 1.25px;
        }
 .greeting-text{
    display: flex;
    text-align: center;
    color: #33665b;    
    /* color: var(--WHITE, #FFF); */
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.5px;
        }
        .greeting-textfooter{
            /* color: #33665b;  */
            color: #F07F2E; 
            /* color: var(--WHITE, #FFF);   */
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
            letter-spacing: 0.5px;
            margin-top: 4px;
            padding: 4px;
            background-color: rgb(243,246,249, 0.75);
            border-radius: 10px;

        }
        
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.hero-item{
    display: flex;
    height: 60vh;
    justify-content: center;
    align-items: center;
    flex-shrink: #c8b69e ;
    background: url(../../../public/img/hero2.png)  no-repeat ;
    background-position: top;
    background-size: cover;
    /* margin-bottom: 60px; */
    border-radius: 16px;
    
 }
.greeting{
    display: inline-flex;
    padding: 24px;
    flex-direction: column;
    gap: 8px;
    width: 432px;
    margin-bottom: 0;
    padding: 8px;
    
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 1.25px;
    border-radius: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0,0,0,.2);
    padding: 10px;
   background-color: rgb(255,252,241, 0.8);
    transition: transform 600ms linear,
                 background-color 600ms linear;
     &:hover,
  &:focus {
    background-color: rgb(255,252,241);
    transform: scale(1.2);
    transform-origin: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
        }
 .greeting-text{
    color: #33665b;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.5px;
        }
 .greeting-textfooter{
    /* color: #33665b;     */
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    color: #F07F2E;
        }

        .greeting-title{
        color: #33665b;
        font-family: Montserrat;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 1.25px;
        }
}
</style>