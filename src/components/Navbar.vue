<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur">
    <div class="container-section flex h-14 items-center justify-between">
      <!-- Logo -->
      <a href="#inicio" class="flex items-center gap-2 font-extrabold tracking-tight"
         @click.prevent="go('#inicio')">
        <img src="/logo.png" alt="Logo" class="h-12 w-12 rounded-lg object-cover" />
        <span class="text-white/90">{{ site.name }}</span>
      </a>

      <!-- Toggle móvil -->
      <button class="md:hidden" @click="open = !open" aria-label="menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Menú desktop -->
      <nav class="hidden md:flex items-center gap-6 text-white/80">
        <a v-for="l in links" :key="l.hash" :href="l.hash" class="hover:text-white" @click.prevent="go(l.hash)">
          {{ l.label }}
        </a>
        <a href="/proyectos" @click.prevent="toProyectos" class="hover:text-white">Proyectos</a>
        <!-- Contacto ahora es ruta /contacto -->
        <a href="/contacto" @click.prevent="toContacto" class="btn-ghost text-sm">Contacto</a>
        <a href="/cv.pdf" download="CV_Jhalonta.pdf" class="hover:text-white">Resumen</a>
      </nav>
    </div>

    <!-- Drawer móvil -->
    <div v-if="open" class="md:hidden border-t border-white/10 bg-slate-900/90">
      <div class="container-section py-3 grid gap-2 text-white/80">
        <a v-for="l in links" :key="l.hash+'m'" :href="l.hash" class="py-2" @click.prevent="goAndClose(l.hash)">
          {{ l.label }}
        </a>
        <a href="/proyectos" class="py-2" @click.prevent="toProyectos">Proyectos</a>
        <a href="/contacto" class="py-2" @click.prevent="toContacto">Contacto</a>
        <a href="/cv.pdf" download="CV_Jhalonta.pdf" class="py-2">Resumen</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick, watch, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { site } from '@configs/siteConfig'

const open = ref(false)
const router = useRouter()
const route  = useRoute()

const links = [
  { label: 'Inicio',     hash: '#inicio' },
]

/* Close menu on scroll */
const closeOnScroll = () => {
  open.value = false
}

watch(open, (val) => {
  if (val) {
    // Small delay to prevent immediate closing if there's residual interaction
    setTimeout(() => {
      window.addEventListener('scroll', closeOnScroll, { passive: true })
    }, 100)
  } else {
    window.removeEventListener('scroll', closeOnScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', closeOnScroll)
})

const NAV_OFFSET = 72
function scrollToHash(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top: y, behavior: 'smooth' })
}
async function go(hash) {
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
    requestAnimationFrame(() => scrollToHash(hash))
  } else {
    scrollToHash(hash)
  }
}
function goAndClose(hash){ open.value = false; go(hash) }
function toContacto(){ open.value = false; router.push('/contacto') }
function toProyectos(){ open.value = false; router.push('/proyectos') }
</script>
