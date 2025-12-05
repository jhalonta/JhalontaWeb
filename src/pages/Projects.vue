<template>
  <div class="pt-20 min-h-screen bg-slate-950">
    <section class="container-section py-12 relative">
      <!-- Header -->
      <div class="max-w-3xl mb-12">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Proyectos Dev
        </h2>
        <p class="text-lg text-slate-400 leading-relaxed">
          Explorando la intersección entre lógica creativa y tecnología. 
          Aquí presento una colección de soluciones digitales donde cada línea de código tiene un propósito.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2 mb-12">
        <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="[
            activeFilter === filter
              ? 'bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-400/20'
              : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-transparent hover:border-slate-700'
          ]"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Title for Grid -->
      <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        Todos los Proyectos
      </h3>

      <!-- Projects Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
        />
      </div>

      <!-- Empty State -->
      <div 
        v-if="filteredProjects.length === 0" 
        class="text-center py-20 text-slate-500"
      >
        <p>No se encontraron proyectos en esta categoría.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '@components/ProjectCard.vue'
import { projects } from '@api/data'

const filters = ['Todos', 'Web', 'App Web', 'App Movil', 'Landing']
const activeFilter = ref('Todos')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})
</script>
