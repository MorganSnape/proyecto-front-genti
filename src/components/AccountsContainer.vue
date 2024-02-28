<script setup>
import ItemsContainer from './ItemsContainer.vue'

defineEmits(['add'])
const props = defineProps({
  accounts: { type: Object, required: true }
})

const accounts = props.accounts
</script>

<template>
  <ItemsContainer @add="$emit('add')">
    <v-chip
      closable
      link
      :to="'?account=' + account.id"
      v-for="account in accounts"
      :key="account.id"
      prepend-icon="mdi-shape"
      color="primary"
      >{{ account.name }}</v-chip
    >
  </ItemsContainer>
</template>
