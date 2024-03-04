<template>
  <div class="bg-white-100 h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
      <h1 class="text-3xl font-semibold text-[royalblue] mb-6">Register</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <FormInput
            id="name"
            label="Name"
            placeholder="Enter Your Name"
            type="text"
            v-model="name"
          />
        </div>
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
        <button
          type="submit"
          class="w-full bg-blue-500 text-white text-base p-3 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      <br>
    <p class="text-center">Already a User? <span class="text-blue-500 font-bold"><NuxtLink to="/login"> Login!</NuxtLink></span></p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/user'
const userStore = useUserStore()

const name = ref("");
const email = ref("");
const password = ref("");

const submitForm = async () => {
  const registered = await userStore.registerUser(name.value, email.value, password.value);
  if (!registered) {
    console.log('Registration failed');
  }
};
</script>
