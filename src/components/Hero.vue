<template>
  <section id="inicio" class="relative overflow-hidden">
    <!-- Fondo del hero -->
    <div
        class="absolute inset-0 -z-10
             bg-[radial-gradient(1000px_600px_at_85%_-10%,rgba(34,197,94,.25),transparent_55%),radial-gradient(700px_500px_at_0%_0%,rgba(56,189,248,.18),transparent_50%)]">
    </div>

    <div class="container-section grid gap-8 py-14 md:grid-cols-2 md:items-center">
      <!-- Lado izquierdo -->
      <div>


        <h1 class="text-4xl/tight md:text-6xl/tight font-extrabold">
          Soy <span class="text-white/90">{{ site.fullName }}</span>,
          <br class="hidden sm:block" />
          <span class="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            {{ site.role }}
          </span>
        </h1>

        <p class="mt-3 text-white/70 max-w-prose">{{ site.bio }}</p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a href="#proyectos" class="btn-primary">Ver Proyectos</a>
          <!-- Abre Gmail Compose con tu correo -->
          <a :href="gmailUrl" target="_blank" rel="noopener" class="btn-ghost">Hablemos</a>
        </div>

        <div class="mt-6 flex items-center gap-4 text-white/70">
          <a
              v-for="(url, key) in site.social"
              :key="key"
              :href="url"
              target="_blank"
              rel="noreferrer"
              class="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
              :aria-label="key"
          >
            <SocialIcon :name="key" class="h-6 w-6" />
          </a>
        </div>
      </div>

      <!-- Lado derecho: Avatar con fade natural + glow detrás -->
      <div class="relative">
        <div
            class="relative z-0 mx-auto md:ml-auto
                 aspect-[4/5]
                 w-56 sm:w-64 md:w-80 lg:w-[26rem] xl:w-[30rem]">

          <!-- Glow sutil detrás -->
          <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-x-[-12%] bottom-[-20%] z-[-1] h-[65%]"
              style="background:
              radial-gradient(60% 85% at 50% 0%,
                rgba(34,197,94,0.16),
                rgba(56,189,248,0.10) 42%,
                rgba(2,6,23,0) 75%); filter: blur(2px);">
          </div>

          <!-- Imagen con máscara de desvanecido de “cola larga” -->
          <img
              :src="avatar"
              :alt="`Foto de ${site.fullName}`"
              class="h-full w-full object-cover object-[50%_86%]"
              :style="[maskStyle, shadowStyle]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '@configs/siteConfig'
import SocialIcon from '@components/SocialIcon.vue'
const avatar = '/profile.png'

/* Gmail compose directo con tu correo */
const gmailUrl = computed(() => {
  const to = encodeURIComponent(site.email || 'jhonalinso.15@gmail.com')
  const su = encodeURIComponent('Hola Jhalonta — desde tu web')
  const body = encodeURIComponent('¡Hola! Me gustaría conversar sobre un proyecto…')
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
})

/* Fade con stops (cola larga) — inline para evitar problemas de <style> */
const fadeStart = computed(() => {
  if (typeof window === 'undefined') return 0.70
  if (window.innerWidth < 768) return 0.64
  if (window.innerWidth >= 1280) return 0.72
  return 0.70
})
const gradient = computed(() => {
  const s = Math.round(fadeStart.value * 100)
  return `linear-gradient(to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) ${s}%,
    rgba(0,0,0,.95) ${s+6}%,
    rgba(0,0,0,.75) ${s+14}%,
    rgba(0,0,0,.45) ${s+22}%,
    rgba(0,0,0,.18) ${s+28}%,
    rgba(0,0,0,0) 100%)`
})
const maskStyle = computed(() => ({
  maskImage: gradient.value,
  WebkitMaskImage: gradient.value
}))
const shadowStyle = { filter: 'drop-shadow(0 10px 28px rgba(0,0,0,.35))' }
</script>
