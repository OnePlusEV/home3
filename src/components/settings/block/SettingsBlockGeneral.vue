<template>
  <v-card title="General" class="ma-2">
    <div class="d-flex flex-column ml-2">
      <v-checkbox-btn
          v-model=useClock
          label="Enable clock"
      ></v-checkbox-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SettingsBlockGeneral",
  computed: {
    useClock: {
      get() {
        return this.$store.getters.getUseClock;
      },
      set(v) {
        return this.$store.commit('setUseClock', v)
      }
    }
  }
}
</script>

<style scoped>

</style>