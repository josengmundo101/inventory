<template>
  <v-card class="border-sm" color="transparent" flat>
    <div class="table-scroll">
      <v-table density="comfortable" hover class="custom-table">
        <thead>
          <tr>
            <th class="text-uppercase text-center">Date</th>
            <th class="text-uppercase text-center">Customer</th>
            <th class="text-uppercase text-center">Total</th>
            <th class="text-uppercase text-center">Paid</th>
            <th class="text-uppercase text-center">Status</th>
            <th class="text-uppercase text-center">Biller</th>
            <th class="text-uppercase text-center">Tax</th>

            <th class="text-uppercase text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in products" :key="index">
            <td class="pa-5 text-center">{{ item.date }}</td>
            <td class="pa-5 text-center">{{ item.customer }}</td>
            <td class="pa-5 text-center">{{ item.total }}</td>
            <td class="pa-5 text-center">{{ item.paid }}</td>
            <td class="pa-5 text-center">{{ item.status }}</td>
            <td class="pa-5 text-center">{{ item.biller }}</td>
            <td class="pa-5 text-center">{{ item.tax }}</td>

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
    date: '2025-07-01',
    customer: 'Ricky Bobby',
    total: 38.5,
    paid: 38.5,
    status: 'Paid',
    biller: 'Bobby',
    tax: 2,
  },
  {
    date: '2025-7-01',
    customer: 'Liling Antot',
    total: 40.5,
    paid: 40.5,
    status: 'Paid',
    biller: 'Antot',
    tax: 1,
  },
  {
    date: '2025-07-02',
    customer: 'Kalor Anora',
    total: 100,
    paid: 50,
    status: 'Not Paid',
    biller: 'Anora',
    tax: 1,
  },
  {
    date: '2025-07-02',
    customer: 'Jolo Quinte',
    total: 150,
    paid: 100,
    status: 'Not Paid',
    biller: 'Quinte',
    tax: 1,
  },
  {
    date: '2025-07-03',
    customer: 'Raquel Esparago',
    total: 55,
    paid: 55,
    status: 'Paid',
    biller: 'Esparago',
    tax: 1,
  },
  {
    date: '2025-07-03',
    customer: 'Abigail Esparago',
    total: 100,
    paid: 55,
    status: 'Not Paid',
    biller: 'Abigail',
    tax: 1,
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
