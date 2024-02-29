<script setup>
import AddItemModal from './AddItemModal.vue'

const emit = defineEmits('close')

function createUser(){
  console.log('Crear Usuario')

  emit('close')
}

function close(){
  emit('close')
}
</script>

<template>
  <AddItemModal title="Regístrate" successText="Crear" @close="close" @submit="createUser">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              counter="10"
              label="Nombre de usuario"
              required
              hide-details
              variant="outlined"
            ></v-text-field>
            <v-text-field
              class="mt-4"
              counter="10"
              label="Correo Electrónico"
              type="email"
              required
              hide-details
              variant="outlined"
            ></v-text-field>
            <v-text-field
              class="mt-4"
              counter="10"
              label="Contraseña"
              type="password"
              required
              hide-details
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </AddItemModal>
</template>
