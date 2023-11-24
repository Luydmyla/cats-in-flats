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
    /* position: relative; */
    display: flex;  
     /* display: block;   */
         height: 60vh;
        /* justify-content: center; */
        align-items: end;
        flex-shrink: 0;
        background-color: #7EA6A7;
        /* background: url(../../../public/img/hero2.png)  no-repeat ; */
              background: url(/public/img/hero2.png)  no-repeat ;
          /* background: url(/img/hero2.png)  no-repeat ; */
        /* background-position: top; */
        background-size: cover;
        /* background-size: contain; */
        margin-bottom: 10px;
        border-radius: 16px;
        padding: 4px;
       

 }
.greeting{ 
    /* position:absolute;
    top: 100%;
    left: 0; */
    display: inline-flex;
        padding-bottom: 4px;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 0;
        /* height: 216px; */
        border-radius: 10px;
        background-color: hsl(50 33% 25% / 0.75); /* 75% opaque, i.e. 25% transparent */
       background-color:  #fdcd7e transparent;
    /* font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
   
    letter-spacing: 1.25px; */
        }
        .greeting-title{
            display: flex;
                flex-direction: column;
                justify-content: center;
                /* color: #33665b; */
                color: var(--WHITE, #FFF);
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
                 color: var(--WHITE, #FFF);
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
            letter-spacing: 0.5px;
            /* width: 100%; */
        }
        .greeting-textfooter{
            color: #33665b;  
                 color: var(--WHITE, #FFF);  
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px;
            letter-spacing: 0.5px;
                /* height: 20%; */
            /* width: 100%; */
            margin-top: 4px;

        }
        
}
/* @media (min-width: 768px) {} */
@media (min-width: 1024px) {
.hero-item{
    display: flex;
      height: 60vh;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        background-color: #7EA6A7;
        background: url(../../../public/img/hero2.png)  no-repeat ;
        background-position: top;
          /* background: url(../../../public//img/8-29CQ5tmymwbEv2W.png) center no-repeat ; */
        /* background-repeat: no-repeat; */
        background-size: cover;
        /* background-size: contain; */
        margin-bottom: 60px;
        border-radius: 16px;
 }
.greeting{
    /* position: absolute; */
    /* top: 136px; */
   /* bottom: 28px; */
    /* left: 28px; */
    display: inline-flex;
        padding: 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 432px;
        margin-bottom: 0;
        /* height: 216px; */
        border-radius: 16px;
        background-color: rgb(253,205,126, 0.75);
       /* background-color:  #fdcd7e; */
    font-family: Montserrat;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 1.25px;
        }
 .greeting-text{
    color: #33665b;
        /* color: var(--WHITE, #FFF); */    
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.5px;
            width: 384px;
        }
 .greeting-textfooter{
            color: #33665b;    
            font-family: Montserrat;
             font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.5px;
                /* height: 20%; */
        
            margin-top: 20px;

        }

        .greeting-title{
            display: flex;
                width: 313px;
                height: 40px;
                flex-direction: column;
                justify-content: center;
                color: #33665b;
                /* color: var(--WHITE, #FFF); */
                font-family: Montserrat;
                font-size: 32px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
                letter-spacing: 1.25px;
        }
}
</style>