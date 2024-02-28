<script setup>
import AddItemModal from './AddItemModal.vue'

const emit = defineEmits('close')

function createCategory(){
  console.log('Crear categoría')

  emit('close')
}

function close(){
  emit('close')
}
</script>

<template>
  <AddItemModal title="Crear Categoría" @close="close" @submit="createCategory">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              counter="10"
              label="Nombre"
              required
              hide-details
              variant="underlined"
            ></v-text-field>
            <v-text-field
              counter="10"
              label="Descripción"
              required
              hide-details
              variant="underlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </AddItemModal>
</template>
