<template>

    <div class="our-team-container">

        <svg id="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0CFCF" fill-opacity="1" d="M0,64L34.3,58.7C68.6,53,137,43,206,69.3C274.3,96,343,160,411,181.3C480,203,549,181,617,160C685.7,139,754,117,823,128C891.4,139,960,181,1029,202.7C1097.1,224,1166,224,1234,218.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
            </path>
        </svg>
        <h2 style="text-align: center; font-weight:600;">Our Team</h2>
        <div class="row">
            <div class="col circle q-mr-md" id="circle1">
                <a target="_blank" href="https://www.linkedin.com/in/akshara-debnath/"></a>
                <div class="text-h5 q-pb-sm" style="font-weight:600; color: black; text-align: center;" >Akshara</div>
            </div>

            <div class="col circle q-mr-md">
                 <a target="_blank" href="https://www.linkedin.com/in/kara-huynh/">
                    <img class="image" src="https://cdn.discordapp.com/attachments/977624874992410724/977786569127759912/Cool_Kids_-_Dog.png" alt="cartoon-dog-smiling" width="300" height="200">
                </a>
                <div class="text-h5 q-pb-sm" style="font-weight:600; color: black; text-align: center;" >Kara</div>
            </div>

            <div class="col circle q-mr-md">
                <a target="_blank" href="https://www.linkedin.com/in/darrentam1/">
                    <img class="image" src="https://cdn.discordapp.com/attachments/977624874992410724/977786174615736341/Brazuca_-_Cat_2.png" alt="cartoon-blue-cat" width="300" height="200">
                </a>
                <div class="text-h5 q-pb-sm" style="font-weight:600; color: black; text-align: center;" >Darren</div>
            </div>

            <div class="col circle">
                <a target="_blank" href="https://www.linkedin.com/in/samee-chowdhury/">
                    <img class="image" src="https://cdn.discordapp.com/attachments/742241236957528104/977791502266798122/unknown.png" alt="cartoon-panda" width="300" height="300">
                </a>
                <div class="text-h5 q-pb-sm" style="font-weight:600; color: black; text-align: center;" >Samee</div>
            </div>
        </div>

    </div>
    
</template>

<style scoped>
    #wave2{
        padding-bottom: 2%;
    }

    .image{
        width: 50%;
    }

    .circle{
        width: 300px;
        height: 400px;
        background-color: #F0CFCF;
        border-radius: 50%;
    }
</style>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "OurTeam",
    });
</script>