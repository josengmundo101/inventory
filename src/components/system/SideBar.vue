<template>
  <v-navigation-drawer
    color="grey-lighten-4"
    v-model="drawerLocal"
    @update:modelValue="emit('update:drawer', $event)"
    app
  >
    <div class="logo d-flex justify-center align-center">
      <img :src="logo" alt="Logo" width="150" />
    </div>

    <v-list>
      <!-- Main Items -->
      <v-list-item
        v-for="item in filteredMenuItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
        :class="{ 'active-link': $route.path === item.to }"
      >
        {{ item.title }}
      </v-list-item>

      <!-- Grouped Dropdown -->
      <v-list-group v-if="groupedMenu" prepend-icon="mdi-folder" value="true">
        <template #activator="{ props }">
          <v-list-item v-bind="props" title="People"></v-list-item>
        </template>

        <v-list-item
          v-for="child in groupedMenu.children"
          :key="child.title"
          :to="child.to"
          :title="child.title"
          :prepend-icon="child.icon"
          :class="{ 'active-link': $route.path === child.to }"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import logo from '@/assets/images/logo.png'

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/admin/dashboard' },
  { title: 'Products', icon: 'mdi-package', to: '/admin/products' },
  { title: 'Categories', icon: 'mdi-credit-card', to: '/admin/categories' },
  { title: 'Sales', icon: 'mdi-chart-bar', to: '/admin/sales' },
  { title: 'Report', icon: 'mdi-file-chart', to: '/admin/report' },
  { title: 'Settings', icon: 'mdi-cog', to: '/admin/settings' },
]

const filteredMenuItems = computed(() => menuItems.filter((item) => !item.children))

// Grouped submenu
const groupedMenu = {
  title: 'People',
  icon: 'mdi-group-people',
  children: [
    { title: 'Suppliers', icon: 'mdi-truck', to: '/admin/supplier' },
    { title: 'Customers', icon: 'mdi-account-multiple', to: '/admin/customers' },
    { title: 'Users', icon: 'mdi-account', to: '/admin/users' },
  ],
}

const props = defineProps({
  drawer: Boolean,
})
const emit = defineEmits(['update:drawer'])

// Local drawer state to avoid mutating prop directly
const drawerLocal = ref(props.drawer)

watch(
  () => props.drawer,
  (val) => {
    drawerLocal.value = val
  },
)
</script>

<style scoped>
.active-link {
  background-color: #90085d !important;
  border-radius: 15px !important;
  color: white !important;
}
</style>
