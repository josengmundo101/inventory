<script setup>
import { ref } from 'vue'
import AppNavbar from '@/components/system/AppNavBar.vue'
import SideBar from '@/components/system/SideBar.vue'

const drawer = ref(true) // controls navigation drawer
</script>

<template>
  <v-app>
    <SideBar v-model:drawer="drawer" />
    <AppNavbar v-model:drawer="drawer" />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scope></style>
