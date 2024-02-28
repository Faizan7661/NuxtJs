<template>
  <section class="flex flex-wrap items-center justify-center" id="home">
    <div class="flex-1 flex-shrink-0 w-96 p-20">
      <img class="w-full" src="../assets/images/home-img.png" alt="" />
    </div>

    <div class="content flex-1 flex-shrink-0 w-130 pr-14">
      <h3 class="text-5xl text-black">Find Ingredients for Your Meal!</h3>
      <div class="mt-8">
        <form @submit.prevent="searchRecipes">
          <div class="flex mt-3">
            <input
              type="text"
              class="flex-grow px-4 py-2 text-base text-blue-500 border border-blue-400 rounded-l-lg outline-none"
              placeholder="Enter Name Of Recipe"
              id="search-input"
              v-model="searchInput"
            />
            <button
              type="submit"
              class="w-14 h-14 text-2xl bg-blue-500 text-white border-none rounded-r-lg transition-colors duration-400 ease-linear hover:bg-blue-700 flex items-center justify-center"
              id="search-btn"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        </form>
        <p class="mt-3">
          <span class="text-2xl text-gray-400"
            >THE AMBITION OF EVERY GOOD COOK MUST BE TO MAKE SOMETHING VERY GOOD
            WITH THE FEWEST POSSIBLE INGREDIENTS.</span
          >
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
      <RecipesCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
    </div>
    </div>
    
     
  </section>
</template>


<script setup>

const searchInput = ref('');
const recipes = ref([]);

const searchRecipes = async () => {
 const apiKey = '1605e78e437a40b18d6ea7e4b36a9cde';
 const ingredient = searchInput.value;
 const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=16&includeIngredients=${ingredient}`;

 try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    recipes.value = data.results;
 } catch (error) {
    console.error('Failed to fetch recipes:', error);
 }
};


</script>



