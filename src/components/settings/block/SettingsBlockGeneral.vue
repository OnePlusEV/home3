<template>
  <v-card title="General" class="ma-2">
    <v-row>
      <v-col cols="6">
        <settings-checkbox v-model="useClock" :value="useClock" title="Enable clock"></settings-checkbox>
      </v-col>

      <v-col cols="6">
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import SettingsCheckbox from "@/components/settings/common/SettingsCheckbox.vue";
import {mapFields} from "vuex-map-fields";

export default {
  name: "SettingsBlockGeneral",
  components: {SettingsCheckbox},
  computed: {
    ...mapFields({
      useClock: 'general.useClock'
    })
  }
}
</script>

<style scoped>

</style>