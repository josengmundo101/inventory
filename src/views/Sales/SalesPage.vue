<script setup>
import { ref } from 'vue'
import SearchBar from '../../components/SearchBar.vue'
import SalesTable from './component/SalesTable.vue'

const searchQuery = ref('')
</script>

<template>
  <v-container class="px-15" fluid>
    <div class="mt-6 mb-8">
      <h1 class="text-h4 font-weight-bold fade-in delay-50">Sales List</h1>
      <p class="text-body-2 text-grey-darken-1 mt-2 fade-in delay-100">
        Sales enables you to effectively control sales KPIs and monitor them in one central place
        while helping teams to reach sales goals.
      </p>
    </div>

    <v-row class="mb-4">
      <v-col cols="12" sm="6">
        <SearchBar v-model="searchQuery" placeholder="Search by name..." />
      </v-col>

      <v-col cols="12" sm="6" class="d-flex justify-end align-center">
        <RouterLink to="sales/add"
          ><v-btn class="text-subtitle-1 font-weight-regular rounded-lg text-none" color="primary"
            ><v-icon icon="mdi-package" start></v-icon>Add Sales</v-btn
          ></RouterLink
        >
      </v-col>
    </v-row>
    <div class="mb-5">
      <SalesTable />
    </div>
  </v-container>
</template>
