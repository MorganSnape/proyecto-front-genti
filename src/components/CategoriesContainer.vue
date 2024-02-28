<script setup>
import ItemsContainer from './ItemsContainer.vue'

defineEmits(['add'])
const props = defineProps({
  categories: { type: Object, required: true }
})
const categories = props.categories
</script>

<template>
  <items-container @add="$emit('add')">
    <v-chip
      closable
      link
      :to="'?category=' + category.id"
      v-for="category in categories"
      :key="category.id"
      prepend-icon="mdi-shape"
      color="primary"
      >{{ category.name }}</v-chip
    >
  </items-container>
</template>

<style scoped>
.v-sheet.category-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
}
</style>
