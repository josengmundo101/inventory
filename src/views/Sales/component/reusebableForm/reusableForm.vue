<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row dense>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="sale.date"
          label="Date *"
          type="date"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="sale.referenceNumber"
          label="Reference Number *"
          placeholder="Enter Reference Number"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          v-model="sale.biller"
          :items="billers"
          label="Biller *"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          v-model="sale.customer"
          :items="customers"
          label="Customer *"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-select
          v-model="sale.orderTax"
          :items="taxRates"
          label="Order Tax *"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="sale.orderDiscount"
          label="Order Discount"
          type="number"
          placeholder="Enter Discount"
          rounded
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="sale.shipping"
          label="Shipping"
          type="number"
          placeholder="Enter Shipping"
          rounded
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-file-input
          v-model="sale.document"
          label="Attach Document"
          accept=".pdf,image/*"
          rounded
          variant="outlined"
          prepend-icon="mdi-paperclip"
        ></v-file-input>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          v-model="sale.salesStatus"
          :items="salesStatuses"
          label="Sales Status *"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          v-model="sale.paymentStatus"
          :items="paymentStatuses"
          label="Payment Status *"
          :rules="[rules.required]"
          required
          rounded
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="sale.salesNote"
          label="Sales Note"
          auto-grow
          rows="2"
          rounded
          variant="outlined"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-card-actions class="justify-start mt-4">
      <v-btn color="green-darken-2" rounded @click="submitForm"> Save Sale </v-btn>
      <v-btn color="red-darken-1" variant="tonal" rounded @click="resetForm"> Reset </v-btn>
    </v-card-actions>
  </v-form>
</template>
<script setup>
import { ref } from 'vue'

const valid = ref(false)
const form = ref(null)

const sale = ref({
  date: '',
  referenceNumber: '',
  biller: '',
  customer: '',
  orderTax: '',
  orderDiscount: '',
  shipping: '',
  document: null,
  salesStatus: '',
  paymentStatus: '',
  salesNote: '',
})

const billers = ['Biller 1', 'Biller 2']
const customers = ['Customer 1', 'Customer 2']
const taxRates = ['5%', '10%', '15%']
const salesStatuses = ['Pending', 'Completed', 'Cancelled']
const paymentStatuses = ['Paid', 'Partial', 'Unpaid']

const rules = {
  required: (value) => !!value || 'Please fill out this field.',
}

function submitForm() {
  form.value?.validate().then((success) => {
    if (success) {
      alert('Sale submitted!')
      console.log(sale.value)
    }
  })
}

function resetForm() {
  form.value?.reset()
  form.value?.resetValidation()
  sale.value = {
    date: '',
    referenceNumber: '',
    biller: '',
    customer: '',
    orderTax: '',
    orderDiscount: '',
    shipping: '',
    document: null,
    salesStatus: '',
    paymentStatus: '',
    salesNote: '',
  }
}
</script>
