<template>
  <div class="our-team-container pad">
    <svg id="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#720058"
        fill-opacity="1"
        d="M0,64L34.3,58.7C68.6,53,137,43,206,69.3C274.3,96,343,160,411,181.3C480,203,549,181,617,160C685.7,139,754,117,823,128C891.4,139,960,181,1029,202.7C1097.1,224,1166,224,1234,218.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </svg>
    <h2 style="text-align: center; font-weight: 600" id="our-team">Our Team</h2>
    <div class="row justify-center items-center q-gutter-xl">
      <div v-for="(member, i) in teamList" :key="i" class="q-my-xl">
        <q-avatar size="20rem" class="team-icon">
          <q-img :src="member.imgUrl" />
        </q-avatar>
        <div class="text-md text-center q-pt-md">
          {{ member.name }}
        </div>

        <a :href="member.socialUrl" style="text-decoration: none">
          <q-btn
            label="Socials"
            style="width: 100%"
            color="primary"
            class="text-white q-mt-md"
          />
        </a>
      </div>
      
    </div>
  </div>

</template>

<style lang="scss" scoped>
#wave2 {
  padding-bottom: 2%;
}

.image {
  width: 50%;
}
.team-icon {
  border: 2px solid black;
}

.circle {
  width: 300px;
  height: 400px;
  background-color: #f0cfcf;
  border-radius: 50%;
}

.pad{
  padding-bottom: 12em;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurTeam",
  setup() {
    const teamList = [
      {
        name: "Akshara Debnath",
        socialUrl: "https://www.linkedin.com/in/akshara-debnath/",
        imgUrl:
          "https://cdn.discordapp.com/attachments/976618477282537506/978013805411975220/unknown.png",
      },
      {
        name: "Kara Huynh",
        socialUrl: "https://www.linkedin.com/in/kara-huynh/",
        imgUrl:
          "https://cdn.discordapp.com/attachments/976618477282537506/978014103736025118/unknown.png",
      },
      {
        name: "Darren Tam",
        socialUrl: "https://www.linkedin.com/in/darrentam1/",
        imgUrl:
          "https://cdn.discordapp.com/attachments/976618477282537506/978013855756202024/unknown.png",
      },
      {
        name: "Samee Chowdhury",
        socialUrl: "https://www.linkedin.com/in/samee-chowdhury/",
        imgUrl:
          "https://cdn.discordapp.com/attachments/742241236957528104/977791502266798122/unknown.png",
      },
    ];
    return { teamList };
  },
});
</script>
