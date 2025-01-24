<script setup lang="ts">
const items = [
  { text: 'Main', icon: 'mdi-map', link: '/' },
  { text: 'About project', icon: 'mdi-information', link: '/about' },
  { text: 'Author', icon: 'mdi-account-circle', link: 'author' },
]
</script>

<template>
  <v-navigation-drawer absolute permanent>
    <v-list>
      <v-list-item subtitle="kirillpesterev@yandex.ru" title="Kirill Pesterev" />
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.link"
        color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
