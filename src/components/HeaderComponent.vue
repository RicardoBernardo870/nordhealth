<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const { email } = storeToRefs(useAuthStore())
const { logout } = useAuthStore()

const getMailInitials = computed(() => {
  return email.value.split('@')[0].slice(0, 2).toUpperCase()
})
</script>

<template>
  <header>
    <provet-top-bar>
      <h1>Dashboard</h1>

      <provet-dropdown slot="end">
        <provet-button variant="plain" slot="toggle" aria-describedby="user-tooltip">
          <provet-avatar style="transform: translateY(-1px)" :name="getMailInitials">
            {{ getMailInitials }}
          </provet-avatar>
        </provet-button>

        <provet-avatar slot="header" size="s" :name="email">{{ getMailInitials }}</provet-avatar>
        <p slot="header" class="n-color-text-weak n-font-size-s">
          Signed in as <span class="n-font-weight-active">{{ email }}</span>
        </p>
        <provet-dropdown-item @click="logout">
          Sign out
          <provet-icon slot="end" name="interface-logout"></provet-icon>
        </provet-dropdown-item>
      </provet-dropdown>

      <provet-tooltip id="user-tooltip">{{ email }}</provet-tooltip>
    </provet-top-bar>
  </header>
</template>
