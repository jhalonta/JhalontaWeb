<template>
  <section id="proyectos" class="container-section py-14">
    <div class="mb-6 flex items-end justify-between">
      <div>
        <h2 class="text-2xl md:text-3xl font-extrabold">Proyectos</h2>
        <p class="text-white/70">Selección de trabajos recientes.</p>
      </div>
      <a href="#" class="hidden md:inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
        Todos los Proyectos
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
      </a>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@components/ProjectCard.vue'
import { projects } from '@api/data'
</script>
