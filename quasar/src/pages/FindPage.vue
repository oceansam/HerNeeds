<template>
  <q-layout view="lHh lpr fFf">
      <q-header elevated class="bg-primary text-black">
          <q-toolbar class="q-pa-md">
              <q-btn flat style="color: bg-primary" class="">Home</q-btn>
              <q-btn flat style="color: bg-primary" class="">Map</q-btn>
              <q-btn flat style="color: bg-primary" class="">Our Team</q-btn>
          </q-toolbar>
      </q-header>
      <div class="row q-gutter-xl q-pa-xl">
        <div class="col-2 q-gutter-y-lg q-mt-xl" style="width: 250px">
          <q-card class="q-pa-lg width q-mt-xl">
            <div class="text-center text-bold q-pb-md font">Categories</div>
            <q-list>
              <q-item v-for="(style, i) in styles" :key="i">
                <div>{{ style.title }}</div>
                <q-space/> 
                <div>{{ style.count }}</div>
              </q-item>
            </q-list>
          </q-card>

          <q-card class="q-pa-lg width" >
            <div class="text-center text-bold font">Price</div>
            <q-slider
              class="q-mt-lg q-pa-md"
              v-model="priceValue"
              :min="0"
              :max="80"
              :step="4"
              label
              :label-value="'$' + priceValue"
              label-always
              color="secondary"
            />
          </q-card>
            <q-card class="q-pa-lg width">
            <div class="row justify-center q-gutter-md">
              <q-checkbox v-model="teal" label="Sustainable" color="secondary" />
              <q-checkbox v-model="orange" label="Non-sustainable" color="secondary" />
            </div>
          </q-card>
        </div>



        <div class="col-9">
          <div class="row justify-center q-gutter-md q-mt-xs q-ml-xl q-pl-lg">
            <q-card
              class="col-3 q-mt-xl"
              v-for="(cloth, i) in clothes"
              :key="i"
              style="width: 25em; height: 19em;"
            >
              <div class="absolute-top-right text-white" style="font-size:0.8em; margin-right: 1em;">
                <div class="row">
                  <div class="bg-black q-pa-xs" style="margin-top:1.8em; margin-bottom:1.8em; border-radius: 0.6em;">
                    {{ cloth.sold }}
                  </div>
                  <div v-if="cloth.trending === 'TRENDING'" class="bg-black q-pa-xs q-ma-lg" style="border-radius: 0.6em;">
                    {{ cloth.trending }}
                  </div>
                </div>
              </div>
              <q-card-section class="row justify-center" style="padding-top: 20%;">
                <q-img
                  src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
                  height="120px"
                  width="120px"
                  
                />
              </q-card-section>
              <q-card-section class="text-center">
                {{ cloth.title }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const priceValue = ref(0);
    const styles = [
      { title: "Sanitary Pads", count: "0" },
      { title: "Tampons", count: "0" },
      { title: "Menstraul Cups", count: "6" },
      { title: "Menstraul Discs", count: "7" },
      { title: "Period Underwear", count: "10" },
      { title: "Reusable Pads", count: "7" },
      { title: "Medicine", count: "24" },
      { title: "Comfort Products", count: "30" },
    ];

    const clothes = [
      {
        sold: "-20%",
        trending: "TRENDING",
        image: "../public/1.png",
        title: "Beauty Heros - $37.23",
      },
      {
        sold: "-15%",
        trending: "TRENDING",
        image: "2.png",
        title: "Yes Wellness - $23.99",
      },
      {
        sold: "-10%",
        image: "3.png",
        title: "Current Body - $29",
      },
      {
        sold: "-5%",
        image: "4.png",
        title: "Nike Air Footscape Magista Flyknit",
      },
      {
        sold: "-5%",
        image: "5.png",
        title: "Nike Air Zoom Huarache 2k4",
      },

      {
        sold: "0%",
        image: "6.png",
      },
    ];

    const sizes = ["XL", "L", "M", "S", "XS"];

    return {
      sizes,
      clothes,
      brands,
      styles,
      priceValue,
      teal: ref(true),
      orange: ref(false),
    };
  },
};
</script>

<style>
body{
  background-color:#F6E8E8;
  font-size: 1em;
}

.v-card--reveal {
  bottom: 0;
  width: 100%;
  opacity: 0.5;
  position: absolute;
  align-items: center;
  justify-content: center;
}

.but {
  background-color: #b97e7e;
  color: white;
  padding: 0.7em 1em 0.7em 1em;
  border-radius: 1em;
  margin-top: 1em;
  margin-left: 1em;
}

.width{
  width:25em;
}

.font{
   font-size: 120%;
}

</style>
