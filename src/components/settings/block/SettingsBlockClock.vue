<template>
  <v-card v-if="getUseClock" title="Clock" class="ma-2">
    <div class="d-flex flex-column">
      <v-row>
        <v-col cols="6">
          <v-list>

            <v-card title="Block" class="ma-5">
              <settings-slider v-model="getBlockWidth" :value="getBlockWidth" :min="100" :max="1000"
                               title="Width block"></settings-slider>
              <settings-slider v-model="getBlockHeight" :value="getBlockHeight" :min="50" :max="300"
                               title="Height block"></settings-slider>
              <settings-color-picker v-model="getBlockBackground" :value="getBlockBackground"
                                     title="Background"></settings-color-picker>
            </v-card>

            <v-card title="Time block" class="ma-5">
              <settings-color-picker v-model="getTimeColor" :value="getTimeColor"
                                     title="Color"></settings-color-picker>
              <settings-slider v-model="getTimeFontSize" :value="getTimeFontSize" :min="10" :max="72"
                               title="Font size"></settings-slider>
              <settings-slider v-model="getTimeFontWeight" :value="getTimeFontWeight" :min="100" :max="1000"
                               title="Font weight"></settings-slider>
            </v-card>

            <v-card title="Date block" class="ma-5">
              <settings-color-picker v-model="getDateColor" :value="getDateColor"
                                     title="Color"></settings-color-picker>
              <settings-slider v-model="getDateFontSize" :value="getDateFontSize" :min="10" :max="72"
                               title="Font size"></settings-slider>
              <settings-slider v-model="getDateFontWeight" :value="getDateFontWeight" :min="100" :max="1000"
                               title="Font weight"></settings-slider>
            </v-card>


          </v-list>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <div class="container-center">
            <HomeClock v-if="getUseClock"></HomeClock>
            <div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import SettingsColorPicker from "@/components/settings/common/SettingsColorPicker.vue";
import HomeClock from "@/components/widgets/HomeClock.vue";
import {mapActions, mapGetters} from "vuex";
import SettingsSlider from "@/components/settings/common/SettingsSlider.vue";
import {mapFields} from "vuex-map-fields";

export default {
  name: "SettingsBlockClock",
  components: {
    SettingsSlider,
    SettingsColorPicker,
    HomeClock
  },

  computed: {
    ...mapFields({

      // General
      useClock: 'general.useClock',

      // Block
      getBlockWidth: 'block.width',
      getBlockHeight: 'block.height',
      getBlockBackground: 'block.background',

      // Time
      getUseTime: 'time.useTime',
      getTimeColor: 'time.color',
      getTimeFontSize: 'time.fontSize',
      getTimeFontWeight: 'time.fontWeight',
      getTimeUseFullHours: 'time.useFullHours',

      // Date
      getUseDate: 'date.useDate',
      getDateColor: 'date.color',
      getDateFontSize: 'date.fontSize',
      getDateFontWeight: 'date.fontWeight',
      getDateUseDay: 'date.useDay',
      getDatePosition: 'date.position',
    }),

    ...mapGetters([


      // General
      'getUseClock',
    ]),
  },
}
</script>

<style scoped>

.subtitle {
  font-size: 18px;
}

</style>