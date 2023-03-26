<template>
  <div class="clock" :style="{background: getBackground}">
    {{ hours }}:{{ minutes }}:{{ seconds }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HomeClock",
  beforeCreate() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date();
      this.hours = this.setupValue(date.getHours());
      this.minutes = this.setupValue(date.getMinutes());
      this.seconds = this.setupValue(date.getSeconds())
    },
    setupValue(val) {
      val = val <= 9 ? `${val}`.padStart(2, 0) : val
      return val;
    }
  },
  computed: {
    ...mapGetters([
        'getBackground'
    ])
  },
  data() {
    return {
      hours: this.setupValue(new Date().getHours()),
      minutes: this.setupValue(new Date().getMinutes()),
      seconds: this.setupValue(new Date().getSeconds()),
    }
  },
}
</script>

<style scoped>

.clock {
  font-family: 'Roboto Mono', monospace;
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25em;
}

</style>