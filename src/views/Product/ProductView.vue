<script setup>
import { ref } from 'vue'
import SearchBar from './component/SearchBar.vue'

const searchQuery = ref('')
</script>

<template>
  <v-container class="py-8">
    <div class="dashboard-overview mt-6 mb-8">
      <h1 class="text-h4 font-weight-bold tracking-tight fade-in delay-50">Product</h1>
      <p class="text-body-2 text-grey-darken-1 max-width fade-in delay-100">
        Manage and track Product Record.
      </p>
    </div>

    <v-row class="mb-4">
      <v-col cols="12" sm="6">
        <SearchBar v-model="searchQuery" placeholder="Search by name..." />
      </v-col>

      <v-col cols="12" sm="6" class="d-flex justify-end align-center">
        <v-btn class="btn rounded-xl" color="primary"
          ><v-icon icon="mdi-package" start></v-icon>Add Product</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
