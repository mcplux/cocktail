import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])

  return {
    categories,
  }
})
