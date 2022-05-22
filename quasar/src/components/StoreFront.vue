<template>
  <div class="row">
    <q-card class="col-2" style="width: 250px">
      <div class="text-center text-bold">Categories</div>
      <q-list>
        <q-item v-for="(style, i) in styles" :key="i">
          <div>{{ style.title }} <q-space /> {{ style.count }}</div>
        </q-item>
      </q-list>
    </q-card>
    <div class="col-10">
      <q-card v-for="(cloth, i) in clothes" :key="i">
        <q-img :src="cloth.img" />
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
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
