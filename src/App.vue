<template>
  <v-app>
    <v-main>
      <div class="page">
        <home-header></home-header>

        <router-view/>
      </div>
      <home-drawer></home-drawer>
    </v-main>
  </v-app>
</template>

<script>

import HomeHeader from "@/components/interface/HomeHeader";
import HomeDrawer from "@/components/interface/HomeDrawer";

export default {
  name: 'App',
  components: {
    HomeDrawer,
    HomeHeader
  },

  data: () => ({
    //
  }),
}
</script>

<style>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

::-webkit-scrollbar {
  width: 0;
}
</style>
