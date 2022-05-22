<template>
  <q-layout view="lHh lpr fFf">
    <q-header class="bg-white text-black">
      <q-toolbar style="width: 27%" class="row items-center q-pa-md">
        <q-toolbar-title>
          <q-icon name="spa" size="4rem" color="primary" />
        </q-toolbar-title>
        <div class="q-mr-md">
          <q-btn flat style="color: bg-primary" class="text-sm" to="#home"
            >Home</q-btn
          >
          <q-btn
            flat
            style="color: bg-primary"
            class="text-sm"
            to="#our-mission"
            >Our Mission</q-btn
          >
          <q-btn flat style="color: bg-primary" class="text-sm" to="#our-team"
            >Our Team</q-btn
          >
        </div>
      </q-toolbar>
    </q-header>
    <router-view />
  </q-layout>
</template>

<style scoped>
body {
  background-color: #f6e8e8;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingLayout",
});
</script>
