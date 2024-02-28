<template>
    <div>
       <label
         :for="id"
         class="text-sm font-medium text-gray-600"
       >
         {{ label }}
       </label>
       <input
         :type="type"
         :placeholder="placeholder"
         :class="['w-full mt-1 p-3 rounded-md border border-gray-300', inputClass]"
         :id="id"
         v-model="inputValue"
       />
    </div>
   </template>
   
   <script setup>
   import { ref, watch } from 'vue';
   
   // Props are automatically available in the template
   const props = defineProps({
    id: {
       type: String,
       required: true
    },
    label: {
       type: String,
       required: true
    },
    placeholder: {
       type: String,
       default: ''
    },
    type: {
       type: String,
       default: 'text'
    },
    inputClass: {
       type: String,
       default: ''
    }
   });
   
   const inputValue = ref('');
   
   // Watch for changes in inputValue and emit them up to the parent component
   watch(inputValue, (newValue) => {
    emit('update:modelValue', newValue);
   });
   </script>
   