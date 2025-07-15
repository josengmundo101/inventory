<template>
  <v-card class="mx-auto my-8 d-flex justify-space-between align-center pa-6" flat height="200">
    <!-- LEFT SIDE: Text Content -->
    <div class="text-content">
      <v-card-title class="text-h5 mb-3">
        Welcome to The Inventory Dashboard, Super Admin!
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </v-card-text>
    </div>

    <!-- RIGHT SIDE: Image -->
    <div class="image-container">
      <img :src="greetingLogo" alt="Greeting" style="max-width: 200px; height: auto" />
    </div>
  </v-card>
</template>

<script setup>
import greetingLogo from '@/assets/images/greetingLogo.png'
</script>

<style scoped>
.text-content {
  max-width: 100%;
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
