<script setup lang="ts">
import { z } from 'zod'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import router from '@/router'

import type { LoginFormType } from '@/types/login'
import { LoginFields } from '@/types/login'
import { toTypedSchema } from '@vee-validate/zod'

import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const { login } = auth

const validationSchema = toTypedSchema(
  z.object({
    [LoginFields.EMAIL]: z.string().email('Must be a valid email'),
    [LoginFields.PASSWORD]: z.string().min(8, 'Minimum 8 characters required'),
    [LoginFields.UPDATES]: z.boolean().optional()
  })
)

const { handleSubmit, defineField, errors, isSubmitting } = useForm<LoginFormType>({
  validationSchema: validationSchema,
  validateOnMount: false
})

const [email] = defineField(LoginFields.EMAIL)
const [password] = defineField(LoginFields.PASSWORD)
const [updates] = defineField(LoginFields.UPDATES)

const showPassword = ref<boolean>(false)

const onSubmit = handleSubmit(async (values) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    login(values)

    router.push({ name: 'dashboard-home' })
  } catch (error) {
    console.error('Error submitting form:', error)
  }
})
</script>

<template>
  <provet-stack class="n-typeset" style="max-width: 340px; margin: var(--n-space-xl) auto">
    <provet-card padding="l">
      <h1 class="n-font-size-s" slot="header">Login</h1>
      <form @submit="onSubmit">
        <provet-stack gap="l">
          <provet-input
            v-model="email"
            label="Email"
            aria-label="email"
            type="email"
            hide-required
            required
            :name="LoginFields.EMAIL"
            autocomplete="email"
            :error="errors[LoginFields.EMAIL]"
            expand
            style="height: 80px"
          />

          <provet-input
            v-model="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :name="LoginFields.PASSWORD"
            aria-label="Password"
            expand
            hide-required
            required
            :error="errors[LoginFields.PASSWORD]"
            style="height: 80px"
          >
            <provet-button
              @click="showPassword = !showPassword"
              slot="end"
              role="button"
              square
              :disabled="!password"
              type="button"
            >
              <provet-icon
                aria-label="show/hide password"
                :name="showPassword ? 'interface-edit-on' : 'interface-edit-off'"
              />
            </provet-button>
          </provet-input>

          <provet-checkbox
            v-model="updates"
            :name="LoginFields.UPDATES"
            type="checkbox"
            label="Subscribe"
            aria-label="Subscribe"
            class="pr-checkbox"
          >
            <div aria-label="Receive occasional product updates and announcements" slot="hint">
              Receive occasional product updates and announcements
            </div>
          </provet-checkbox>

          <provet-button :loading="isSubmitting" expand variant="primary"> Login </provet-button>
        </provet-stack>
      </form>
    </provet-card>
  </provet-stack>
</template>
