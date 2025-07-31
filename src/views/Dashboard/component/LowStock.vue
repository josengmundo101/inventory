<template>
  <v-card class="border-sm rounded-lg" height="100%" color="transparent" flat>
    <v-card-title class="text-h5 my-2 font-weight-bold mb-2">Low Stock Alerts</v-card-title>

    <!-- Scrollable container -->
    <div class="table-scroll">
      <v-table class="custom-table" hover density="comfortable">
        <thead>
          <tr>
            <th class="pa-5">Product</th>
            <th class="pa-5">Stock</th>
            <th class="pa-5">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in lowStock" :key="product.id">
            <td class="pa-5">{{ product.name }}</td>
            <td class="pa-5 text-red font-weight-medium">{{ product.quantity }}</td>
            <td class="pa-5">{{ product.category.name }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup>
const lowStock = [
  { id: 1, name: 'Alcohol Wipes', quantity: 3, category: { name: 'Medical Supplies' } },
  { id: 2, name: 'Bandages', quantity: 5, category: { name: 'First Aid' } },
  { id: 3, name: 'Thermometer', quantity: 2, category: { name: 'Equipment' } },
  { id: 4, name: 'Gloves', quantity: 4, category: { name: 'Protective Gear' } },
  { id: 5, name: 'Masks', quantity: 2, category: { name: 'Protective Gear' } },
  { id: 6, name: 'Eye Protection', quantity: 4, category: { name: 'Protective Gear' } },
]
</script>

<style scoped>
.table-scroll {
  max-height: 300px;
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
