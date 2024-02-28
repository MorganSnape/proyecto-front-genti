<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import TotalDisponible from '@/components/TotalDisponible.vue'

import { summaryAccountsMock } from '@/mock/accounts'
import { userMock } from '@/mock/user'

// Siempre serán 2 elementos
const summaryAccounts = summaryAccountsMock
const userData = userMock
</script>

<template>
  <AppLayout>
    <v-container>
      <h1>Hola {{ userData.name }}!</h1>
    </v-container>
    <v-sheet id="summary-accounts-container" style="margin: 20px">
      <TotalDisponible
        v-for="summaryAccount in summaryAccounts"
        :key="summaryAccount.account.id"
        v-bind="summaryAccount"
      />
    </v-sheet>
  </AppLayout>
</template>

<style scoped>
#summary-accounts-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* padding-inline: 10%; */
}
</style>
