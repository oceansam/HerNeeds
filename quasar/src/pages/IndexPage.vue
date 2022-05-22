<template>
  <div class="row q-gutter-xl q-pa-xl">
    <div class="col-2 q-gutter-y-lg" style="width: 250px">
      <q-card class="q-pa-lg">
        <div class="text-center text-bold">Categories</div>
        <q-list>
          <q-item v-for="(style, i) in styles" :key="i">
            <div>{{ style.title }} <q-space /> {{ style.count }}</div>
          </q-item>
        </q-list>
      </q-card>
      <q-card class="q-pa-lg">
        <div class="text-center text-bold">Size</div>
        <div class="row justify-center q-gutter-md">
          <div v-for="(size, i) in sizes" :key="i">
            {{ size }}
          </div>
        </div>
      </q-card>
      <q-card class="q-pa-lg">
        <div class="text-center text-bold">Price</div>
        <q-slider
          class="q-mt-lg"
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
    </div>
    <div class="col-9">
      <div class="row justify-center q-gutter-md">
        <q-card
          class="col-3"
          v-for="(cloth, i) in clothes"
          :key="i"
          style="width: 350px"
        >
          <div class="absolute-top-right text-white">
            <div class="row q-gutter-sm">
              <div class="bg-black q-pa-xs">
                {{ cloth.sold }}
              </div>
              <div class="bg-black q-pa-xs">
                {{ cloth.trending }}
              </div>
            </div>
          </div>
          <q-card-section class="row justify-center">
            <q-img
              src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
              height="150px"
              width="150px"
            />
          </q-card-section>
          <q-card-section class="text-center">
            {{ cloth.title }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
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

    const brands = [
      { title: "Sustainable", state: true },
      { title: "Non-Sustainable", state: false },
    ];

    const clothes = [
      {
        sold: "-20%",
        trending: "TRENDING",
        image: "1.png",
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
    };
  },
};
</script>

<style>
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
</style>
