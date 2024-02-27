<template>
    <div>
        The product id is {{ route.id }}
    </div>
</template>

<script setup>
const route = useRoute().params
definePageMeta({
    layout :'products',
    validate:async(route)=>{
        return /^\d+$/.test(route.id)
    }
})
</script>

<style scoped>

</style>