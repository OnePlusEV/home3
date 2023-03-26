import { createStore } from 'vuex'

import links from "@/store/modules/links";
import drawer from "@/store/modules/drawer";
import settings from "@/store/modules/settings";
import clock from "@/store/modules/clock";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    links,
    drawer,
    settings,
    clock
  }
})
