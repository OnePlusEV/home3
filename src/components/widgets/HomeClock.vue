<template>
  <div class="clock"
       :style="{
          background: getBackground,
          color: getColor,
          width: `${getWidth}px`,
          height: `${getHeight}px`,
          fontSize: `${getFontSize}px`,
          fontWeight: `${getFontWeight}`
  }">
   <span>
     {{ time }}
   </span>
    <span v-if="useDate">
     {{ date }}
   </span>
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

      //  Colors
      'getBackground',
      'getColor',

      //  Block size
      'getWidth',
      'getHeight',

      // Font
      'getFontSize',
      'getFontWeight',

      // Format
      'useDate',
      'useDay',
      'useFullHours',
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
}

</style>