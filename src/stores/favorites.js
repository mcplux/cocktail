import { defineStore } from 'pinia'
import { ref, watch, onMounted, computed } from 'vue'
import { useDrinksStore } from './drinks'
import { useModalStore } from './modal'
import { useNotificationStore } from './notification'

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore()
  const modalStore = useModalStore()
  const notificationStore = useNotificationStore()

  const favorites = ref([])

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites')) ?? []
  })

  watch(favorites, () => {
    saveLocalStorage()
  }, {
    deep: true,
  })

  function saveLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function existsInFavorites() {
    const favoritesLocalStorage = JSON.parse(localStorage.getItem('favorites')) ?? []

    return favoritesLocalStorage.some(favorite => favorite.idDrink === drinksStore.recipe.idDrink)
  }

  function saveFavorite() {
    favorites.value.push(drinksStore.recipe)

    notificationStore.show = true
    notificationStore.text = 'Added to favorites'

    setTimeout(() => {
      notificationStore.$reset()
    }, 3000);
  
  }

  function deleteFavorite() {
    favorites.value = favorites.value.filter(favorite => favorite.idDrink !== drinksStore.recipe.idDrink)

    notificationStore.show = true
    notificationStore.text = 'Deleted from favorites'

    setTimeout(() => {
      notificationStore.$reset()
    }, 3000);
  
  }

  function handleClickFavorites() {
    if(existsInFavorites()) {
      deleteFavorite()
    } else {
      saveFavorite()
    }
    modalStore.modal = false
  } 

  const noFavorites = computed(() => favorites.value.length === 0)

  return {
    favorites,
    handleClickFavorites,
    existsInFavorites,
    noFavorites,
  }
})
