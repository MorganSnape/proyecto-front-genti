<script setup>
import { ref } from 'vue'

import AppLayout from '@/layouts/AppLayout.vue'
import AccountsContainer from '@/components/AccountsContainer.vue'
import AddAccountModal from '@/components/AddAccountModal.vue'

import { accountsMock } from '@/mock/accounts'

const accounts = accountsMock

const dialog = ref(false)

function OpenAddAccount() {
  dialog.value = true
}

function CloseAddAccount() {
  dialog.value = false
}
</script>

<template>
  <AppLayout>
    <v-container>
      <h1>Billeteras <v-icon icon="mdi-wallet" /></h1>
    </v-container>

    <v-container>
      <v-spacer />

      <v-row justify="center">
        <v-column>
          <AccountsContainer :accounts="accounts" @add="OpenAddAccount"/>
        </v-column>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
      <AddAccountModal @close="CloseAddAccount" />
    </v-dialog>
  </AppLayout>
</template>
