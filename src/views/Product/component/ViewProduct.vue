<template>
  <v-container fluid class="px-15">
    <div class="d-flex justify-space-between align-center flex-wrap">
      <!-- Left side: Title and breadcrumbs -->
      <div>
        <h1>Product Details</h1>
        <p class="text-subtitle-1">
          <RouterLink><span class="text-primary">Dashboard</span></RouterLink> / Product Details
        </p>
      </div>

      <!-- Right side: Print button -->
      <v-btn class="mt-3 mt-md-0" color="primary"> Print <v-icon icon="mdi-package" end /> </v-btn>
    </div>

    <v-divider class="my-2 mr-2" color="grey-darken-4" />

    <v-card class="mt-5 pa-12" flat>
      <v-row>
        <!-- Product Image -->
        <v-col cols="12" md="4">
          <v-img
            :src="product.image"
            alt="Product Image"
            aspect-ratio="1"
            class="rounded-lg"
            cover
          />
        </v-col>

        <!-- Product Info Table -->
        <v-col cols="12" md="8">
          <v-table density="compact">
            <tbody>
              <tr v-for="(value, label) in productDetails" :key="label">
                <td class="font-weight-medium text-grey-darken-1">{{ label }}</td>
                <td>
                  <v-chip
                    v-if="label === 'Stock Alert'"
                    color="teal"
                    variant="outlined"
                    size="small"
                    class="px-3"
                  >
                    {{ value }}
                  </v-chip>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-col class="d-flex justify-end mt-4"
        ><v-btn flat icon size="40" class="b-btn rounded-circle"
          ><RouterLink to="/admin/products"
            ><v-icon start icon="mdi-arrow-left" /></RouterLink></v-btn
      ></v-col>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive } from 'vue'

const product = reactive({
  image:
    'https://images.unsplash.com/photo-1611175694985-fc397de7ca98?auto=format&fit=crop&w=500&q=80',
  type: 'Single',
  code: '3214578',
  name: 'Camera',
  category: 'Electronics',
  brand: 'Nikon',
  price: '$120.00',
  cost: '$150.00',
  unit: 'pc',
  tax: '2.5%',
  stockAlert: 20,
  stock: 50,
  quantity: 100,
})

// Convert to label-value format for table rendering
const productDetails = {
  Type: product.type,
  'Product Code': product.code,
  'Product name': product.name,
  Category: product.category,
  Brand: product.brand,
  Price: product.price,
  Cost: product.cost,
  Unit: product.unit,
  Tax: product.tax,
  'Stock Alert': product.stockAlert,
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #686767;
}

td {
  padding: 12px 16px !important;
  vertical-align: middle !important;
}

.b-btn {
  transition: transform 0.15s ease-in-out;
}

.b-btn:hover {
  transform: scale(1.5, 1.5);
}
</style>
