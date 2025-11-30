<template>
  <footer class="border-t border-white/10 py-10 text-white/70">
    <div class="container-section flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-sky-400"></span>
        <span>© {{ year }} {{ site.name }}. Todos los derechos reservados.</span>
      </div>

      <nav class="flex items-center gap-3">
        <a
            v-for="[key, url] in socialLinks"
            :key="key"
            :href="url"
            target="_blank"
            rel="noreferrer"
            class="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            :aria-label="key"
        >
          <SocialIcon :name="key" class="h-4 w-4" />
        </a>

        <!-- Gmail Compose con tu correo -->
        <a
            :href="gmailUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            aria-label="gmail"
        >
          <SocialIcon name="mail" class="h-4 w-4" />
        </a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { site } from '@configs/siteConfig'
import SocialIcon from '@components/SocialIcon.vue'

const year = new Date().getFullYear()
const socialLinks = computed(() =>
    Object.entries(site.social).filter(([, url]) => !!url)
)

const gmailUrl = computed(() => {
  const to = encodeURIComponent(site.email || 'jhonalinso.15@gmail.com')
  const su = encodeURIComponent('Hola Jhalonta — desde tu web')
  const body = encodeURIComponent('¡Hola! Me gustaría conversar sobre un proyecto…')
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`
})
</script>
