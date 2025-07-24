<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row dense>
      <!-- IMAGE INPUT -->
      <v-col cols="12">
        <v-file-input
          v-model="product.image"
          label="Upload Image"
          prepend-icon="mdi-image"
          accept="image/*"
          show-size
          chips
          rounded
          variant="outlined"
        ></v-file-input>
      </v-col>

      <!-- NAME -->
      <v-col cols="12">
        <v-text-field
          v-model="product.name"
          label="Product Name *"
          placeholder="e.g. Classic Cream"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          rounded
        />
      </v-col>

      <!-- CATEGORY -->
      <v-col cols="12">
        <v-select
          v-model="product.category"
          :items="categories"
          label="Category *"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          rounded
        ></v-select>
      </v-col>

      <!-- CODE -->
      <v-col cols="12">
        <v-text-field
          v-model="product.code"
          label="Product Code *"
          placeholder="e.g. CRT-1234"
          :rules="[rules.required]"
          variant="outlined"
          clearable
          rounded
        />
      </v-col>
    </v-row>

    <!-- BUTTONS -->
    <v-card-actions class="justify-start mt-4">
      <v-btn color="green-darken-2" class="ml-2" @click="submitForm" rounded> Save Product </v-btn>
      <v-btn color="red-darken-1" variant="tonal" @click="resetForm" rounded> Reset </v-btn>
    </v-card-actions>
  </v-form>
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

const categories = ['Beauty', 'Electronics', 'Grocery']

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
