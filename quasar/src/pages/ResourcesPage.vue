<template>
  <q-layout view="lHh lpr fFf">
      <q-header elevated class="bg-primary text-black">
          <q-toolbar class="q-pa-md">
              <q-btn to="/" flat style="color: bg-primary" class="">Home</q-btn>
              <q-btn to="/Map" flat style="color: bg-primary" class="">Map</q-btn>
              <q-btn to="/" flat style="color: bg-primary" class="">Our Team</q-btn>
          </q-toolbar>
      </q-header>
    <div class="row q-pa-xl q-mt-xl">
      <div class="col-2 q-gutter-y-lg" style="width: 25em">
        <q-card class="q-pa-lg">
          <div class="text-center text-bold q-pb-md font">Categories</div>
          <q-list>
            <q-item v-for="(style, i) in styles" :key="i">
              <div>{{ style.title }} </div>
              <q-space /> 
              <div> {{ style.count }}</div>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="q-pa-lg">
          <div class="text-center text-bold q-pb-md font">Filters</div>
          <div class="row justify-center">
            <q-toggle v-model="flow" color="secondary" label="Heavy Flow" />
          </div>
          <div class="row justify-center q-gutter-md q-pb-md">
            <q-toggle
              v-model="isSustainable"
              color="secondary"
              label="Sustainable"
            />
          </div>
          <q-btn
            label="Clear Filters"
            color="secondary"
            class="text-white"
            style="width: 100%"
            @click="clearRefs"
          />
        </q-card>
        <q-card class="q-pa-lg">
          <div class="text-center text-bold q-pb-md font">Price</div>
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
         <q-card class="q-pa-lg width">
            <div class="text-center text-bold q-pb-md font">Size</div>
            <div class="row justify-center q-gutter-md">
              <div v-for="(size, i) in sizes" :key="i">
                {{ size }}
              </div>
            </div>
          </q-card>
      </div>
      <div class="col-9">
        <div class="row justify-center q-gutter-md mar">
          <q-card
            class="col-3"
            v-for="(prod, i) in productListFiltered"
            :key="i"
            style="width: 350px"
          >
            <div class="absolute-top-right text-white">
              <div class="row q-gutter-sm">
                <div v-if="prod.sold" class="bg-black q-pa-xs">
                  {{ prod.sold }}
                </div>
                <div v-if="prod.trending" class="bg-black q-pa-xs">
                  {{ prod.trending }}
                </div>
              </div>
            </div>
            <q-card-section class="row justify-center">
              <q-img :src="prod.image" height="150px" width="150px" />
            </q-card-section>
            <q-card-section class="text-center text-sm">
              <div class="text-bold">
                {{ prod.title }}
              </div>
              <div>${{ prod.price }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const priceValue = ref(80);
    const isSustainable = ref(undefined);
    const flow = ref(undefined);
    function clearRefs() {
      flow.value = undefined;
      isSustainable.value = undefined;
    }
    const styles = [
      { title: "Sanitary Pads", count: "35" },
      { title: "Tampons", count: "32" },
      { title: "Menstraul Cups", count: "23" },
      { title: "Menstraul Discs", count: "20" },
      { title: "Period Underwear", count: "30" },
      { title: "Reusable Pads", count: "15" },
      { title: "Medicine", count: "24" },
      { title: "Comfort Products", count: "30" },
    ];

    const brands = [
      { title: "Sustainable", state: true },
      { title: "Non-Sustainable", state: false },
    ];

    const products = [
      {
        trending: "TRENDING",
        image: "https://m.media-amazon.com/images/I/71muxws8dCL._AC_SX679_.jpg",
        title: "Regular Reusable Washable Menstrual Pad",
        isSustainable: true,
        price: 28.99,
      },
      {
        trending: "TRENDING",
        image: "https://m.media-amazon.com/images/I/713vB6jibEL._AC_SX425_.jpg",
        title: "Playtex Sport Tampons",
        price: 7.0,
        isSustainable: false,
      },
      {
        image:
          "https://cdn.shopify.com/s/files/1/1828/8643/products/ApplicatorSetSave8_720x.png?v=1651587483",
        title: "Reusable Applicator Set",
        price: 40.0,
        isSustainable: true,
      },
      {
        image:
          "https://i5.walmartimages.ca/images/Enlarge/179/023/999999-37000179023.jpg",
        title: "Always Maxi Pads",
        isSustainable: false,
        price: 8.0,
      },
      {
        image:
          "https://i5.walmartimages.ca/images/Enlarge/484/122/6000198484122.jpg",
        title: "Tampax Pearl Tampons",
        isSustainable: false,
        price: 4.98,
      },

      {
        image:
          "https://cdn11.bigcommerce.com/s-eunwokfqff/images/stencil/1280x1280/products/217/2084/Meluna_menstrual_cups_stem_handle_fv10__54300.1621546901.jpg?c=2",
        title: "MeLuna USA Menstrual Cup",
        price: 27.0,
        isSustainable: true,
        heavyFlow: true,
      },
      {
        image: "https://m.media-amazon.com/images/I/51y4TTI84HL._AC_SX679_.jpg",
        title: "DivaCup Menstrual Cup",
        price: 30.0,
        isSustainable: true,
      },
    ];

    const sizes = ["XL", "L", "M", "S", "XS"];

    const productListFiltered = computed(() => {
      if (isSustainable.value || flow.value) {
        return products.filter(
          (prod) =>
            prod.isSustainable &&
            prod.price < priceValue.value &&
            flow.value &&
            prod.heavyFlow == true
        );
      }
      return products.filter((prod) => prod.price < priceValue.value);
    });

    return {
      products,
      brands,
      flow,
      styles,
      priceValue,
      isSustainable,
      clearRefs,
      productListFiltered,
      sizes
    };
  },
};
</script>

<style>
body{
  background-color:#F6E8E8;
  font-size: 1em;
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
