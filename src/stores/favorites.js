import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'
import { useDrinksStore } from './drinks'

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore()

  const favorites = ref([])

  watch(favorites, () => {
    saveLocalStorage()
  }, {
    deep: true,
  })

  const saveLocalStorage = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  const handleClickFavorites = () => {
    favorites.value.push(drinksStore.recipe)
  } 

  return {
    favorites,
    handleClickFavorites,
  }
})
