<template>
  <section class="w-[400px] flex flex-col">
    <v-toolbar border density="compact" title="Точки">
      <v-btn icon="mdi-text-search" color="primary" />
    </v-toolbar>
    <div>
      <v-checkbox label="Выбрать все (50505)" color="primary"></v-checkbox>
    </div>
    <v-list lines="one" class="flex flex-col gap-3 max-h-[83vh] overflow-y-scroll">
      <v-list-item border rounded v-for="n in 100" :key="n" :title="'Точка ' + n"></v-list-item>
    </v-list>
  </section>
</template>
