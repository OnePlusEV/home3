<template>
  <v-container>
    <settings-block-general></settings-block-general>

    <settings-block-clock></settings-block-clock>

  </v-container>
</template>

<script>
import {defineComponent} from "vue";
import {mapActions, mapGetters} from "vuex";
import HomeClock from "@/components/widgets/HomeClock";
import SettingsColorPicker from "@/components/settings/common/SettingsColorPicker.vue";
import SettingsBlockGeneral from "@/components/settings/block/SettingsBlockGeneral.vue";
import SettingsBlockClock from "@/components/settings/block/SettingsBlockClock.vue";

export default defineComponent({
  name: 'SettingsView',
  components: {
    SettingsBlockClock,
    SettingsBlockGeneral,
  },
});
</script>

<style>
.container-center {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>