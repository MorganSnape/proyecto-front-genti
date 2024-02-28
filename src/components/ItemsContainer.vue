<script setup>
defineEmits(['add'])
</script>

<template>
  <v-sheet color="#C6D5E7" width="100%" class="item-container">
    <v-chip-group selected-class="text-primary" column>
      <slot></slot>
    </v-chip-group>
    <v-btn id="add" icon="mdi-plus" @click="$emit('add')" />
  </v-sheet>
</template>

<style scoped>
.v-sheet.item-container {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
}

.v-sheet.item-container .v-chip-group{
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#id{
  position: absolute;
}
</style>
