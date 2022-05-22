<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-pa-lg">
      <div class="t">
        <div class="text-lg">Add Bathroom Location</div>
        <div class="text-grey text-caption text-sm">
          Provide a building name & select products at location
        </div>
      </div>
      <q-form class="q-mt-md" @submit.prevent.stop="onOKClick">
        <div>Building Name</div>
        <q-input
          v-model="locationName"
          outlined
          :rules="[(val) => !!val || 'Field is required']"
          color="secondary"
          hint="e.g (Eaton centre mall)"
        />
        <q-separator class="q-my-md" />
        <div>Products Available</div>
        <q-checkbox
          class="text-sm"
          color="secondary"
          v-model="hasProduct"
          val="Tampon"
          label="Tampon"
        />
        <q-checkbox
          class="text-sm"
          color="secondary"
          v-model="hasProduct"
          val="Pad"
          label="Pads"
        />
        <q-separator class="q-my-md" />
        <div>Location</div>
        <q-input
          v-if="!isLocation"
          v-model="customAddress"
          label="Address"
          outlined
          color="secondary"
        />
        <q-checkbox
          class="text-sm"
          color="secondary"
          v-model="isLocation"
          label="Is current location?"
        />

        <div class="row justify-center q-gutter-md q-mt-sm">
          <q-btn
            class="text-white"
            :class="
              $q.screen.sm || $q.screen.xs
                ? 'button-dialog-sm'
                : 'button-dialog'
            "
            label="Confirm"
            type="submit"
            color="primary"
            @click="onOKClick"
            no-caps
          />
          <q-btn
            :class="
              $q.screen.sm || $q.screen.xs
                ? 'button-dialog-sm'
                : 'button-dialog'
            "
            label="Cancel"
            @click="onDialogHide"
            no-caps
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent, useQuasar } from "quasar";
import { ref } from "vue";
import { addBathroom } from "../lib/firebase";
export default {
  props: ["location"],
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

    // Form inputs
    const hasProduct = ref([]);
    const locationName = ref("");
    const customAddress = ref("");
    const isLocation = ref(true);
    return {
      dialogRef,
      onDialogHide,

      onOKClick() {
        if (locationName.value) {
          const data = {
            name: locationName.value,
            products: hasProduct.value,
            voteCount: 1,
            position: props.location,
            hasProducts: hasProduct.value.length > 0 ? true : false,
            address: !isLocation.value ? customAddress.value : "",
          };
          addBathroom(data);
          $q.notify({
            message: "Added location",
            icon: "check",
          });
          onDialogHide();
        }
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
      hasProduct,
      locationName,
      isLocation,
      customAddress,
    };
  },
};
</script>

<style lang="scss" scoped>
.button-dialog {
  width: 190px;
  &-sm {
    width: 130px;
  }
}
.top {
  margin-right: 0em;
}
</style>
