<template>
  <div class="container-center">
    <HomeClock v-if="getUseClock"></HomeClock>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeClock from "@/components/widgets/HomeClock";
import {mapGetters} from "vuex";

// Components
export default defineComponent({
  name: 'HomeView',
  components: {
    HomeClock
  },
  computed: {
    ...mapGetters([
        'getUseClock'
    ])
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
