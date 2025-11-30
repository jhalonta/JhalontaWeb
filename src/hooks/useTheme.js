import { ref, watchEffect } from 'vue'

const isDark = ref(true)

watchEffect(() => {
  const el = document.documentElement
  if (isDark.value) el.classList.add('dark')
  else el.classList.remove('dark')
})

export function useTheme(){
  return { isDark, toggle: () => isDark.value = !isDark.value }
}
