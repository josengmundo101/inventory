<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SearchBar from '../../components/SearchBar.vue'
import CategoryTable from './components/CategoryTable.vue'

const searchQuery = ref('')
</script>

<template>
  <v-container class="px-15" fluid>
    <div class="mt-6 mb-8">
      <h1 class="text-h4 font-weight-bold fade-in delay-50">Category List</h1>
      <p class="text-body-2 text-grey-darken-1 max-width fade-in delay-100">
        Use category list as to describe your overall core business from the provided list. Click
        the name of the category where you want to add a list item. .
      </p>
    </div>

    <v-row class="mb-4">
      <v-col cols="12" sm="6">
        <SearchBar v-model="searchQuery" placeholder="Search by name..." />
      </v-col>

      <v-col cols="12" sm="6" class="d-flex justify-end align-center">
        <RouterLink to="categories/add"
          ><v-btn class="text-subtitle-1 font-weight-regular rounded-lg text-none" color="primary"
            ><v-icon icon="mdi-package" start></v-icon>Add Category</v-btn
          ></RouterLink
        >
      </v-col>
    </v-row>
    <div class="mb-5">
      <CategoryTable />
    </div>
  </v-container>
</template>

<style scoped>
.btn {
  padding: 8px 24px;
}
</style>
