<script setup>
const props = defineProps({
  accounts: {type: Object, required: true}
})
const accounts = props.accounts

</script>

<template>
  <v-sheet color="#C6D5E7" width="100%" class="account-container">
    <v-chip-group selected-class="text-primary" column>
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
    </v-chip-group>
  </v-sheet>
</template>

<style scoped>
.v-sheet.account-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
}

</style>
