<template>
  <main class="container-section py-16 md:py-20">
    <!-- Encabezado centrado -->
    <h1 class="text-3xl md:text-4xl font-extrabold text-center">Hablemos</h1>
    <p class="mt-2 text-white/70 text-center max-w-2xl mx-auto">
      Cuéntame tu proyecto y te respondo hoy mismo.
    </p>

    <!-- Card centrada: mismo ancho, más ALTA -->
    <form
        @submit.prevent="submit"
        class="mx-auto mt-8 w-full max-w-xl min-w-[320px]
             rounded-2xl border border-white/10 bg-white/[0.04]
             p-6 md:p-8 space-y-6"
    >
      <div class="grid gap-6 md:grid-cols-2">
        <input
            v-model.trim="form.nombre"
            placeholder="Nombre"
            autocomplete="name"
            required
            class="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4
                 outline-none focus:ring-2 focus:ring-emerald-400/40" />

        <input
            v-model.trim="form.email"
            type="email"
            placeholder="Email"
            autocomplete="email"
            required
            class="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4
                 outline-none focus:ring-2 focus:ring-emerald-400/40" />
      </div>

      <input
          v-model.trim="form.empresa"
          placeholder="Empresa (opcional)"
          autocomplete="organization"
          class="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4
               outline-none focus:ring-2 focus:ring-emerald-400/40" />

      <textarea
          v-model.trim="form.mensaje"
          rows="7"
          required
          placeholder="Cuéntame tu idea"
          class="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-4
               outline-none focus:ring-2 focus:ring-emerald-400/40
               min-h-[220px] max-h-[480px] resize-y overflow-auto leading-relaxed"></textarea>

      <!-- Botón verde, un poco más alto -->
      <button type="submit" class="btn-primary w-full py-3.5">Enviar</button>

      <p v-if="sent" class="text-emerald-400 text-center pt-1">
        ¡Gracias! Abrí WhatsApp con tu mensaje.
      </p>
    </form>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { site } from '@configs/siteConfig'

const form = reactive({ nombre: '', email: '', empresa: '', mensaje: '' })
const sent = ref(false)

/* Tu WhatsApp (ej: 51922596820 en site.whatsapp). */
const phone = computed(() =>
    String(site.whatsapp || '51922596820').replace(/[^0-9]/g, '')
)

function submit () {
  const nombre  = form.nombre  || '—'
  const email   = form.email   || '—'
  const empresa = form.empresa ? `\nEmpresa: ${form.empresa}` : ''
  const mensaje = form.mensaje || '—'

  const msg =
      `Hola ${site.fullName || 'Jhalonta'}, te escribo desde tu web.\n\n` +
      `Nombre: ${nombre}\nEmail: ${email}${empresa}\n\n` +
      `Mensaje:\n${mensaje}`

  const url = `https://wa.me/${phone.value}?text=${encodeURIComponent(msg)}`
  window.open(url, '_blank')

  sent.value = true
  form.nombre = ''
  form.email = ''
  form.empresa = ''
  form.mensaje = ''
  setTimeout(() => (sent.value = false), 3000)
}
</script>
