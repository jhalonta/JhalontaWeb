<template>
  <section id="proyectos" class="container-section py-14">
    <div class="mb-8 flex items-center justify-between">
      <h2 class="text-3xl font-bold text-white">Proyectos</h2>
      <a 
        href="/proyectos" 
        @click.prevent="router.push('/proyectos')"
        class="group flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors"
      >
        Todos los Proyectos
        <span class="transition-transform group-hover:translate-x-1">»</span>
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- Show 4 projects -->
      <ProjectCard v-for="p in projects.slice(0, 4)" :key="p.id" :project="p" />
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProjectCard from '@components/ProjectCard.vue'
import { projects } from '@api/data'

const router = useRouter()
</script>
