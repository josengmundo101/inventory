<script setup>
import CardGreeting from './component/CardGreeting.vue'
import CardBox from './component/CardBox.vue'
// You can import a donut chart component here later
// import DonutChart from './component/DonutChart.vue'
</script>

<template>
  <v-container fluid class="pa-6">
    <!-- Top Section: Greeting + 2 Stat Cards -->
    <v-row>
      <!-- Greeting Message -->
      <v-col cols="12" md="8">
        <CardGreeting />
      </v-col>

      <!-- Top Stats -->
      <v-col cols="12" md="4">
        <v-row>
          <v-col cols="6">
            <CardBox
              icon="mdi-account-group"
              iconColor="primary"
              count="26063"
              description="Total Parents"
            />
          </v-col>
          <v-col cols="6">
            <CardBox
              icon="mdi-account-tie"
              iconColor="red"
              count="1290"
              description="Total Lawyers"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Middle Section: Stat Cards + Donut Chart -->
    <v-row class="mt-6">
      <!-- 6 Stat Cards -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="6" md="4">
            <CardBox icon="mdi-chart-bar" iconColor="blue" count="36175" description="Incidents" />
          </v-col>
          <v-col cols="6" md="4">
            <CardBox icon="mdi-alert" iconColor="purple" count="729" description="Litigations" />
          </v-col>
          <v-col cols="6" md="4">
            <CardBox
              icon="mdi-account-alert"
              iconColor="orange"
              count="60817"
              description="Cases"
            />
          </v-col>
          <v-col cols="6" md="4">
            <CardBox icon="mdi-calendar" iconColor="teal" count="159267" description="Events" />
          </v-col>
          <v-col cols="6" md="4">
            <CardBox
              icon="mdi-file-document"
              iconColor="green"
              count="2137"
              description="Reports"
            />
          </v-col>
          <v-col cols="6" md="4">
            <CardBox
              icon="mdi-briefcase-check"
              iconColor="indigo"
              count="31525"
              description="Resolved"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- Donut Chart Placeholder -->
    </v-row>
  </v-container>
</template>
