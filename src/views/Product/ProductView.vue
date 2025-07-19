<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SearchBar from './component/SearchBar.vue'
import LowStock from '../Dashboard/component/LowStock.vue'
import ProductTable from './component/ProductTable.vue'

const searchQuery = ref('')
</script>

<template>
  <v-container>
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
        <RouterLink to="products/add"
          ><v-btn
            class="btn text-subtitle-1 font-weight-regular rounded-xl text-none"
            color="primary"
            ><v-icon icon="mdi-package" start></v-icon>Add Product</v-btn
          ></RouterLink
        >
      </v-col>
    </v-row>
    <div class="mb-5">
      <ProductTable />
    </div>

    <LowStock />
  </v-container>
</template>

<style scoped>
.btn {
  padding: 8px 24px;
}
</style>
