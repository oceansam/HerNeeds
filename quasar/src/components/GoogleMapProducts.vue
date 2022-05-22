<template>
  <GoogleMap
    api-key="AIzaSyDHjism3qUSMwRuCSjKAwFhrJ9IqCzxDTg"
    style="width: 100%; height: 100vh"
    :styles="mapStyle"
    :center="location"
    :streetViewControl="false"
    :mapTypeControl="false"
    :zoom="12"
  >
    <CustomMarker
      :options="{
        position: location,
        anchorPoint: 'BOTTOM_CENTER',
      }"
    >
      <div class="text-center">
        <q-icon name="person_pin_circle" size="3rem" color="white" />
      </div>
    </CustomMarker>
    <CustomMarker
      class="cursor-pointer"
      v-for="bathroom in bathrooms"
      :key="bathroom"
      :options="{ position: bathroom.position }"
      @click="() => bathroom.hasProducts && openDialog(bathroom)"
    >
      <q-img
        src="../assets/toilet_icon.png"
        width="50px"
        :class="bathroom.hasProducts ? '' : 'disabled'"
      />
      <q-tooltip v-if="!bathroom.hasProducts">Out of stock</q-tooltip>
    </CustomMarker>
    <!-- Custom control -->
    <CustomControl position="TOP_LEFT">
      <q-btn
        class="marker-btn bg-white q-ma-md text-md"
        label="Add Location"
        no-caps
        @click="addBathroom"
      />
    </CustomControl>
  </GoogleMap>
</template>

<script>
import { getBathrooms } from "../lib/firebase";
import { GoogleMap, CustomMarker, CustomControl } from "vue3-google-map";
import { mapStyle } from "../lib/GoogleMapStyle";
import { useQuasar } from "quasar";
import BathroomDialog from "../components/BathroomDialog.vue";
import AddLocationDialog from "../components/AddLocationDialog.vue";
import { ref, onBeforeMount, onMounted } from "vue";
export default {
  components: {
    GoogleMap,
    CustomMarker,
    CustomControl,
  },
  props: ["bathrooms"],
  setup() {
    // Quasar
    const $q = useQuasar();
    // SUBSTITUTE THIS FOR CENTER ATTRIBUTE AND FIRST CUSTOM MARKER IF U DEMO
    // const testLocation = { lat: 43.57185, lng: -79.642853 }
    // Location
    const location = ref({
      lat: 43.57185,
      lng: -79.642853,
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        location.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }

    // Dialog functions
    function openDialog(bathroom) {
      $q.dialog({
        component: BathroomDialog,
        componentProps: { bathroom },
      }).onOk(() => {});
    }
    function addBathroom() {
      $q.dialog({
        component: AddLocationDialog,
        componentProps: {
          location: { lat: location.value.lat, lng: location.value.lng },
        },
      }).onOk(() => {});
    }
    return {
      location,
      mapStyle,
      openDialog,
      addBathroom,
    };
  },
};
</script>
