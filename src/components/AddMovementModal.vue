<script setup>
import AddItemModal from './AddItemModal.vue'

import { movementTypes, movementTypesArray } from '@/models/movements';

import { accountsMock } from '@/mock/accounts';
import { categoriesMock } from '@/mock/categories'

const emit = defineEmits('close')

const types = movementTypesArray
const accounts = accountsMock
const categories = categoriesMock

function typeItemProps(type) {
  return {
    title: movementTypes[type],
    value: type
  }
}

function accountsItemProps(category) {
  return {
    title: category.name,
    value: category.id
  }
}

function categoryItemProps(category) {
  return {
    title: category.name,
    value: category.id
  }
}

function createMovement() {
  console.log('Crear cuenta')

  emit('close')
}

function close() {
  emit('close')
}
</script>

<template>
  <AddItemModal title="Crear Movimiento" @close="close" @submit="createMovement">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="12" class="inputs-container">
            <v-select
              clearable
              label="Categoría"
              variant="underlined"
              :items="types"
              :item-props="typeItemProps"
            />

            <v-text-field
              counter="10"
              label="Monto"
              type="number"
              required
              hide-details
              variant="underlined"
            ></v-text-field>

            <v-select
              clearable
              label="Cuenta"
              variant="underlined"
              :items="accounts"
              :item-props="accountsItemProps"
            />

            <v-select
              clearable
              label="Categoría"
              variant="underlined"
              :items="categories"
              :item-props="categoryItemProps"
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
