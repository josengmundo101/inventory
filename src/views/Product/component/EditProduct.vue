<script setup lang="ts">
import ReusableForm from './reusableForm/ReusableForm.vue'
</script>

<template>
  <v-container class="px-15" fluid flat>
    <v-card class="pa-4" flat>
      <div class="mb-5 d-flex justify-space-between align-center">
        <v-card-title class="text-h4 font-weight-bold">Edit Product</v-card-title>
        <RouterLink to="/admin/products"
          ><v-btn color="primary" class="mx-5"> Back </v-btn></RouterLink
        >
      </div>
      <v-card-text>
        <ReusableForm />
      </v-card-text>
    </v-card>
  </v-container>
</template>
