<template>
  <v-card v-if="getUseClock" title="Clock" class="ma-2">
    <div class="d-flex flex-column">
      <v-row>
        <v-col cols="6">
          <v-list>

            <v-card title="Block size" class="ma-5">
              <settings-slider :value="getWidth" :min="100" :max="1000" @updateValue="setWidth"
                               title="Width block"></settings-slider>
              <settings-slider :value="getHeight" :min="50" :max="300" @updateValue="setHeight"
                               title="Height block"></settings-slider>
            </v-card>

            <v-card title="Colors" class="ma-5">
              <settings-color-picker :value="getBackground" @updateValue="setBackground"
                                     title="Background"></settings-color-picker>
              <settings-color-picker :value="getColor" @updateValue="setColor" title="Color"></settings-color-picker>
            </v-card>

            <v-card title="Font" class="ma-5">
              <settings-slider :value="getFontSize" :min="10" :max="72" @updateValue="setFontSize"
                               title="Font size"></settings-slider>
              <settings-slider :value="getFontWeight" :min="100" :max="1000" @updateValue="setFontWeight"
                               title="Font weight"></settings-slider>
            </v-card>

<!--            <v-card title="Data" class="ma-5">-->
<!--              <div class="d-flex flex-column ml-2">-->
<!--                <v-checkbox-btn-->
<!--                    value="useDate"-->
<!--                    label="Show date"-->
<!--                    @input="setUseDate"-->
<!--                ></v-checkbox-btn>-->
<!--              </div>-->
<!--            </v-card>-->

            <!--            <v-card title="Format" class="ma-5">-->
            <!--              <settings-slider :value="getFontSize" :min="10" :max="72" @updateValue="setFontSize" title="Font size"> </settings-slider>-->
            <!--              <settings-slider :value="getFontWeight" :min="100" :max="1000" @updateValue="setFontWeight" title="Font weight"> </settings-slider>-->
            <!--            </v-card>-->


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

      // General
      'setUseClock',

      // Colors
      'setBackground',
      'setColor',

      // Block size
      'setWidth',
      'setHeight',

      // Font
      'setFontSize',
      'setFontWeight',

      // // Show date
      // 'setUseDate',
      // 'setUseDay',
      // 'setUseFullHours',
    ]),
  },
  computed: {
    ...mapGetters([

      // General
      'getUseClock',

      // Color
      'getBackground',
      'getColor',

      // Size block
      'getWidth',
      'getHeight',

      // Font
      'getFontSize',
      'getFontWeight',

      // //  Format
      // 'useDate',
      // 'useDay',
      // 'useFullHours'
    ]),
  },
}
</script>

<style scoped>

.subtitle {
  font-size: 18px;
}

</style>