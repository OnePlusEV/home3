const state = {

};

const actions = {
    loadFromCache(state) {
        const data = JSON.parse(localStorage.getItem('homepage'));
        if (data) {
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