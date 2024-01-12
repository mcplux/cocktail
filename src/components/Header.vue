<script setup>

</script>

<template>
  <header>
    <div class="mx-auto container px-5 py-16">
      <div class=""></div>

      <form action="" class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
        <div class="space-y-4">
          <label for="ingredient" class="block text-white uppercase font-extrabold text-lg">
            Name or Ingredients
          </label>
          <input 
            type="text"
            id="ingredient"
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="e.g. Vodka, Whiskey, etc"
          />
        </div>

        <div class="space-y-4">
          <label for="category" class="block text-white uppercase font-extrabold text-lg">
            Category
          </label>
          <select id="category" class="p-3 w-full rounded-lg focus:outline-none">
            <option value="" disabled selected>--Select an option--</option>
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
