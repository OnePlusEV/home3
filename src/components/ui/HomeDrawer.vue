<template>
  <v-navigation-drawer
      v-model="drawerState"
      temporary
  >
    <v-list-item
        title="Actions"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
<!--      <v-list-item prepend-icon="mdi-view-dashboard" title="Settings" value="settings" :to="settings" link></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-view-dashboard" title="Widgets" value="widgets"></v-list-item>-->
<!--      <v-list-item prepend-icon="mdi-forum" title="Styles" value="styles"></v-list-item>-->
      <v-list-item v-for="item in routes"
                   :prepend-icon="item.icon"
                   :key="item.name"
                   :to="item.path"
                   link>
        {{item.name}}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

import router from "@/router";

export default {
  name: "HomeDrawer",
  computed: {
    drawerState: {
      get() {
        return this.$store.getters.drawerState
      },
      set(v) {
        return this.$store.commit('toggleDrawerState', v)
      },
    },
    routes() {
      return router.options.routes
    }
  },
}
</script>

<style scoped>

</style>