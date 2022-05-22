<template>
  <q-dialog ref="dialogRef" @hide="saveExit">
    <div class="row justify-center">
      <q-img
        :src="
          bathroom.imgUrl ||
          'https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg'
        "
      />
      <q-card class="q-pa-lg items-center">
        <div class="row q-gutter-x-sm">
          <div class="col-10">
            <div class="text-lg text-bold">{{ bathroom.name }}</div>
            <div class="text-caption text-sm" v-if="bathroom.products">
              <div v-if="bathroom.products.length > 1">Tampons & Pads</div>
              <div v-else-if="bathroom.products.length == 1">
                {{ bathroom.products[0] }}
              </div>
            </div>
            <div class="text-caption text-grey text-sm q-pt-md">
              {{ bathroom.address || "no address provided" }}
            </div>
          </div>
          <div class="col-1">
            <q-icon
              class="cursor-pointer"
              name="keyboard_arrow_up"
              :color="vote == 1 ? 'secondary' : 'black'"
              size="2.5rem"
              @click="() => addVote(1)"
            />
            <div class="text-lg text-center text-bold" style="width: 2.5rem">
              {{ bathroom.voteCount + vote }}
            </div>
            <q-icon
              class="cursor-pointer"
              name="keyboard_arrow_down"
              :color="vote == -1 ? 'secondary' : 'black'"
              size="2.5rem"
              @click="() => addVote(-1)"
            />
          </div>
        </div>
        <div class="row justify-between q-gutter-md q-mt-md">
          <q-btn
            class="text-white text-button"
            :class="
              $q.screen.sm || $q.screen.xs
                ? 'button-dialog-sm'
                : 'button-dialog'
            "
            label="Get Directions"
            @click="onOKClick"
            color="secondary"
            no-caps
          />
          <q-btn
            class="text-button"
            :class="
              $q.screen.sm || $q.screen.xs
                ? 'button-dialog-sm'
                : 'button-dialog'
            "
            label="Go Back"
            @click="saveExit"
            no-caps
          />
        </div>
      </q-card>
    </div>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent, useQuasar } from "quasar";
import { ref } from "vue";
export default {
  props: ["bathroom"],
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup(props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogCancel } =
      useDialogPluginComponent();
    const $q = useQuasar();
    const vote = ref(0);
    function addVote(voteValue) {
      vote.value =
        vote.value == 0 || vote.value == -voteValue
          ? (vote.value = voteValue)
          : (vote.value = 0);
      $q.notify({
        message: "Voting Under Maintenance",
        color: "red",
      });
    }
    const locationCenter = ref({ lat: 43.65549, lng: -79.37428 });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        locationCenter.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
    function saveExit() {
      // Firestore update vote
      if (vote.value != 0) {
        console.log("updated vote");
      }
      onDialogHide();
    }
    return {
      dialogRef,
      onDialogHide,
      addVote,
      onOKClick() {
        var point = props.bathroom.position;
        window.location = `https://www.google.com/maps/dir/?api=1&origin=${locationCenter.value.lat},${locationCenter.value.lng}&destination=${point.lat},${point.lng}&travelmode=walking`;
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
      vote,
      saveExit,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-dialog {
  width: 180px;
  &-sm {
    width: 130px;
  }
}
</style>
