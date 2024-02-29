<script setup>
import { computed } from 'vue'

import { formatNumber } from '@/utils'

const props = defineProps({
  title: { type: String, default: 'Disponible' },
  value: { type: Number, required: true },
  account: { type: Object }
})

const valueString = computed(() => formatNumber(props.value))
</script>

<template>
  <v-card width="400px" color="#293661" tag="article">
    <template #text>
      <div id="container">
        <div id="disponible">
          <span id="text">{{ props.title }}</span>
          <span id="value">{{ valueString }}</span>
        </div>
        <div v-if="account" id="account">
          <v-chip variant="outlined">{{ props.account.name }}</v-chip>
        </div>
      </div>
    </template>
  </v-card>
</template>

<style scoped>
#container,
#disponible {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#container {
  gap: 12px;
  cursor: default;
}

#disponible {
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3em;
}

#value {
  font-size: 0.85em;
}
</style>
