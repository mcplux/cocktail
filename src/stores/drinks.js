import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import APIService from '../services/APIService'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])
  const search = reactive({
    name: '',
    category: '',
  })

  onMounted(async () => {
    const { data: { drinks } } = await APIService.getCategories()
    categories.value = drinks
  })

  function getRecipes() {
    console.log('Calling API')
  }

  return {
    categories,
    search,
    getRecipes,
  }
})
