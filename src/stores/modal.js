import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useFavoritesStore } from './favorites'
import { useDrinksStore } from './drinks'

export const useModalStore = defineStore('modal', () => {
  const favoritesStore = useFavoritesStore()
  const drinksStore = useDrinksStore()

  const modal = ref(false)

  function handleClickModal() {
    modal.value = !modal.value
  }

  const buttonText = computed(() => favoritesStore.existsInFavorites(drinksStore.recipe.idDrink) ? "Delete from favorites" : "Add to favorites")

  return {
    modal,
    handleClickModal,
    buttonText,
  }
})
