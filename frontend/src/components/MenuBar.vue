<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <img src="/brand/logo-rb.png" alt="logo" class="w-10">
                <img src="/brand/marca-color.png" alt="brand" class="w-30 drop-shadow-[0_8px_15px_rgba(0,0,0,0.5)]">

            </template>
            <template #item="{ item, props, hasSubmenu, root }" class="w-full flex justify-around">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" class="flex items-center" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut"
                            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                        <i v-if="hasSubmenu"
                            :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                    </a>
                </router-link>
                <a v-else v-ripple class="flex items-center" v-bind="props.action" :target="item.target">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                        item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
                    <Avatar image="img/profile.webp" shape="circle" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'


const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/home'
    },
    {
        label: 'Usuarios',
        icon: 'pi pi-user',
        route: '/register'
    },
    {
        label: 'Usuarios',
        icon: 'pi pi-user',
        badge: 3,
        items: [
            {
                label: 'Crear',
                icon: 'pi pi-user-plus',
                route: '/register'
            },
            {
                label: 'Ver todos',
                icon: 'pi pi-users',
                route: '/all-users'
            },
            {
                separator: true
            },
            {
                label: 'Editar',
                icon: 'pi pi-user-edit',
                route: '/edit-user'
            }
        ]
    }
]);
</script>
