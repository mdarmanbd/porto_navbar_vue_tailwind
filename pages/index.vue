<script setup>
import { navStore } from '../store/navStore';

</script>

<template >
   

<div @click="navStore.navAllCategoriesIsTrue = false" class="w-full">
    <div class="w-1/2 m-auto ">
        <h3 class="text-red-400">index</h3>
        <p class="text-green-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit dignissimos assumenda soluta, debitis eligendi doloribus repudiandae placeat obcaecati corporis quibusdam sed culpa reiciendis tenetur impedit. Quo temporibus tenetur rerum.</p>
    </div>
</div>

   
</template>

<style scoped>

   p{
    font-family: "Poppins", sans-serif;
   }

   h1,h2,h3,h4,h5{
    font-family: "Poppins", sans-serif;
   }
</style>