<script setup>
import Header from '../components/Header.vue'
</script>

<template >
  <Header />
  <div class="relative  w-full max-w-md mt-4">

    <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-50 "></i>


    <input type="text" class="bg-green-700 text-amber-50 p-3 pl-10 rounded-2xl w-full placeholder-gray-200"
      placeholder="Buscar temas..." />

  </div>
  <nav class="flex gap-6 m-5">
    <p class="p-2 bg-green-700 rounded-2xl cursor-pointer hover:bg-green-400 hover:text-gray-800">Todos</p>
    <p class="p-2 bg-green-700 rounded-2xl">Activos</p>
  </nav>
  <h3 class="px-6 text-2xl w-full text-left">DESTACADOS</h3>
  <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
    <div class="bg-green-700 p-6  rounded-2xl w-full mt-5">
      <div class="flex justify-between">
        <p class="p-2 rounded-3xl bg-green-600">Estado</p>
        <div class="flex gap-2"><i class="pi pi-clock"></i><p>Dias restantes</p></div>
      </div>
      <div class="flex mt-3 gap-4">

        <div class="bg-green-600 rounded-full flex items-center justify-center w-12 h-12 p-3">
      
          <i class="pi pi-tree w-8 h-8 stroke-white"></i>
        </div>


        <div>
          <h2 class="text-2xl">Renovacion del Parque</h2>
          <p>¿Deberiamos asignar el presupuesto anual a la mejora de...</p>
        </div>
      </div>
      <hr class="m-5">
      <div class="flex justify-between">
        <p>120 Votos</p>
        <p>Total votantes</p>
      </div>
    </div>
    <div class="bg-green-700 p-6  rounded-2xl w-full mt-5">
      <div class="flex justify-between">
        <p class="text-amber-50">Estado</p>
        <p>Dias restantes</p>
      </div>
      <div class="flex mt-3 gap-4">
        <div class="bg-green-600 rounded-full flex items-center justify-center w-12 h-12 p-3">
           <i class="pi pi-tree w-8 h-8 stroke-white"></i>
        </div>

        <div>
          <h2 class="text-2xl">Renovacion del Parque</h2>
          <p>¿Deberiamos asignar el presupuesto anual a la mejora de...</p>
        </div>
      </div>
      <hr class="m-5">
      <div class="flex justify-between">
        <p>120 Votos</p>
        <p>Total votantes</p>
      </div>
    </div>
    <div class="bg-green-700 p-6  rounded-2xl w-full mt-5">
      <div class="flex justify-between">
        <p class="text-amber-50">Estado</p>
        <p>Dias restantes</p>
      </div>
      <div class="flex mt-3 gap-4">
        <div class="bg-green-600 rounded-full flex items-center justify-center w-12 h-12 p-3">
          <i class="pi pi-tree w-8 h-8 stroke-white"></i>
        </div>


        <div>
          <h2 class="text-2xl">Renovacion del Parque</h2>
          <p>¿Deberiamos asignar el presupuesto anual a la mejora de...</p>
        </div>
      </div>
      <hr class="m-5">
      <div class="flex justify-between">
        <p>120 Votos</p>
        <p>Total votantes</p>
      </div>
    </div>
  </section>
</template>