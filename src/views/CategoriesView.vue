<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import CategoriesContainer from '@/components/CategoriesContainer.vue'
</script>

<template>
  <AppLayout>
    <v-container>
      <v-row>
        <h1>Categorias <v-icon icon="mdi-format-list-bulleted"/></h1>
      </v-row>

      <v-spacer />

      <v-row justify="center">
        <v-column>
          <CategoriesContainer />
        </v-column>
      </v-row>
    </v-container>
  </AppLayout>
</template>

