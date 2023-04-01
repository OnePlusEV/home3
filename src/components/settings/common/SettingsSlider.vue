<template>
  <div class="d-flex justify-space-between container pl-5 pr-5">
    <span class="mr-6 w-25"> {{ title }} </span>
    <v-slider :model-value="value"
              :min="min"
              :max="max"
              thumb-label
              @update:modelValue="update">
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
  methods: {
    update(value) {
      this.$emit('updateValue', Math.round(value))
    }
  },
}
</script>

<style scoped>

</style>