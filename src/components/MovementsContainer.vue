<script setup>
import { ref } from 'vue'

import MovementElement from '@/components/MovementElement.vue'

import { movementsMock } from '@/mock/movements'
import AddMovementModal from './AddMovementModal.vue';

const movements = movementsMock

const props = defineProps({
  title: {
    type: String,
    default: 'Últimos Movimientos'
  }
})

const dialog = ref(false)

function OpenAddMovement() {
  dialog.value = true
}

function CloseAddMovement() {
  dialog.value = false
}

</script>

<template>
  <v-sheet
    id="container"
    class="mt-4 d-flex py-4 flex-column align-center"
    width="100%"
    min-height="100%"
    color="#E1F9FF"
  >
    <v-sheet class="d-flex flex-row align-center" color="rgba(0,0,0,0)">
      <h2>{{ props.title }} <v-icon icon="mdi-chart-box" /></h2>
      <v-btn class="ma-4" id="add" icon="mdi-plus" color="primary" @click="OpenAddMovement"></v-btn>
    </v-sheet>

    <v-sheet class="mx-2 mt-4" width="500px">
      <v-sheet
        class="d-flex flex-column"
        width="100%"
        color="#C6D5E7"
        style="padding: 12px; gap: 8px; border-radius: 8px"
      >
        <MovementElement v-for="movement in movements" :key="movement.id" v-bind="movement" />
      </v-sheet>
    </v-sheet>
  </v-sheet>

  <v-dialog v-model="dialog" width="auto" transition="dialog-bottom-transition">
    <AddMovementModal @close="CloseAddMovement" />
  </v-dialog>
</template>

<style scoped>
/* .v-sheet.container {
  position: relative;
}

#add {
  position: absolute;
  right: 5%;
  bottom: 5%;
} */
</style>
