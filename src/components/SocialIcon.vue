<template>
  <svg v-if="name==='github'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.58 1.03 2.67 0 3.85-2.35 4.7-4.58 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
  </svg>

  <svg v-else-if="name==='facebook'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <path d="M13 3h4a1 1 0 0 1 1 1v3h-3a1 1 0 0 0-1 1v3h4l-1 4h-3v7h-4v-7H7v-4h3V8a5 5 0 0 1 5-5Z"/>
  </svg>

  <svg v-else-if="name==='instagram'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.5A2.5 2.5 0 1 0 12 14a2.5 2.5 0 0 0 0-5.5ZM18 6.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
  </svg>

  <svg v-else-if="name==='linkedin'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <path d="M6.94 6.5a2.44 2.44 0 1 1 0-4.88 2.44 2.44 0 0 1 0 4.88ZM2 8.22h4v13.56H2V8.22ZM9.78 8.22h3.84v1.86h.05c.54-1.02 1.87-2.1 3.85-2.1 4.12 0 4.88 2.71 4.88 6.24v7.56h-4V15.4c0-1.32-.03-3.01-1.84-3.01-1.85 0-2.14 1.44-2.14 2.92v6.47h-4V8.22Z"/>
  </svg>

  <!-- NUEVO: mail -->
  <svg v-else-if="name==='mail'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <path d="M3.5 5.5h17a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-17a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z"/>
    <path d="M3 7.5l9 6 9-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <!-- Fallback -->
  <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" :class="cls">
    <circle cx="12" cy="12" r="10" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: 'github' },
  class: { type: String, default: '' }
})
const cls = props.class
</script>
