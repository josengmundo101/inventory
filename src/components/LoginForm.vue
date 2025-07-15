<template>
  <v-form class="pa-2" @submit.prevent>
    <v-text-field
      class="text-field text-white"
      v-model="email"
      :rules="rules"
      label="Email"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      hint="Enter your password to access this website"
      class="text-white"
      v-model="password"
      label="Password"
      type="input"
      variant="outlined"
    ></v-text-field>

    <v-btn class="mt-2" type="submit" color="primary" block>Submit</v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rules = [] // Define your validation rules here
</script>

<style scoped></style>
