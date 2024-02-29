<script setup>
import AddItemModal from './AddItemModal.vue'
import { categoriesMock } from '@/mock/categories'

const emit = defineEmits('close')

const categories = categoriesMock

function itemProps(category) {
  return {
    title: category.name,
    value: category.id
  }
}

function createAccount() {
  console.log('Crear cuenta')

  emit('close')
}

function close() {
  emit('close')
}
</script>

<template>
  <AddItemModal title="Crear Billetera" @close="close" @submit="createAccount">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12" class="inputs-container">
            <v-text-field
              counter="10"
              label="Nombre"
              required
              hide-details
              variant="underlined"
            ></v-text-field>

            <v-text-field
              counter="10"
              label="Saldo Inicial"
              type="number"
              required
              hide-details
              variant="underlined"
            ></v-text-field>

            <v-select
              clearable
              label="Categoría"
              variant="underlined"
              :items="categories"
              :item-props="itemProps"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </AddItemModal>
</template>

<style>
.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
