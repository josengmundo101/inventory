<template>
  <v-container class="container" fluid>
    <v-card class="card mx-auto pa-12" elevation="15" width="500">
      <v-card-item class="text-center">
        <img :src="logo" alt="" width="150" class="mt-5" />
        <v-card-title class="text-h4 font-weight-bold"> Welcome Back </v-card-title>

        <v-card-subtitle>
          Please enter you Account
          <RouterLink to="/register" />
        </v-card-subtitle>
      </v-card-item>

      <LoginForm />
    </v-card>
  </v-container>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
import LoginForm from '@/components/LoginForm.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* horizontal centering */
  align-items: center; /* vertical centering */
  width: 100vw;
  height: 100vh;
}

a {
  text-decoration: none;
}
</style>
