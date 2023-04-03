const state = {

};

const actions = {
    loadFromCache(state) {
        if (localStorage.getItem('homepage')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('homepage')))
            );
        }
    }
}


export default {
    state,
    actions,
};