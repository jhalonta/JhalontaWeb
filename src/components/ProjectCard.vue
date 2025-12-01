<template>
  <article class="group relative flex flex-col overflow-hidden rounded-2xl bg-[#1A1F29] border border-white/5 transition-all hover:border-white/10">
    <!-- Imagen superior -->
    <div class="relative aspect-video w-full overflow-hidden bg-slate-800">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div v-else class="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
    </div>

    <!-- Contenido inferior -->
    <div class="flex flex-1 gap-4 p-5">
      <!-- Botón Github (Izquierda) -->
      <a
        v-if="project.repo"
        :href="project.repo"
        target="_blank"
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
        aria-label="Ver código"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>

      <!-- Texto (Derecha) -->
      <div class="flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white">{{ project.title }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-white/60 line-clamp-2">
            {{ project.description }}
          </p>
        </div>
        
        <div class="mt-3 text-xs font-medium tracking-wide text-white/40 uppercase">
          {{ project.stack }}
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>
