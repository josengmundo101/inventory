<template>
  <v-card class="rounded-lg mx-auto pa-6" flat>
    <v-row align="center" justify="space-between">
      <!-- LEFT SIDE: Text Content -->
      <v-col cols="12" md="8">
        <v-card-title class="text-h6 mb-2"> Welcome to Dashboard, Super Admin! </v-card-title>
        <v-card-text class="text-body-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>
      </v-col>

      <!-- RIGHT SIDE: Image -->
      <v-col cols="12" md="4" class="d-flex justify-end">
        <v-img :src="greetingLogo" alt="Greeting" max-width="150" class="mr-md-4" cover />
      </v-col>
    </v-row>
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
