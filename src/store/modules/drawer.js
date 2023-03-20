const state = {
    drawerState: false
};

const getters = {
    drawerState: (state) => state.drawerState
};

const actions = {
    setDrawer(ctx) {
        ctx.commit('toggleDrawerState', true);
    }
}

const mutations = {
    toggleDrawerState (state, data) {
        state.drawerState = data
    }
}


export default {
    state,
    getters,
    actions,
    mutations
};