<script setup>
// import logo from '@/assets/Logo.png'
</script>

<template lang="">
  <v-layout>
    <v-navigation-drawer expand-on-hover rail>
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
        <v-list-item link :to="'/'" prepend-icon="mdi-home" title="Inicio" value="myhome"> </v-list-item>
        <v-list-item link :to="'/accounts'" prepend-icon="mdi-wallet" title="Billetera" value="wallet" ></v-list-item>
        <v-list-item link :to="'/categories'" prepend-icon="mdi-apps" title="Categorias" value=""></v-list-item>
      </v-list>

      <template #append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main style="padding-left: 80px">
      <slot></slot>
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
