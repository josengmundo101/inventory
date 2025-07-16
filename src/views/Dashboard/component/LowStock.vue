<template>
  <v-card class="pa-4 rounded-lg" height="100%" flat>
    <v-card-title class="text-red-600 text-subtitle-1 font-weight-bold mb-2">
      Low Stock Alerts
    </v-card-title>

    <v-table density="comfortable">
      <thead>
        <tr>
          <th class="text-left">Product</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Category</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in lowStock" :key="product.id">
          <td>{{ product.name }}</td>
          <td class="text-red font-weight-medium">{{ product.quantity }}</td>
          <td>{{ product.category.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
const lowStock = [
  {
    id: 1,
    name: 'Alcohol Wipes',
    quantity: 3,
    category: { name: 'Medical Supplies' },
  },
  {
    id: 2,
    name: 'Bandages',
    quantity: 5,
    category: { name: 'First Aid' },
  },
  {
    id: 3,
    name: 'Thermometer',
    quantity: 2,
    category: { name: 'Equipment' },
  },
  {
    id: 4,
    name: 'Gloves',
    quantity: 4,
    category: { name: 'Protective Gear' },
  },
  {
    id: 5,
    name: 'Masks',
    quantity: 2,
    category: { name: 'Protective Gear' },
  },

  {
    id: 6,
    name: 'Eye Protection',
    quantity: 4,
    category: { name: 'Protective Gear' },
  },
]
</script>
