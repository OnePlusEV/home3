const state = {

    // styles
    background: '#333333FF',
    color: '#FFFFFFFF'
};

const getters = {
    getBackground: state => {
        return state.background
    },
    getColor: state => {
        return state.color
    },
};

const actions = {
    setBackground(ctx, value) {
        ctx.commit('setBackground', value);
        // localStorage.setItem('links', JSON.stringify(value));
    },
    setColor(ctx, value) {
        ctx.commit('setColor', value);
        // localStorage.setItem('links', JSON.stringify(value));
    }

}

const mutations = {
    setBackground(state, data) {
        state.background = data;
    },
    setColor(state, data) {
        state.color = data;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
};