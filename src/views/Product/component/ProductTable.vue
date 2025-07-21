<template>
  <v-card flat class="pa-5">
    <div class="table-scroll">
      <v-table density="comfortable" hover>
        <thead>
          <tr>
            <th class="text-uppercase">Image</th>
            <th class="text-uppercase">Name</th>
            <th class="text-uppercase">Code</th>
            <th class="text-uppercase">Category</th>
            <th class="text-uppercase">Brand</th>
            <th class="text-uppercase">Price</th>
            <th class="text-uppercase">Unit</th>
            <th class="text-uppercase">Quantity</th>
            <th class="text-uppercase">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td class="pa-5"><v-img :src="item.image" max-width="50" height="50" cover></v-img></td>
            <td class="pa-5">{{ item.name }}</td>
            <td class="pa-5">{{ item.code }}</td>
            <td class="pa-5">{{ item.category }}</td>
            <td class="pa-5">{{ item.brand }}</td>
            <td class="pa-5">{{ item.price }}</td>
            <td class="pa-5">{{ item.unit }}</td>
            <td class="pa-5">{{ item.quantity }}</td>
            <td class="pa-5">
              <v-icon small class="me-2 text-primary" @click="showProduct(item)">mdi-eye</v-icon>
              <v-icon small class="me-2 text-warning" @click="editProduct(item)">mdi-pencil</v-icon>
              <v-icon small class="text-error" @click="deleteProduct(item)">mdi-delete</v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    image: 'https://via.placeholder.com/50',
    name: 'Vintage Mustang',
    code: 'VM-001',
    category: 'Muscle Car',
    brand: 'Ford',
    price: '$25,000',
    unit: 'Piece',
    quantity: 3,
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Classic Beetle',
    code: 'CB-002',
    category: 'Compact',
    brand: 'Volkswagen',
    price: '$12,000',
    unit: 'Piece',
    quantity: 5,
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Classic Beetle',
    code: 'CB-002',
    category: 'Compact',
    brand: 'Volkswagen',
    price: '$12,000',
    unit: 'Piece',
    quantity: 5,
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Classic Beetle',
    code: 'CB-002',
    category: 'Compact',
    brand: 'Volkswagen',
    price: '$12,000',
    unit: 'Piece',
    quantity: 5,
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Classic Beetle',
    code: 'CB-002',
    category: 'Compact',
    brand: 'Volkswagen',
    price: '$12,000',
    unit: 'Piece',
    quantity: 5,
  },
  {
    image: 'https://via.placeholder.com/50',
    name: 'Classic Beetle',
    code: 'CB-002',
    category: 'Compact',
    brand: 'Volkswagen',
    price: '$12,000',
    unit: 'Piece',
    quantity: 5,
  },
  // Add more products as needed
])

const showProduct = (item) => {
  console.log('Show:', item)
}

const editProduct = (item) => {
  console.log('Edit:', item)
}

const deleteProduct = (item) => {
  console.log('Delete:', item)
}
</script>

<style scoped>
.table-scroll {
  max-height: 500px; /* adjust based on your layout */
  overflow-y: auto;
}
</style>
