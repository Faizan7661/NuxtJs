<template>
    <div class="recipe-card shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto ">
      <!-- Title Section -->
      <div class="w-full bg-black text-white text-center p-4">
        <br>
         <h1 class="text-xl font-bold mb-4">Name of Recipe: {{ recipe.title }}</h1>
         <hr class="border-black my-4">
       </div>
       <!-- Image Section -->
       <div class="bg-cover bg-center border w-full h-10 md:h-auto relative">
         <img class="w-full h-full object-cover" :src="recipe.image" :alt="recipe.title">
       </div>
   
       <!-- Ingredients Section -->
       <div class="w-full bg-orange-400  p-4">
         <h3 class="text-xl font-bold mb-4">Ingredients:</h3>
         <ul class="list-disc pl-4">
           <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
             {{ ingredient.original }}
           </li>
         </ul>
         <hr class="border-black my-4">
       </div>
   
       <!-- Instructions Section -->
       <div class="w-full bg-yellow-300 p-4">
         <h3 class="text-xl font-bold mb-4">Instructions:</h3>
         <div v-html="recipe.description" class="text-md"></div>
         <hr class="border-black my-4">
       </div>
   
       <!-- Extra Details Section -->
       <div class="w-full bg-blue-400 p-4">
         <h3 class="text-xl font-bold mb-4">Extra Details:</h3>
         <div class="flex justify-between">
           <div class="flex flex-col">
             <p><strong>Preparation Time:</strong> {{ recipe.preparationMinutes }} minutes</p>
             <p><strong>Cooking Time:</strong> {{ recipe.cookingMinutes }} minutes</p>
           </div>
           <div class="flex flex-col">
             <p><strong>Aggregate Likes:</strong> {{ recipe.aggregateLikes }}</p>
             <p><strong>Health Score:</strong> {{ recipe.healthScore }}</p>
           </div>
         </div>
         <hr class="border-black my-4">
       </div>
    </div>
   </template>
   
   <script>
   export default {
    props: {
       recipe: {
         type: Object,
         required: true
       }
    }
   }
   </script>
   
   <style scoped>
   .recipe-card {
    max-width: 1200px;
   }
   
   .list-disc {
    list-style-type: disc;
   }
   
   .text-md {
    font-size: 1rem;
   }
   </style>
   