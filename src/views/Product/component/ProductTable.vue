<template>
  <v-card class="border-sm" color="transparent" flat>
    <div class="table-scroll">
      <v-table density="comfortable" hover class="custom-table">
        <thead>
          <tr>
            <th class="text-uppercase text-center">Image</th>
            <th class="text-uppercase text-center">Name</th>
            <th class="text-uppercase text-center">Code</th>
            <th class="text-uppercase text-center">Category</th>
            <th class="text-uppercase text-center">Brand</th>
            <th class="text-uppercase text-center">Price</th>
            <th class="text-uppercase text-center">Unit</th>
            <th class="text-uppercase text-center">Quantity</th>
            <th class="text-uppercase text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td class="pa-5 text-center">
              <v-img :src="item.image" max-width="50" height="50" cover></v-img>
            </td>
            <td class="pa-5 text-center">{{ item.name }}</td>
            <td class="pa-5 text-center">{{ item.code }}</td>
            <td class="pa-5 text-center">{{ item.category }}</td>
            <td class="pa-5 text-center">{{ item.brand }}</td>
            <td class="pa-5 text-center">{{ item.price }}</td>
            <td class="pa-5 text-center">{{ item.unit }}</td>
            <td class="pa-5 text-center">{{ item.quantity }}</td>
            <td class="pa-5 text-center">
              <v-btn icon size="small" color="transparent" flat class="rounded-xl"
                ><RouterLink to="products/view"
                  ><v-icon small class="text-primary">mdi-eye</v-icon></RouterLink
                ></v-btn
              >
              <v-btn icon size="small" color="transparent" flat class="rounded-xl"
                ><RouterLink to="products/edit"
                  ><v-icon small class="text-warning">mdi-pencil</v-icon></RouterLink
                ></v-btn
              >
              <v-btn icon size="small" color="transparent" flat class="rounded-xl"
                ><RouterLink>
                  <v-icon small class="text-error">mdi-delete</v-icon></RouterLink
                ></v-btn
              >
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
