<script setup>
import CardGreeting from './component/CardGreeting.vue'
import CardBox from './component/CardBox.vue'
import LowStock from './component/LowStock.vue'
import GraphChart from './component/GraphChart.vue'
</script>

<template>
  <v-container fluid class="px-15">
    <!-- Top Section: Greeting + 2 Stat Cards -->
    <v-row dense>
      <!-- Greeting Message -->
      <v-col cols="12" md="7">
        <CardGreeting />
      </v-col>

      <!-- Top Stats -->
      <v-col cols="12" md="5">
        <v-row dense>
          <v-col cols="4">
            <CardBox flat icon="mdi-sale" iconColor="red" count="1290" description="Total Sales" />
          </v-col>
          <v-col cols="4">
            <CardBox
              flat
              icon="mdi-package"
              iconColor="primary"
              count="150"
              description="Number of Products"
            />
          </v-col>
          <v-col cols="4">
            <CardBox
              flat
              icon="mdi-account-group"
              iconColor="red"
              count="1290"
              description="Number of Customer"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Middle Section: Stat Cards + Donut Chart -->
    <v-row class="mt-6" dense no-gutter>
      <v-col cols="12" md="6">
        <LowStock />
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4" height="100%" flat>
          <div class="text-h5 font-weight-bold mb-2">Incidents Per Type</div>
          <GraphChart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
