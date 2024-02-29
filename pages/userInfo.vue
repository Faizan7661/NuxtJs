<template>
    <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name 
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                     {{ (currentUser.name).toUpperCase() }}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ (currentUser.email).toUpperCase() }}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    User Id
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {{ currentUser.id}}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                   Log Out
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    
                    <button @click="logoutUser" class="hidden lg:inline-block py-2 px-6 ml-3   bg-red-500 hover:bg-green-600 text-sm text-white font-bold rounded-xl transition duration-200">Logout</button>

                </dd>
            </div>
        </dl>
    </div>
</div>
</template>

<script setup>
 const user = userLoggedIn();
  const currentUser = user.value;
  const { logout } = useNuxtApp();
  const logoutUser = () => {
    logout();
  };
</script>