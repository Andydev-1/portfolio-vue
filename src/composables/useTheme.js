import { ref, watch } from 'vue'

const isDark = ref(true)

const setClasses = (dark) => {
  const html = document.documentElement
  const body = document.body
  const app = document.getElementById('app')

  const add = dark ? 'dark' : 'light'
  const remove = dark ? 'light' : 'dark'

  html.classList.add(add)
  html.classList.remove(remove)

  body && body.classList.add(add)
  body && body.classList.remove(remove)

  app && app.classList.add(add)
  app && app.classList.remove(remove)
}

const applyTheme = (dark) => {
  setClasses(dark)
}

const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
if (savedTheme) {
  isDark.value = savedTheme === 'dark'
}

if (typeof window !== 'undefined') {
  applyTheme(isDark.value)
}

watch(isDark, (newValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    applyTheme(newValue)
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme(isDark.value)
  }
}

export function useTheme() {
  return { isDark, toggleTheme }
}
