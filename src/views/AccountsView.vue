<script setup>
import AccountsContainer from '@/components/AccountsContainer.vue';
import AppLayout from '@/layouts/AppLayout.vue';

import { accountsMock } from '@/mock/accounts';

const accounts = accountsMock
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
          <AccountsContainer :accounts="accounts"/>
        </v-column>
      </v-row>
    </v-container>
  </AppLayout>
</template>


