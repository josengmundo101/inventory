<script setup lang="ts">
import reusableCartegoryForm from './reusableForm/reusableCartegoryForm.vue'
</script>

<template>
  <v-container class="px-15" fluid>
    <v-card class="pa-4 border-sm" color="transparent" flat>
      <div class="mb-5 d-flex justify-space-between align-center">
        <v-card-title class="text-h4 font-weight-bold">Edit Category</v-card-title>
        <RouterLink to="/admin/categories"
          ><v-btn color="primary" class="mx-5"> Back </v-btn></RouterLink
        >
      </div>
      <v-card-text>
        <reusableCartegoryForm />
      </v-card-text>
    </v-card>
  </v-container>
</template>
