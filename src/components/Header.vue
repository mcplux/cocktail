<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useDrinksStore } from '../stores/drinks'
import { useNotificationStore } from '../stores/notification'

const route = useRoute()

const store = useDrinksStore()
const notificationStore = useNotificationStore()

const handleSubmit = () => {
  // Validate
  if(Object.values(store.search).includes('')) {
    notificationStore.$patch({
      text: 'All fields are required',
      show: true,
      error: true,
    })

    setTimeout(() => {
      notificationStore.$reset()
    }, 3000);
    return
  }

  store.getRecipes()
}

const homePage = computed(() => route.name === 'home')
</script>

<template>
  <header class="bg-slate-800" :class="[homePage ? `bg-[url('/img/bg.jpg')] bg-cover bg-center` : '']">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{name: 'home'}">
            <img class="w-32" src="/img/logo.svg" alt="Logo">
          </RouterLink>
        </div>
        <nav class="flex gap-4 text-white">
          <RouterLink :to="{name: 'home'}" class="uppercase font-bold" active-class="text-orange-500">
            Home
          </RouterLink>
          <RouterLink :to="{name: 'favorites'}" class="uppercase font-bold" active-class="text-orange-500">
            Favorites
          </RouterLink>
        </nav>
      </div>

      <form action="" class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" v-if="homePage" @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <label for="ingredient" class="block text-white uppercase font-extrabold text-lg">
            Name or Ingredients
          </label>
          <input 
            type="text"
            id="ingredient"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="e.g. Vodka, Whiskey, etc"
            v-model="store.search.name"
          />
        </div>

        <div class="space-y-4">
          <label for="category" class="block text-white uppercase font-extrabold text-lg">
            Category
          </label>
          <select id="category" class="p-3 w-full rounded-lg focus:outline-none" v-model="store.search.category">
            <option value="" disabled selected>--Select an option--</option>
            <option v-for="category in store.categories" :key="category.strCategory" :value="category.strCategory">
              {{ category.strCategory }}
            </option>
          </select>
        </div>

        <button 
          type="submit" 
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase transition-colors"
        >
          Search recipes
        </button>
      </form>
    </div>
  </header>
</template>
