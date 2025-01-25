<template>
  <v-form class="w-full">
    <v-container>
      <v-row>
        <v-col cols="12" md="6"><h1 class="font-bold text-2xl">Редактирование точки</h1></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6"><h2 class="font-bold text-xl">Основное</h2></v-col>
        <v-col cols="12" md="6"><h2 class="font-bold text-xl">Время</h2></v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field color="primary" label="Название" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Код точки" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Широта" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Долгота" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Радиус" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field color="primary" label="Время прибытия с" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Время прибытия по" variant="outlined"></v-text-field>
          <v-text-field color="primary" label="Время загрузки" variant="outlined"></v-text-field>
          <v-text-field
            color="primary"
            label="Время прибытия (факт)"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            color="primary"
            label="Время убытия (факт)"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6"
          ><v-btn color="primary">Сохранить</v-btn> <v-btn color="secondary">Отмена</v-btn></v-col
        >
      </v-row>
    </v-container>
  </v-form>
</template>
