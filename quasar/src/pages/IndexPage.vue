<template>
  <q-page class="q-pa-xl">
    <div class="text-center">Button routes</div>
    <div class="row justify-center">
      <q-btn to="/login" label="Go to Login Page" />
      <q-btn to="/signup" label="Go to sign up Page" />
      <q-btn to="/search" label="Go to search Page" />
      <q-btn to="/map" label="Go to Map Page" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
