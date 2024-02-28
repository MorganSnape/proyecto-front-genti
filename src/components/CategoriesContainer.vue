<script setup>
const props = defineProps({
  categories: {type: Object, required: true}
})
const categories = props.categories

</script>

<template>
  <v-sheet color="#C6D5E7" width="100%" class="category-container">
    <v-chip-group selected-class="text-primary" column>
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
    </v-chip-group>
  </v-sheet>
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
