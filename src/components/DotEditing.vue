<template>
  <v-form class="w-full">
    <v-container>
      <v-row><h1>Редактирование точки</h1></v-row>
      <v-row>
        <v-col cols="12" md="6"><h2>Основное</h2></v-col>
        <v-col cols="12" md="6"><h2>Время</h2></v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field :counter="10" label="First name" required></v-text-field>
          <v-text-field :counter="10" label="First name" required></v-text-field>
          <v-text-field :counter="10" label="First name" required></v-text-field>
          <v-text-field :counter="10" label="First name" required></v-text-field>
          <v-text-field :counter="10" label="First name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field label="E-mail" required></v-text-field>
          <v-text-field label="E-mail" required></v-text-field>
          <v-text-field label="E-mail" required></v-text-field>
          <v-text-field label="E-mail" required></v-text-field>
          <v-text-field label="E-mail" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="primary">Сохранить</v-btn>
      <v-btn color="secondary">Отмена</v-btn>
    </v-container>
  </v-form>
</template>
