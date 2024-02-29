<script setup>
import { ref } from 'vue'


import CreateUserModal from '@/components/CreateUserModal.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const loading = ref(false)
const dialog = ref(false)

function OpenCreateUser() {
  dialog.value = true
}

function CloseCreateUser() {
  dialog.value = false
}

function signin() {
  loading.value = true

  setTimeout(() => {
    loading.value = false

    router.push('/')
  }, 1000)
}
</script>

<template>
  <v-main color="primary">
    <v-container tag="article">
      <div id="brand">
        <v-img width="120" class="no-select-drag" cover src="/src/assets/Logo.png" alt="TrackDebts Isotipo"></v-img>
        <h1 class="no-select-drag">Track debts</h1>
      </div>
      <v-form @submit.prevent>
        <div id="inputs">
          <v-text-field
            counter="10"
            label="Usuario"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
          <v-text-field
            counter="10"
            label="Contraseña"
            type="password"
            required
            hide-details
            variant="outlined"
          ></v-text-field>
        </div>
        <div id="action">
          <div>
            <v-btn
              :loading="loading"
              class="mt-2"
              text="Iniciar Sesión"
              type="submit"
              color="#446df2"
              block
              @click="signin"
            ></v-btn>
          </div>
        </div>
        <div id="links">
          <v-btn variant="text" class="no-account" @click="OpenCreateUser">¿No tienes cuenta?</v-btn>
        </div>
      </v-form>
    </v-container>
    <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
      <CreateUserModal @close="CloseCreateUser" />
    </v-dialog>
  </v-main>
</template>

<style scoped>
main {
  background-color: #293661;
  color: #fcfcfc;
  display: grid;
  place-content: center;
}

.v-container {
  width: 600px;
}

#brand,
form,
#inputs,
#action,
#links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#brand {
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 4px solid #fcfcfc;
}

#brand h1 {
  text-align: center;
  margin-top: 20px;
  font-weight: 400;
  color: #fcfcfc;
}

form {
  margin-top: 32px;
  align-items: stretch;
  gap: 36px;
}

#inputs {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.v-input {
  width: 75%;
}

#action > div {
  width: 50%;
}

.v-btn {
  text-transform: none;
}

#links .no-account {
  font-size: 14px;
  color: #38d4fc;
}
</style>
