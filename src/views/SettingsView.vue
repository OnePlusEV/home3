<template>
  <v-container>

    <v-card title="General" class="ma-2">
      <div class="d-flex flex-column">
        <v-checkbox-btn
            v-model=useLinks
            label="Enable clock"
        ></v-checkbox-btn>
        <v-checkbox-btn
            v-model=useLinks
            label="Enable bookmarks"
        ></v-checkbox-btn>
      </div>
    </v-card>

  </v-container>
</template>
