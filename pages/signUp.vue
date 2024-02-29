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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = users();
const name = ref("");
const email = ref("");
const password = ref("");
const emailError = ref(false);
const PasswordError = ref(false);
const userExist = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const submitForm = () => {
  if (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== ""
  ) {
    if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {
      const found = user.filter((x) => x.email === email.value);
      if (found.length === 0) {
        const user1 = {
          id: user.length + 1,
          name: name.value,
          email: email.value,
          password: password.value,
          status: false,
        };
        user.push(user1);
        alert("User registered successfully");
        navigateTo("/login");
      } else {
        userExist.value = true;
      }
    } else {
      emailError.value = !emailRegex.test(email.value);
      PasswordError.value = !passwordRegex.test(password.value);
    }
  } else {
    alert("Fill out every detail");
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Password:", password.value);
  }
};
</script>
