<template>
  <div class="d-flex justify-space-between container pl-5 pr-5">
    <span class="mr-6 pt-5 w-25"> {{ title }} </span>
    <v-color-picker :hide-canvas="show"
                    :hide-sliders="show"
                    v-model="model"
                    elevation="0"
                    :modes="['hexa']"
                    mode="hexa">
    </v-color-picker>
    <div class="pt-3">
      <v-avatar @click="show = !show"
                :color="model"
      >
        {{ show ? '' : 'X' }}
      </v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsColorPicker",
  props: {
    title: {
      type: String,
      default: 'TITLE'
    },
    value: {
      type: String,
      default: 100
    },
  },
  data() {
    return {
      show: true,
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