<script setup>
defineProps({
  recipe: {
    type: Object,
  }
})
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img 
        :src="recipe.strDrinkThumb" 
        :alt="recipe.strDrink"
        class="hover:scale-105 transition-transform hover:rotate-2" 
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ recipe.strDrink }}</h2>
      <button type="button" class="bg-orange-400 hover:bg-orange-500 transition-colors mt-5 w-full p-3 font-bold text-white text-lg">
        See recipe
      </button>
    </div>
  </div>
</template>
