<template>
    <div class="row mission-container">
        <q-space/>
        <div class="col q-pl-xl gt-sm">
            <img class="q-pl-sm" src="https://cdn.discordapp.com/attachments/976618477282537506/977729781615452230/Hands_-_Give.png" width="450"/>
        </div>  
        <div class="col q-pr-xl">
            <div class="text-h3 q-pb-sm" style="font-weight:600;" >Did you know ...</div>
            <div class="text-h6 q-pb-sm" style="font-weight:600;" ><br>
                According to the organization <i>Days for Girls</i>, over 500 million women are<br>
                experiencing some form of period poverty which is the lack of access to menstrual  
                products. This is because most feminine hygiene products are too expensive for the  
                average person, which could result in negative affects for those going through  
                period poverty. On average a lifetime supply of products could add up to  
                approximately 1.7 million USD, which further proves that feminine products in 
                general are overpriced.
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .mission-container{
        width: 100%;
        background-color: #F0CFCF;
    }
</style>



<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "OurMission",
    });
</script>