import { defineStore } from 'pinia'
import { ref, reactive, onMounted } from 'vue'
import APIService from '../services/APIService'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])
  const search = reactive({
    name: '',
    category: '',
  })
  const recipes = ref({})

  onMounted(async () => {
    const { data: { drinks } } = await APIService.getCategories()
    categories.value = drinks
  })

  async function getRecipes() {
    const { data: { drinks } } = await APIService.searchRecipes(search)
    recipes.value = drinks
  }

  async function getDrink(id) {
    const { data: { drinks } } = await APIService.searchRecipe(id)
    console.log(drinks[0])
  }

  return {
    categories,
    search,
    recipes,
    getRecipes,
    getDrink,
  }
})
