<template>
  <div class="bg-white-100 h-screen flex items-center justify-center ">
    <div class="max-w-md w-full p-8 bg-white shadow-md rounded-lg">
      <h1 class="text-3xl font-semibold text-[royalblue] mb-6">Login</h1>
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
        <button
          type="submit"
          class="w-full bg-blue-500 text-white text-base p-3 rounded-md hover:bg-blue-600"
          @click.prevent="login"
        >
          Log In
        </button>
      </form>
      <br>
    <p class="text-center">New to Recipe Finder? <span class="text-blue-500 font-bold"><NuxtLink to="/signUp">Create New Account!</NuxtLink></span></p>
    </div>
  </div>
</template>

<script setup>
import { ref   } from "vue";
import { useUserStore } from "~/store/user";
const userStore = useUserStore()

const email = ref('');
const password = ref('');

const login = async () => {
 const Login = await userStore.loginUser(email.value, password.value);
 if (!Login) {
  console.log('Login failed');
 } 
};

</script>
