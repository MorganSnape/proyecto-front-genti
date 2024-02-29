<script setup>
import { computed } from 'vue'

import MovementsContainer from '@/components/MovementsContainer.vue'

import { userMock } from '@/mock/user'

const userData = userMock

const fullName = computed(() => userData.name + ' ' + userData.lastName)
</script>

<template lang="">
  <v-layout>
    <v-navigation-drawer expand-on-hover rail color="#293661">
      <!-- <template #prepend>
        <v-list>
          <v-list-item>
            <div class="nav-logo">
              <v-img aspect-ratio="1/1" cover :src="logo"></v-img>
            </div>
          </v-list-item>
        </v-list>
      </template> -->

      <v-list density="compact" nav>
        <v-list-item link :to="'/'" prepend-icon="mdi-home" title="Inicio" value="myhome">
        </v-list-item>
        <v-list-item
          link
          :to="'/accounts'"
          prepend-icon="mdi-wallet"
          title="Billetera"
          value="wallet"
        ></v-list-item>
        <v-list-item
          link
          :to="'/categories'"
          prepend-icon="mdi-apps"
          title="Categorias"
          value=""
        ></v-list-item>
      </v-list>

      <template #append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            :prepend-avatar="userData.urlImage"
            :title="fullName"
            :subtitle="userData.email"
          >
            <template #append>
              <v-btn link :to="'/signin'" icon="mdi-exit-to-app" variant="text"></v-btn>
            </template>
        </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <slot></slot>
      <MovementsContainer />
    </v-main>
  </v-layout>
</template>

<style>
.nav-logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
</style>
