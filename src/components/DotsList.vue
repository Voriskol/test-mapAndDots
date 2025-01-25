<template>
  <section class="w-[470px] flex flex-col">
    <v-toolbar border density="compact" title="Точки">
      <v-btn icon="mdi-text-search" color="primary" />
    </v-toolbar>
    <div>
      <v-checkbox label="Выбрать все (50505)" color="primary" class="h-[40px]"></v-checkbox>
    </div>
    <v-list
      lines="one"
      selectable
      class="flex flex-col gap-3 max-h-[83vh] overflow-y-scroll items-center"
    >
      <v-list-item width="330" border color="primary" rounded v-for="n in 100" :key="n">
        <template #title>
          <h3>{{ n }}</h3>
        </template>
        <template #subtitle> gbpltw </template>
      </v-list-item>
    </v-list>
  </section>
</template>
