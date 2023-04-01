const state = {

};

const actions = {
    loadFromCache(state) {
        this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('homepage')))
        );
    }
}


export default {
    state,
    actions,
};