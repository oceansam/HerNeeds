<template>
  <google-map-products :bathrooms="bathroomList" />
</template>

<script>
import { getBathrooms } from "../lib/firebase";
import { ref, onBeforeMount } from "vue";
// Components
import GoogleMapProducts from "../components/GoogleMapProducts.vue";
export default {
  components: {
    GoogleMapProducts,
  },
  setup() {
    const bathroomList = ref();

    onBeforeMount(async () => {
      bathroomList.value = await getBathrooms();
    });
    return {
      bathroomList,
    };
  },
};
</script>
