<template>
  <div class="mission-container" id="our-mission">
    <div class="row">
      <div class="space"></div>
      <!-- <div class="col q-pl-xl gt-sm">
        <img
          class="q-pl-sm"
          src="https://cdn.discordapp.com/attachments/976618477282537506/977729781615452230/Hands_-_Give.png"
          width="450"
        />
      </div> -->
      <div class="col q-pr-xl">
        <div class="text-bold text-white q-pb-sm" style="font-size: 8rem">
          Did you know?
        </div>
        <q-separator color="white" />
        <div class="text-lg q-pb-sm q-pt-xl text-white">
          According to the organization <i>Days for Girls</i>, over 500 million
          women are experiencing some form of period poverty which is the lack
          of access to menstrual products. This is because most feminine hygiene
          products are too expensive for the average person, which could result
          in negative affects for those going through period poverty. On average
          a lifetime supply of products could add up to approximately 1.7
          million USD, which further proves that feminine products in general
          are overpriced.
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div class="text-lg q-pb-sm text-white text-bold text-center">
      Our mission is to help women find affordable and environmentally
      <br />friendly menstrual products in times of need.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mission-container {
  width: 100%;
  background-color: $primary;
}

.space {
  width: 10%;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OurMission",
});
</script>
