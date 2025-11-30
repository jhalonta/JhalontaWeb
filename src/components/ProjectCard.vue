<template>
  <article class="card group overflow-hidden">
    <div class="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-slate-800">
      <img v-if="project.image" :src="project.image" :alt="project.title" class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
      <div v-else class="absolute inset-0 bg-[radial-gradient(70%_70%_at_30%_20%,rgba(34,197,94,.35),transparent_55%)]"></div>
      <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10"></div>
    </div>
    <div class="mt-3 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <h3 class="font-bold text-white/90">{{ project.title }}</h3>
        <div class="text-xs text-white/50">{{ project.stack }}</div>
      </div>
      <p class="text-sm text-white/70 line-clamp-2">{{ project.description }}</p>
      <div class="mt-3 flex items-center gap-2">
        <a v-if="project.repo" :href="project.repo" target="_blank" class="pill">Código</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="pill">Demo</a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>
