<template>
  <v-card class="mx-auto my-8 d-flex flex-column align-center justify-center" height="200">
    <v-icon :color="iconColor" size="36">{{ icon }}</v-icon>
    <div class="text-h4 mt-2 font-weight-bold">{{ count }}</div>
    <div class="text-caption">{{ description }}</div>
  </v-card>
</template>

<script setup>
defineProps({
  icon: String,
  iconColor: {
    type: String,
    default: 'primary',
  },
  count: [Number, String],
  description: String,
})
</script>
