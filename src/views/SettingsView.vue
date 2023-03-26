<template>
  <v-container>

    <v-card title="General" class="ma-2">
      <div class="d-flex flex-column">
        <v-checkbox-btn
            v-model=useClock
            label="Enable clock"
        ></v-checkbox-btn>
      </div>
    </v-card>

    <v-card v-if="useClock" title="Clock" class="ma-2">
      <div class="d-flex flex-column">
        <v-row>
          <v-col cols="8">
            <span> Styles </span>
            <v-list>
              <v-list-item>
                <div class="d-flex">
                  <span class="mr-6 pt-5"> Background </span>
                  <v-color-picker hide-canvas
                                  hide-sliders
                                  v-model="getBackground"
                                  @change="setBackground"
                                  elevation="0"
                                  mode="hexa">
                  </v-color-picker>
                </div>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="4">
            <HomeClock v-if="useClock"></HomeClock>
            <v-color-picker mode="hexa"></v-color-picker>
          </v-col>
        </v-row>
      </div>
    </v-card>

  </v-container>
</template>

<script>
import {defineComponent} from "vue";
import {mapActions, mapGetters} from "vuex";
import HomeClock from "@/components/widgets/HomeClock";

export default defineComponent({
  name: 'SettingsView',
  components: {
    HomeClock
  },
  methods: {
    ...mapActions([
        'setUseClock',
        'setBackground'
    ]),
  },
  computed: {
    ...mapGetters([
        'getBackground',
    ]),
    useClock: {
      get() {
        return this.$store.getters.getUseClock;
      },
      set(v) {
        return this.$store.commit('setUseClock', v)
      }
    }
  }
});
</script>
