<script setup>
import { categoriesMock } from '@/mock/categories.js'

const categories = categoriesMock;
</script>

<template>
  <v-sheet color="#C6D5E7" width="100%" class="category-container" >
    <v-chip link :to="'?category='+category.name" v-for="category in categories" :key="category.id" prepend-icon="mdi-shape" variant="elevated">{{ category.name }}</v-chip>
  </v-sheet>
</template>

<style>
.v-sheet.category-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
}
</style>