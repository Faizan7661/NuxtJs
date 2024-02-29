<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
      <RecipesCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const recipes = ref([])
  
  onMounted(async () => {
    // const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=1605e78e437a40b18d6ea7e4b36a9cde&number=16')
    const data = await response.json()
    recipes.value = data.recipes.map(recipe => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    }))
  })
  </script>
    