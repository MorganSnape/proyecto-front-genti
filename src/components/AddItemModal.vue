<script setup>
const emit = defineEmits(['close', 'submit'])

const { title, cancelText, successText } = defineProps({
  title: { type: String, required: true },
  cancelText: { type: String, default: 'Cancelar' },
  successText: { type: String, default: 'Guardar' }
})

function accept() {
  emit('submit', true)
}

function cancel() {
  emit('close', false)
}
</script>

<template>
  <v-card width="400">
    <v-card-title>
      <div>{{ title }}</div>
    </v-card-title>
    <v-card-text><slot></slot></v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :text="cancelText" variant="plain" @click="cancel"></v-btn>
      <v-btn :text="successText" color="primary" variant="tonal" @click="accept"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card-title {
  padding: 0;
  height: fit-content;
}

.v-card-title > div {
  background-color: #293661;
  color: white;
  width: fit-content;
  font-weight: 600;
  font-size: 24px;
  padding: 16px;
  padding-right: 24px;
  border-radius: 0px 48px 48px 0px;
  min-width: 80%;
}
</style>
