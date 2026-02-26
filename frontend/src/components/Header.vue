<script setup>

import { headerPerson } from '../data/headerData';
import { reactive } from 'vue'

const person = reactive(headerPerson)
</script>

<template>
  <section class="w-full flex justify-between items-center p-2">
    <div class="flex items-center gap-4">
      <img class="rounded-full w-20 md:h-20" :src="person.img">
      <div>
        <p class="text-gray-400">Hola, {{ person.name }}</p>
        <p class="text-2xl text-white">Votaciones</p>
      </div>
    </div>
    <div class="flex items-center bg-green-700 p-3 rounded-full m-2 cursor-pointer">
      <i class="pi pi-envelope w-9 h-9 text-white"></i>
    </div>
  </section>
</template>
