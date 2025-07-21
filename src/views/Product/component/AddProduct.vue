<template>
  <v-container class="px-15" fluid flat>
    <v-card class="pa-4" flat>
      <div class="mb-5 d-flex justify-space-between align-center">
        <v-card-title class="text-h4 font-weight-bold">Add Product</v-card-title>
        <RouterLink to="/admin/products"
          ><v-btn color="primary" class="mx-5"> Back </v-btn></RouterLink
        >
      </div>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row dense>
            <v-col cols="12">
              <v-select
                v-model="product.productType"
                :items="productTypes"
                label="Product Type *"
                :rules="[rules.required]"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="product.category"
                :items="categories"
                label="Category *"
                :rules="[rules.required]"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.name"
                label="Name *"
                placeholder="Enter Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.code"
                label="Code *"
                placeholder="Enter Code"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="product.barcode"
                :items="barcodes"
                label="Barcode Symbology *"
                :rules="[rules.required]"
                required
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.cost"
                label="Cost *"
                type="number"
                placeholder="Enter Cost"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="product.price"
                label="Price *"
                type="number"
                placeholder="Enter Price"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="product.taxMethod"
                :items="taxMethods"
                label="Tax Method *"
                :rules="[rules.required]"
                required
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="product.quantity"
                label="Quantity *"
                type="number"
                placeholder="Enter Quantity"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-file-input
                v-model="product.image"
                label="Image"
                accept="image/*"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="product.description"
                label="Description / Product Details"
                auto-grow
                rows="2"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-btn color="green-darken-1" class="mt-4" @click="submitForm"> Save Product </v-btn>
          <v-btn color="red" class="mt-4 mx-2" @click="resetForm"> Reset </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(false)
const form = ref(null)

const product = ref({
  productType: 'Standard',
  name: '',
  code: '',
  barcode: 'CREM01',
  category: 'Beauty',
  cost: '',
  price: '',
  taxMethod: 'Exclusive',
  quantity: '',
  image: null,
  description: '',
})

const productTypes = ['Standard', 'Digital', 'Service']
const barcodes = ['CREM01', 'EAN-13', 'UPC']
const categories = ['Beauty', 'Electronics', 'Grocery']
const taxMethods = ['Exclusive', 'Inclusive']

const rules = {
  required: (value) => !!value || 'Please fill out this field.',
}

function submitForm() {
  form.value?.validate().then((success) => {
    if (success) {
      alert('Form submitted!')
      console.log(product.value)
      // You can emit, post or store `product.value` here
    }
  })
}

function resetForm() {
  form.value?.reset() // reset validation
  form.value?.resetValidation() // reset field errors

  product.value = {
    productType: 'Standard',
    name: '',
    code: '',
    barcode: 'CREM01',
    category: 'Beauty',
    cost: '',
    price: '',
    taxMethod: 'Exclusive',
    quantity: '',
    image: null,
    description: '',
  }
}
</script>
