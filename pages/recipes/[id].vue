<template>
  <div class="container mt-32 mx-auto p-4 md:p-0 flex justify-center items-center min-h-screen mb-16 ">
     <Recipe v-if="recipe" :recipe="recipe" />
     <div v-else>Loading...</div>
  </div>
 </template>
 

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
const recipe = ref(null);

onMounted(async () => {
  try {
    const response = await fetch(
      // `https://api.spoonacular.com/recipes/${id}/information?apiKey=1605e78e437a40b18d6ea7e4b36a9cde`
    );
    const data = await response.json();
    recipe.value = {
      title: data.title,
      subtitle: data.subtitle,
      image: data.image,
      description: data.instructions,
      preparationMinutes: data.preparationMinutes,
      cookingMinutes: data.cookingMinutes,  
      aggregateLikes: data.aggregateLikes,
      healthScore: data.healthScore,
      extendedIngredients: data.extendedIngredients,
    };
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.list-disc {
  list-style-type: disc;
}

.text-md {
  font-size: 1rem;
}
</style>
