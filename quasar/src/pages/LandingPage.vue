<template>
    <div class="row landing-container">
        <div class="landing-body col q-pl-xl">
            <div class="text-h2 q-pb-sm" style="font-weight:600;" >find affordable resources.</div>
            <div class="text-h2" style="font-weight:600;">always be prepared with</div>
            <div class="text-h2" style="font-weight:600;">her needs.</div>
            <br>
    
            <q-btn class="landing-button" filled color="primary" text-color="black" size="xl" label="Find Products" />
            <q-btn class="landing-button" filled color="black" text-color="white" size="xl" label="Find Locations" />
        
            
        </div>
        <div class="col gt-sm" id="image" >
            <img src="https://cdn.discordapp.com/attachments/977624874992410724/977723087221055548/Cool_Kids_-_Brainstorming.png" width="550"/>
        </div>
    </div>

</template>

<style scoped>
    .landing-container{
        margin-top: 15%;
    }
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingPage",
});
</script>