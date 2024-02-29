<script setup>
import { ref } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue'
import CategoriesContainer from '@/components/CategoriesContainer.vue'

import { categoriesMock } from '@/mock/categories.js'
import AddCategoryModal from '@/components/AddCategoryModal.vue'

const categories = categoriesMock

const dialog = ref(false)

function OpenAddCategory() {
  dialog.value = true
}

function CloseAddCategory() {
  dialog.value = false
}
</script>

<template>
  <AppLayout>
    <v-container>
      <h1>Categorias <v-icon icon="mdi-format-list-bulleted" /></h1>
    </v-container>
    <v-container>
      <v-spacer />

      <v-row justify="center">
        <v-column>
          <CategoriesContainer :categories="categories" @add="OpenAddCategory" />
        </v-column>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
      <AddCategoryModal @close="CloseAddCategory" />
    </v-dialog>
  </AppLayout>
</template>
