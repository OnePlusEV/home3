<template>
  <div class="clock"
       :style="{ background: getBlockBackground,
                 width: `${getBlockWidth}px`,
                 height: `${getBlockHeight}px`,
       }">
    <div v-if="getUseDate && getDatePosition"
         :style="{ color: getDateColor,
                  fontSize: `${getDateFontSize}px`,
                  fontWeight: `${getDateFontWeight}`
                 }">
      {{ date }}
    </div>
    <div :style="{ color: getTimeColor,
                   fontSize: `${getTimeFontSize}px`,
                   fontWeight: `${getTimeFontWeight}`
                  }">
      {{ time }}
    </div>
    <div v-if="getUseDate && !getDatePosition"
         :style="{ color: getDateColor,
                  fontSize: `${getDateFontSize}px`,
                  fontWeight: `${getDateFontWeight}`
                 }">
      {{ date }}
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import moment from "moment";

export default {
  name: "HomeClock",
  beforeCreate() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      this.time = moment().format('HH:mm:ss');
    },
    setDate() {
      this.date = moment().format('DD.mm.yyyy');
    },
  },
  computed: {
    ...mapGetters([

      // Block
      'getBlockBackground',
      'getBlockWidth',
      'getBlockHeight',

      // Time
      'getTimeColor',
      'getTimeFontSize',
      'getTimeFontWeight',

      // Date
      'getUseDate',
      'getDateColor',
      'getDateFontSize',
      'getDateFontWeight',
      'getDateUseDay',
      'getDatePosition'
    ])
  },
  data() {
    return {
      time: moment().format('HH:mm:ss'),
      date: moment().format('DD.mm.yyyy')
    }
  },
}
</script>

<style scoped>

.clock {
  font-family: 'Roboto Mono', monospace;
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 0.25em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>