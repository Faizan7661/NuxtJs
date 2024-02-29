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
      <div v-if="error" class="text-red-500 mt-4">
        Invalid email or password. Please try again.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref   } from "vue";
import {userLoggedIn} from '../composables/state'


const user = users();
const passUser = userLoggedIn()
const logStatus = logInStatus();
const email = ref('');
const password = ref('');
let userFound = ref(false);
const error = ref(false);

const login = async () => {
  const userIndex = user.findIndex((x) => x.email === email.value);
  if (userIndex !== -1 && user[userIndex].password === password.value) {
    user.splice(userIndex, 1, { ...user[userIndex], status: true });
    logStatus.value = true;
    passUser.value = user[userIndex];
    error.value = false;
    userFound.value = true;

    alert("user Logged In Successfully");
    await navigateTo("/");

    return;
  }
  error.value = !error.value; // toggle the value of error
};

</script>