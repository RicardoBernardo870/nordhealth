import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { LoginFormType } from '@/types/login'

export const useAuthStore = defineStore('auth', () => {
  const email = ref<string>(localStorage.getItem('email') || '')
  const updates = ref<boolean>(localStorage.getItem('updates') === 'true')

  const login = (submitedValue: LoginFormType) => {
    email.value = submitedValue.email
    updates.value = submitedValue.updates || false

    localStorage.setItem('email', email.value)
    localStorage.setItem('updates', updates.value.toString())
  }

  const logout = () => {
    localStorage.clear()

    window.location.href = '/login'
  }

  const isAuthenticated = computed(() => !!email.value)

  return {
    email,
    updates,
    login,
    isAuthenticated,
    logout
  }
})
