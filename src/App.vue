<template>
  <!-- Layout raíz: ocupa 100vh y usa flex en columna -->
  <div class="min-h-screen flex flex-col bg-slate-950">
    <Navbar />

    <!-- El main crece para empujar el footer al fondo -->
    <main class="flex-1">
      <RouterView />
    </main>

    <!-- Footer siempre al fondo -->
    <SiteFooter />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
