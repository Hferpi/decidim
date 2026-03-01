<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const email = ref('')
const password = ref('')

function login() {
    toast.add({
        severity: 'success',
        summary: 'Login',
        detail: 'Intentando iniciar sesión',
        life: 3000
    })
}
</script>

<template>
    <section class="flex flex-col justify-center items-center min-h-screen">
        <img src="/brand/marca-color.png" alt="brand" class="md:w-1/4 w-2/4 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]">
        <form >
            <fieldset class="border-2 border-gray-200 p-10 rounded drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)]">
                <legend class="text-4xl font-bold p-4 drop-shadow-2xl">
                   Registrar usuario
                </legend>
              
                <div class="flex flex-col gap-8 w-80">

                    <div class="flex items-center gap-2">
                        <i class="pi pi-user text-xl"></i>
                        <InputText v-model="email" placeholder="Usuario" class="w-full" />
                    </div>

                    <div class="flex items-center gap-2">
                        <i class="pi pi-lock text-xl"></i>
                        <InputText v-model="password" type="password" placeholder="Contraseña" class="w-full" />
                    </div>

                    <Button label="Registrar"  @click="login" />
                    
                </div>
            </fieldset>
        </form>

    </section>

</template>