<template>
  <v-card flat class="border-sm" color="transparent">
    <div class="table-scroll">
      <v-table class="custom-table" density="comfortable" hover>
        <thead>
          <tr>
            <th class="text-uppercase text-center font-weight-bold" style="width: 30%">Image</th>
            <th class="text-uppercase text-center font-weight-bold" style="width: 23%">Category</th>
            <th class="text-uppercase text-center font-weight-bold" style="width: 27%">
              Description
            </th>
            <th class="text-uppercase text-center font-weight-bold" style="width: 20%">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in categories" :key="index">
            <td class="pa-5 text-center">
              <v-img :src="item.image" max-width="80" height="80" cover class="mx-auto rounded" />
            </td>
            <td class="pa-5 text-center">{{ item.name }}</td>
            <td class="pa-5 text-center">{{ item.description }}</td>
            <td class="pa-5 text-center">
              <div class="d-flex justify-center align-center ga-2">
                <v-btn icon flat size="small" class="rounded-xl" color="transparent">
                  <RouterLink to="/admin/categories/view">
                    <v-icon small class="text-primary">mdi-eye</v-icon>
                  </RouterLink>
                </v-btn>
                <v-btn icon flat size="small" class="rounded-xl" color="transparent">
                  <RouterLink to="/admin/categories/edit">
                    <v-icon small class="text-warning">mdi-pencil</v-icon>
                  </RouterLink>
                </v-btn>
                <v-btn icon flat size="small" class="rounded-xl" color="transparent">
                  <v-icon small class="text-error">mdi-delete</v-icon>
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
  {
    image: 'https://via.placeholder.com/80',
    name: 'Muscle Cars',
    description: 'Classic high-performance American cars from the 60s and 70s.',
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Compact',
    description: 'Small, fuel-efficient vehicles perfect for city driving.',
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Luxury',
    description: 'Premium vehicles with high-end features and superior comfort.',
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Sports',
    description: 'High-speed vehicles designed for dynamic performance and handling.',
  },
  {
    image: 'https://via.placeholder.com/80',
    name: 'Off-Road',
    description: 'Vehicles built to handle rough terrains and outdoor adventures.',
  },
])
</script>

<style scoped>
.table-scroll {
  max-height: 500px; /* adjust based on your layout */
  overflow-y: auto;
}

.custom-table {
  background-color: transparent;
}

.custom-table thead {
  background-color: rgba(46, 46, 46, 0.05); /* soft separation */
}

.custom-table th {
  text-transform: uppercase;
  font-weight: 900;
  color: #151515;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-table td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
