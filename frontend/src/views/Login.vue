<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import { useAppStore } from "@/stores/appStore";
import api from '@/services/api';
import { useRouter } from 'vue-router';

const toast = useToast()
const store = useAppStore();
const router = useRouter();
const email = ref('')
const password = ref('')

async function login() {
  if (!email.value || !password.value) return;

  try {
    const res = await api.post('/users/login', {
      email: email.value,
      password: password.value
    });

    const user = res.data;

    store.setUser(user); 
    toast.add({
      severity: "success",
      summary: "Login",
      detail: `Bienvenido ${user.name}`,
      life: 3000,
    });
    
   
    router.push({name:'home'})

  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Usuario o contraseña incorrectos",
      life: 3000,
    });
  }
}
</script>

<template>
    <section class="flex flex-col justify-center items-center min-h-full">
        <img src="/brand/marca-color.png" alt="brand" class="md:w-1/4 w-2/4 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]">
        <form >
            <fieldset class="border-2 border-gray-200 p-10 rounded drop-shadow-[0_8px_15px_rgba(0,0,0,0.3)]">
                <legend class="text-4xl font-bold p-4 drop-shadow-2xl">
                   Login
                </legend>
              
                <div class="flex flex-col gap-8 w-80">

                    <div class="flex items-center gap-2">
                        <i class="pi pi-user text-xl"></i>
                        <InputText v-model="email" placeholder="Email" class="w-full" />
                    </div>

                    <div class="flex items-center gap-2">
                        <i class="pi pi-lock text-xl"></i>
                        <InputText v-model="password" type="password" placeholder="Contraseña" class="w-full" />
                    </div>

                    <Button label="Entrar" @click="login" />

                    <p class="text-center"> ¿No tienes cuenta?  <a href="#" class="text-blue-400">Contacta </a> con el administrador</p>
                </div>
            </fieldset>
        </form>

    </section>

</template>