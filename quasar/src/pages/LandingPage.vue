<template>
  <div>
    <div class="row landing-container items-center">
      <div class="space" id="/"></div>
      <div class="landing-body col q-pl-xl">
        <div class="text-title text-bold q-pb-sm">Affordable Resources.</div>

        <div class="text-title text-bold">
          For <span class="text-primary">Her</span> Needs.
        </div>
        <div class="row q-mt-xl">
          <q-btn
            class="landing-button q-mr-xl"
            filled
            color="primary"
            style="width: 220px"
            text-color="white"
            size="xl"
            label="Find Locations"
            to="/map"
          />
          <q-btn
            class="landing-button"
            filled
            color="white"
            style="width: 220px"
            text-color="black"
            size="xl"
            label="Find Products"
            to="/resources"
          />
        </div>
      </div>
      <div class="col q-pl-xl" id="image">
        <q-img src="../assets/Landing.jpg" style="width: 500px" />
      </div>
    </div>

    <svg
      style="margin-bottom: -0.4em"
      id="wave1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ea01ff"
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
  margin-top: 10%;
  width: 100%;
}

.space {
  width: 10%;
}
</style>
