// frontend/src/stores/appStore.ts
import type { User } from "@/shared/types/user";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    logout() {
      this.user = null;
    },
  },
});