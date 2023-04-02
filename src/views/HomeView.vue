<template>
  <div class="container-center">
    <HomeClock v-if="useClock"></HomeClock>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeClock from "@/components/widgets/HomeClock";
import {mapGetters} from "vuex";
import {mapFields} from "vuex-map-fields";

// Components
export default defineComponent({
  name: 'HomeView',
  components: {
    HomeClock
  },
  computed: {
    ...mapFields({
      useClock: 'general.useClock'
    })
  }
});
</script>

<style>

.container-center {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
