<script setup>
const props = defineProps({
  drawer: Boolean,
})
const emit = defineEmits(['update:drawer'])
</script>

<template>
  <v-app-bar flat color="white" app class="px-4">
    <!-- Logo on the left -->
    <v-app-bar-nav-icon @click.stop="emit('update:drawer', !props.drawer)" />

    <!-- Spacer -->
    <v-spacer />

    <!-- Profile Dropdown -->
    <v-menu offset-y>
      <template #activator="{ props }">
        <v-avatar v-bind="props" size="40">
          <v-img src="https://i.pravatar.cc/300" alt="User Avatar" />
        </v-avatar>
      </template>
      <v-list>
        <v-btn color="danger" dark> Logout </v-btn>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
