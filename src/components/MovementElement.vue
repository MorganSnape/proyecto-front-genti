<script setup>
import { ref, computed } from 'vue'

import { movementTypes } from '@/models/movements'
import { formatNumberMoney, formatDate } from '@/utils/index'

const props = defineProps({
  type: { type: String, required: true },
  value: { type: Number, required: true, default: 0 },
  date: { type: Date },
  account: { type: Object, required: true},
  category: { type: Object, required: true}
})

const type = ref(props.type)
const movementClass = computed(() => (type.value === movementTypes.INGRESO ? 'ingreso' : 'egreso'))
const value = computed(() => formatNumberMoney(props.value, type.value))
const accountName = computed(() => props.account.name)
const categoryName = computed(() => props.category.name)
const dateString = computed(() => formatDate(props.date))
</script>

<template>
  <v-card
    :title="dateString"
    class="mov-container"
    d-flex
    flex-column
    mb-6
    justify-center
    width="100%"
  >
    <v-sheet class="content" style="gap: 8px">
      <v-sheet class="">{{ type }}:</v-sheet>
      <v-sheet class="valor" :class="movementClass">{{ value }}</v-sheet>
      <v-chip>{{ accountName }}</v-chip>
      <v-chip>{{ categoryName }}</v-chip>
    </v-sheet>
  </v-card>
</template>

<style>
.v-card.mov-container {
  background-color: white;
  padding: 8px 4px;
}

.v-sheet.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 8px;
}

.v-sheet.valor {
  font-weight: 600;
}

.v-sheet.ingreso {
  color: green;
}

.v-sheet.egreso {
  color: red;
}
</style>
