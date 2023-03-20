<template>
  <div class="container-center">
    <HomeClock></HomeClock>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HomeClock from "@/components/widgets/HomeClock";

// Components
export default defineComponent({
  name: 'HomeView',

  components: {
    HomeClock
  },
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
