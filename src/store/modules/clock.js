import { getField, updateField } from "vuex-map-fields";

const state = {

    block: {
        width: 100,
        height: 30,
        background: '#333333FF',
    },
    time: {
        useTime: true,
        color: '#FFFFFFFF',
        fontSize: 100,
        fontWeight: 600,
        useFullHours: true,
    },
    date: {
        useDate: true,
        color: '#FFFFFFFF',
        fontSize: 100,
        fontWeight: 600,
        useDay: false,
        position: false,
    },
};

const getters = {
    getField,
};

const actions = {

    // Block
    setBlockBackground({ commit }, value) {
        commit('updateField', { path: 'block.background', value: value });
    },

    // Time
    setUseTime({ commit }, value) {
        commit('updateField', { path: 'time.color', value: value });
    },
    setTimeColor({ commit }, value) {
        commit('updateField', { path: 'time.color', value: value });
    },
    setTimeUseFullHours({ commit }, value) {
        commit('updateField', { path: 'time.useFullHours', value: value });
    },

    // Date
    setUseDate({ commit }, value) {
        commit('updateField', { path: 'date.useDate', value: value });
    },
    setDateColor({ commit }, value) {
        commit('updateField', { path: 'date.color', value: value });
    },
    setDateUseDay({ commit }, value) {
        commit('updateField', { path: 'date.useDay', value: value });
    },
    setDatePosition({ commit }, value) {
        commit('updateField', { path: 'date.position', value: value });
    },
}

const mutations = {
    updateField,
}

export default {
    state,
    getters,
    actions,
    mutations
};