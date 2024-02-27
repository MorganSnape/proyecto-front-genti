<script setup>
import MovementElement from '@/components/MovementElement.vue'

import { movementsMock } from '@/mock/movements'

const movements = movementsMock

const props = defineProps({
  title: {
    type: String,
    default: 'Últimos Movimientos'
  }
})
</script>

<template>
  <v-sheet
    class="mt-4 d-flex py-4 flex-column align-center"
    width="100%"
    min-height="100%"
    color="#E1F9FF"
  >
    <v-sheet class="d-flex flex-row" color="rgba(0,0,0,0)">
      <h2>{{ props.title }}</h2>
      <v-icon icon="mdi-chart-box" />
    </v-sheet>

    <v-sheet class="mx-2 mt-4" width="500px">
      <v-sheet class="d-flex flex-column" width="100%" color="#C6D5E7" style="padding: 12px; gap: 8px; border-radius: 8px;">
        <MovementElement v-for="movement in movements" :key="movement.id" v-bind="movement" />
      </v-sheet>
    </v-sheet>
  </v-sheet>
</template>
