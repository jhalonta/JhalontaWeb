<template>
  <section id="habilidades" class="container-section py-14">
    <h2 class="text-2xl md:text-3xl font-extrabold">Habilidades</h2>

    <div class="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <article
          v-for="s in skills"
          :key="s.name"
          class="group flex items-center gap-3 rounded-xl border border-white/10
               bg-white/[0.03] px-3 py-3 transition hover:bg-white/[0.06]"
      >
        <!-- Icono real (Devicon) con color oficial -->
        <i :class="[s.icon, 'text-3xl']" aria-hidden="true"></i>
        <span class="font-medium text-white/90">{{ s.name }}</span>
      </article>
    </div>
  </section>
</template>

<script setup>
import { skills } from '@api/data'
</script>
