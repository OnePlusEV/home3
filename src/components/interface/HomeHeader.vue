<template>
  <div class="header">
    <v-icon
        icon="mdi-cog"
        size="x-large"
        color="white"
        @click.prevent="setDrawer"
    ></v-icon>
    <v-icon
        icon="mdi-bell"
        size="x-large"
        color="white"
    ></v-icon>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "HomeHeader",
  methods: {
    ...mapActions([
      'setDrawer'
    ])
  }
}
</script>

<style scoped>

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
}

</style>