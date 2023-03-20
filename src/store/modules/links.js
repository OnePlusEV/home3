const state = {
    links: [
        {
            title: 'work', links: [
                {title: 'First', link: 'google.com'},
            ],
        },
    ]
};

const getters = {
    getLinks: state => {
        return state.links
    }
};

const actions = {
    setLinks(ctx, value) {
        ctx.commit('setLinks', value);
        localStorage.setItem('links', JSON.stringify(value));
    }

}

const mutations = {
    setLinks(state, data) {
        state.links = data;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
};