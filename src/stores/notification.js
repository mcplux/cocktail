import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const text = ref('')
  const error = ref(false)
  const show = ref(false)

  function $reset() {
    text.value = ''
    error.value = false
    show.value = false
  }

  return {
    text,
    error,
    show,
    $reset,
  }
})
