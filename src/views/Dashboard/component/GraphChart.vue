<template>
  <div>
    <Line :data="chartData" :options="chartOptions" flat />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

// 🧪 Dummy sales data for top 3 products over time (e.g., months)
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Gasolina',
      data: [120, 132, 101, 134, 90, 230, 210],
      borderColor: '#42A5F5',
      backgroundColor: '#42A5F5',
      fill: false,
      tension: 0.3,
    },
    {
      label: 'Inun-onan',
      data: [100, 115, 98, 121, 89, 200, 180],
      borderColor: '#66BB6A',
      backgroundColor: '#66BB6A',
      fill: false,
      tension: 0.3,
    },
    {
      label: 'Wipes',
      data: [80, 95, 90, 105, 87, 150, 160],
      borderColor: '#FFA726',
      backgroundColor: '#FFA726',
      fill: false,
      tension: 0.3,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Top Sales Products (Monthly)',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 50,
      },
    },
  },
}
</script>

<style scoped>
div {
  height: 320px;
}
</style>
