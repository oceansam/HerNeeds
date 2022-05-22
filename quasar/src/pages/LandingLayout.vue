<template>
  <q-layout view="lHh lpr fFf">
    <q-header elevated style="height: 5em" class="bg-primary text-black">
      <q-toolbar style="width: 25%">
        <q-toolbar-title>
          <img
            class="clickable q-mt-sm gt-sm"
            @click="navigateElse('/')"
            style="width: 2.5em; height: auto"
            src="https://cdn.discordapp.com/attachments/977648881611440168/977648990160044042/unknown.png"
          />
        </q-toolbar-title>

        <q-btn flat style="color: bg-primary" class="">Home</q-btn>
        <q-btn flat style="color: bg-primary" class="">Our Mission</q-btn>
        <q-btn flat style="color: bg-primary" class="">Our Team</q-btn>
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
