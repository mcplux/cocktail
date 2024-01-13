<script setup>
import { useDrinksStore } from '../stores/drinks'
import Recipe from '../components/Recipe.vue'

const drinksStore = useDrinksStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">
    Recipes
  </h1>

  <p class="my-10 text-center text-2xl" v-if="drinksStore.noRecipes">No results</p>

  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10" v-else>
    <Recipe 
      v-for="recipe in drinksStore.recipes"
      :recipe="recipe"
      :key="recipe.idDrink"
    />
  </div>
</template>
