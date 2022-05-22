<template>
  <div>
    <div class="row landing-container">
      <div class="space"></div>
      <div class="landing-body col q-pl-xl">
        <div class="text-h2 q-pb-sm" style="font-weight: 600">
          Find affordable resources.
        </div>
        <div class="text-h2 q-pb-sm q-mt-sm" style="font-weight: 600">
          Always be prepared with
        </div>
        <div class="text-h2" style="font-weight: 600">Her Needs.</div>
        <br /><br />

        <q-btn
          class="landing-button"
          filled
          color="primary"
          text-color="black"
          size="xl"
          label="Find Products"
        />
        <q-btn
          class="landing-button q-ml-xl"
          filled
          color="black"
          text-color="white"
          size="xl"
          label="Find Locations"
        />
      </div>
      <div class="col gt-sm q-pl-xl" id="image">
        <img
          src="https://cdn.discordapp.com/attachments/977624874992410724/977723087221055548/Cool_Kids_-_Brainstorming.png"
          width="550"
        />
      </div>

      <svg id="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F0CFCF"
          fill-opacity="1"
          d="M0,160L40,154.7C80,149,160,139,240,154.7C320,171,400,213,480,234.7C560,256,640,256,720,224C800,192,880,128,960,112C1040,96,1120,128,1200,149.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>

    <q-btn
      class="landing-button"
      filled
      to="/resources"
      color="primary"
      text-color="black"
      size="xl"
      label="Find Products"
    />
    <q-btn
      class="landing-button q-ml-xl"
      filled
      to="/map"
      color="black"
      text-color="white"
      size="xl"
      label="Find Locations"
    />

    <div class="col gt-sm q-pl-xl" id="image">
      <img
        src="https://cdn.discordapp.com/attachments/977624874992410724/977723087221055548/Cool_Kids_-_Brainstorming.png"
        width="550"
      />
    </div>
    <svg id="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F0CFCF"
        fill-opacity="1"
        d="M0,160L40,154.7C80,149,160,139,240,154.7C320,171,400,213,480,234.7C560,256,640,256,720,224C800,192,880,128,960,112C1040,96,1120,128,1200,149.3C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <our-mission />
    <our-team />
  </div>
</template>
<script>
import OurMission from "../pages/OurMission.vue";
import OurTeam from "../pages/OurTeam.vue";
export default {
  components: { OurMission, OurTeam },

  setup() {},
};
</script>
<style scoped>
.landing-container {
  margin-top: 15%;
  width: 100%;
}

#wave1 {
  padding-top: 5%;
}

.space {
  width: 10%;
}
</style>
