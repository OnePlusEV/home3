<template>
  <div class="d-flex justify-space-between container pl-5 pr-5">
    <span class="mr-6 pt-5 w-25"> {{ title }} </span>
    <v-color-picker :hide-canvas="show"
                    :hide-sliders="show"
                    :model-value="value"
                    @update:modelValue="update"
                    elevation="0"
                    mode="hexa">
    </v-color-picker>
    <div class="pt-3">
      <v-avatar @click="show = !show"
                :color="value"
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
      show: true
    }
  },
  methods: {
    update(value) {
      this.$emit('updateValue', value)
    }
  },
}
</script>

<style scoped>

</style>