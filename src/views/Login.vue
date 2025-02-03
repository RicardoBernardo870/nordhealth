<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="container-login">
        <header>
          <img alt="Nordhealth Logo" class="logo" src="@/assets/logo.svg" />
        </header>

        <LoginForm />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.container-login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 6.25rem;
  padding: 1.25rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;

  img {
    width: 18.75rem;
  }
}
</style>
