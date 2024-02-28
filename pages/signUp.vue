<template>

    <div class="bg-white-100 h-screen flex items-center justify-center ">
      <div class="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
        <h1 class="text-3xl font-semibold text-[royalblue] mb-6">Register</h1>
        <form>
          <div class="mb-4">
            <FormInput
              id="email"
              label="Email"
              placeholder="Enter Email Address"
              type="email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
              <FormInput
              id="password"
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              v-model="password"
            />
          </div>
            <div class="mb-4">
              <FormInput
              id="password"
              label="Re-Enter Password"
              placeholder="Confirm Password"
              type="password"
              v-model="password"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white text-base p-3 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const email = ref("");
  const password = ref("");
  
  
  const submitForm = () => {
    console.log("Email:", email.value);
    // Handle form submission
  };
  </script>
  