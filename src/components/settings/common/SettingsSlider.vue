<template>
  <div class="d-flex justify-space-between container pl-5 pr-5">
    <span class="mr-6 w-25"> {{ title }} </span>
    <v-slider v-model="model"
              :min="min"
              :max="max"
              thumb-label>
    </v-slider>
  </div>
</template>

<script>
export default {
  name: "SettingsSlider",
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    min: {
      type: Number,
      default: 100
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 100
    },
  },
  data() {
    return {
      model: this.value
    }
  },
  watch: {
    model(currentValue) {
      this.$emit('update:modelValue', Math.round(currentValue))
    }
  },
}
</script>

<style scoped>

</style>