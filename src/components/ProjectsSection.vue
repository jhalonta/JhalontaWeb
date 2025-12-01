<template>
  <section id="proyectos" class="container-section py-14">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-3xl font-bold text-white">Proyectos</h2>
      <a href="#" class="group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors">
        Todos los Proyectos
        <span class="transition-transform group-hover:translate-x-1">»</span>
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@components/ProjectCard.vue'
import { projects } from '@api/data'
</script>
