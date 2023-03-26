const state = {
    general: {
        useClock: true
    }
};

const getters = {
    getUseClock: state => {
        return state.general.useClock
    }
};

const actions = {
    setUseClock(ctx, value) {
        ctx.commit('setUseClock', value);
        // localStorage.setItem('links', JSON.stringify(value));
    }

}

const mutations = {
    setUseClock(state, data) {
        state.general.useClock = data;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
};