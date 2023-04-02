<template>
  <v-card v-if="getUseClock" title="Clock" class="ma-2">
    <div class="d-flex flex-column">
      <v-row>
        <v-col cols="6">
          <v-list>

            <v-card title="Block" class="ma-5">
              <settings-slider :value="getBlockWidth" :min="100" :max="1000" @updateValue="setBlockWidth"
                               title="Width block"></settings-slider>
              <settings-slider :value="getBlockHeight" :min="50" :max="300" @updateValue="setBlockHeight"
                               title="Height block"></settings-slider>
              <settings-color-picker :value="getBlockBackground" @updateValue="setBlockBackground"
                                     title="Background"></settings-color-picker>
            </v-card>

            <v-card title="Time block" class="ma-5">
              <!--              <div class="d-flex flex-column ml-2">-->
              <!--                <v-checkbox-btn-->
              <!--                    :value="useDate"-->
              <!--                    label="Show time"-->
              <!--                    @input="setUseDate"-->
              <!--                ></v-checkbox-btn>-->
              <!--              </div>-->
              <settings-color-picker :value="getTimeColor" @updateValue="setTimeColor"
                                     title="Color"></settings-color-picker>
              <settings-slider :value="getTimeFontSize" :min="10" :max="72" @updateValue="setTimeFontSize"
                               title="Font size"></settings-slider>
              <settings-slider :value="getTimeFontWeight" :min="100" :max="1000" @updateValue="setTimeFontWeight"
                               title="Font weight"></settings-slider>
            </v-card>

            <v-card title="Date block" class="ma-5">
              <!--              <div class="d-flex flex-column ml-2">-->
              <!--                <v-checkbox-btn-->
              <!--                    :value="useDate"-->
              <!--                    label="Show time"-->
              <!--                    @input="setUseDate"-->
              <!--                ></v-checkbox-btn>-->
              <!--              </div>-->
              <settings-color-picker :value="getDateColor" @updateValue="setDateColor"
                                     title="Color"></settings-color-picker>
              <settings-slider :value="getDateFontSize" :min="10" :max="72" @updateValue="setDateFontSize"
                               title="Font size"></settings-slider>
              <settings-slider :value="getDateFontWeight" :min="100" :max="1000" @updateValue="setDateFontWeight"
                               title="Font weight"></settings-slider>
            </v-card>


          </v-list>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <div class="container-center">
            <HomeClock v-if="getUseClock"></HomeClock>
            <div>
              <!--                <v-color-picker mode="hexa"></v-color-picker>-->
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

export default {
  name: "SettingsBlockClock",
  components: {
    SettingsSlider,
    SettingsColorPicker,
    HomeClock
  },
  methods: {
    ...mapActions([

      // Block
      'setBlockWidth',
      'setBlockHeight',
      'setBlockBackground',

      // Time
      'setTimeColor',
      'setTimeFontSize',
      'setTimeFontWeight',

      // Date
      'setDateColor',
      'setDateFontSize',
      'setDateFontWeight',


    ]),
  },
  computed: {
    ...mapGetters([

      // Block
      'getBlockWidth',
      'getBlockHeight',
      'getBlockBackground',

      // Time
      'getTimeColor',
      'getTimeFontSize',
      'getTimeFontWeight',

      // Date
      'getDateColor',
      'getDateFontSize',
      'getDateFontWeight',


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