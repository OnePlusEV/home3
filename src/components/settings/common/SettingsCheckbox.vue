<template>
  <div class="d-flex justify-lg-start container pl-5 pr-5">
    <span class="d-flex align-center mr-6"> {{ title }} </span>
    <v-checkbox-btn
        v-model=model
    ></v-checkbox-btn>
  </div>
</template>

<script>
export default {
  name: "SettingsCheckbox",
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      model: this.value
    }
  },
  watch: {
    model(currentValue) {
      this.$emit('update:modelValue', currentValue)
    }
  },
}
</script>

<style scoped>

</style>