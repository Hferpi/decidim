<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'
import Select from 'primevue/select';
import api from '@/services/api';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import MenuBar from '../../components/MenuBar.vue'



const toast = useToast()

const name = ref('')
const email = ref('')
const password = ref('')
const classroom = ref('')

const roles = ref([])
const vocationalFields = ref([])

const selectedRole = ref()
const selectedField = ref()
const sex = ref('')
const nie = ref('')

onMounted(async () => {
    const res = await api.get('/users/enums')
    console.log(res, 'datoss')
    roles.value = res.data.roles
    vocationalFields.value = res.data.vocationalFields
})
async function register() {
    if (
        !email.value ||
        !password.value ||
        !name.value ||
        !nie.value ||
        !classroom.value ||
        !selectedRole.value
    ) {
        toast.add({
            severity: "warn",
            summary: "Campos obligatorios",
            detail: "Rellena todos los campos obligatorios",
            life: 2000,
        });
        return;
    }

    try {
        const res = await api.post('/users', {
            email: email.value,
            password: password.value,
            name: name.value,
            rol: selectedRole.value,
            vocational_field: selectedField.value || null,
            sex: sex.value || null,
            classroom: classroom.value,
            nie: nie.value,
        });

        restart();
        toast.add({
            severity: "success",
            summary: "Login",
            detail: `${name.value} creado con exito`,
            life: 2000,
        });

    } catch (error) {
        toast.add({
            severity: "error",
            summary: "Error",
            detail: "No se pudo crear el usuario",
            life: 2000,
        });
    }
}
function restart() {
  name.value = ''
  email.value = ''
  password.value = ''
  classroom.value = ''
  selectedRole.value = null
  selectedField.value = null
  sex.value = null
  nie.value = ''
}
</script>

<template>
    <!-- <img src="/brand/marca-color.png" alt="brand" class="md:w-1/4 w-2/4 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]">  ELIMINAR?-->
    <MenuBar/>
    <section class="flex flex-col mt-5 justify-center items-center">
        <form @submit.prevent="register" class="max-w-6xl mx-auto">
            <fieldset class="border border-gray-300 rounded-2xl shadow-lg p-8">

                <legend class="text-3xl font-bold px-4">
                    Registrar Usuario
                </legend>

                <!-- GRID PRINCIPAL -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">

                    <!-- DATOS PERSONALES (2 columnas en md) -->
                    <div class="md:col-span-2">

                        <h3 class="inline-block text-xl font-semibold px-4 py-1 
                   bg-green-600 text-white rounded-t-xl">
                            Datos personales
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 
                    bg-green-600 rounded-b-xl rounded-tr-xl">

                            <div>
                                <label class="font-semibold">Nombre completo *</label>
                                <InputText v-model="name" class="w-full mt-1" />
                            </div>

                            <div>
                                <label class="font-semibold">Email *</label>
                                <InputText v-model="email" class="w-full mt-1" />
                            </div>

                            <div>
                                <label class="font-semibold">Contraseña *</label>
                                <InputText v-model="password" type="password" class="w-full mt-1" />
                            </div>

                            <div>
                                <label class="font-semibold">NIE *</label>
                                <InputText v-model="nie" class="w-full mt-1" />
                            </div>

                        </div>
                    </div>


                    <!-- DATOS ACADEMICOS (1 columna en md) -->
                    <div>

                        <h3 class="inline-block text-xl font-semibold px-4 py-1 
                   bg-cyan-600 text-white rounded-t-xl">
                            Datos académicos
                        </h3>

                        <div class="grid gap-6 p-4 
                    bg-cyan-600 rounded-b-xl rounded-tr-xl">

                            <div>
                                <label class="font-semibold">Clase *</label>
                                <InputText v-model="classroom" class="w-full mt-1" />
                            </div>

                            <div>
                                <label class="font-semibold">Ciclo</label>
                                <Select v-model="selectedField" :options="vocationalFields" class="w-full mt-1"
                                    placeholder="Selecciona ciclo" />
                            </div>

                        </div>

                    </div>


                    <!-- INFORMACION ADICIONAL (abajo ocupando todo) -->
                    <div class="md:col-span-3">

                        <h3 class="inline-block text-xl font-semibold px-4 py-1 
                   bg-pink-600 text-white rounded-t-xl">
                            Información adicional
                        </h3>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4
                    bg-pink-600 rounded-b-xl rounded-tr-xl">

                            <div>
                                <label class="font-semibold">Rol *</label>
                                <Select v-model="selectedRole" :options="roles" class="w-full mt-1"
                                    placeholder="Selecciona rol" />
                            </div>

                            <div class="md:col-span-2 flex gap-6 justify-center mt-2">
                                <label class="font-semibold">Género</label>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="sex" inputId="H" value="H" />
                                    <label for="H">Hombre</label>
                                </div>

                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="sex" inputId="M" value="M" />
                                    <label for="M">Mujer</label>
                                </div>

                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="sex" inputId="N" value="null" />
                                    <label for="N">NS / NC</label>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <!-- BOTONES -->
                <div class="flex justify-center gap-5 mt-10">
                    <Button label="Registrar usuario" icon="pi pi-user-plus" class="px-6 py-2" type="submit" />

                    <Button label="Limpiar" icon="pi pi-undo" severity="secondary" class="px-6 py-2" @click="restart" />
                </div>

            </fieldset>
        </form>

    </section>

</template>