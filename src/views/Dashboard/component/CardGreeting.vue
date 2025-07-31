<template>
  <v-card
    class="mx-auto border-sm rounded-lg d-flex flex-column align-center justify-center"
    color="transparent"
    flat
    style="min-height: 220px"
  >
    <v-row align="center" justify="space-between" class="w-100">
      <v-col cols="9">
        <v-card-title class="text-h5 mb-2">
          Welcome to Dashboard, <span class="user-title">Super Admin!</span>
        </v-card-title>
        <v-card-text class="text-body-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </v-card-text>
      </v-col>
      <v-col cols="3" class="d-flex justify-end">
        <v-img :src="greetingLogo" alt="Greeting" max-width="150" class="img-card" cover />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import greetingLogo from '@/assets/images/greetingLogo.png'
</script>

<style scoped>
.user-title {
  font-weight: bold;
  color: #90085d;
}
</style>
