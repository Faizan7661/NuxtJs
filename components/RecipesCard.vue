<template>
  <div class="flex justify-center">
    <div class="max-w-sm">
      <div class="shadow-lg rounded overflow-hidden">
        <img class="w-full" :src="recipe.image" :alt="recipe.title">
        <div class="bg-white p-4">
          <p class="font-light text-xl italic font-gray-800 overflow-hidden text-overflow-ellipsis" style="height: 50px;">{{ recipe.title }}</p>
          <nuxt-link :to="`/recipes/${recipe.id}`" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block w-full text-center">View Recipe</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  recipe: Object,
})
</script>
