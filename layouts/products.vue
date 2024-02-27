<template>
    <div>
<header>
    <nav>
        <NuxtLink to="/products">App Name</NuxtLink>
        <div>
            <slot/>
        </div>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>

        </ul>
    </nav>
</header>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>