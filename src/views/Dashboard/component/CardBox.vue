<template>
  <v-card
    class="mx-auto border-sm rounded-lg d-flex flex-column align-center justify-center"
    color="transparent"
    flat
    style="min-height: 220px"
  >
    <v-icon :color="iconColor" size="36">{{ icon }}</v-icon>
    <div class="text-h4 mt-2 font-weight-bold">{{ count }}</div>
    <div class="text-caption text-center">{{ description }}</div>
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
