import { createHelpers } from 'vuex-map-fields';
import { getField, updateField } from "vuex-map-fields";

const { getApplicationField, updateApplicationField } = createHelpers({
    getterType: 'getApplicationField',
    mutationType: 'updateApplicationField'
});


const state = {

    general: {
        useClock: true,
    },

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
    getApplicationField,
    getField,

    // getUseClock: state => state.general.useClock,

    // Block
    getBlockBackground: state => state.block.background,

    // Time
    getUseTime: state =>  state.time.useTime,
    getTimeColor: state => state.time.color,
    getTimeUseFullHours: state => state.time.useFullHours,

    // Date
    getUseDate: state => state.date.useDate,
    getDateColor: state => state.date.color,
    getDateUseDay: state => state.date.useDay,
    getDatePosition: state => state.date.position
};

const actions = {

    // General
    setUseClock({ commit }, value) {
        commit('updateApplicationField', { path: 'general.useClock', value: value });
    },

    // Block
    setBlockBackground({ commit }, value) {
        commit('updateApplicationField', { path: 'block.background', value: value });
    },

    // Time
    setUseTime({ commit }, value) {
        commit('updateApplicationField', { path: 'time.color', value: value });
    },
    setTimeColor({ commit }, value) {
        commit('updateApplicationField', { path: 'time.color', value: value });
    },
    setTimeUseFullHours({ commit }, value) {
        commit('updateApplicationField', { path: 'time.useFullHours', value: value });
    },

    // Date
    setUseDate({ commit }, value) {
        commit('updateApplicationField', { path: 'date.useDate', value: value });
    },
    setDateColor({ commit }, value) {
        commit('updateApplicationField', { path: 'date.color', value: value });
    },
    setDateUseDay({ commit }, value) {
        commit('updateApplicationField', { path: 'date.useDay', value: value });
    },
    setDatePosition({ commit }, value) {
        commit('updateApplicationField', { path: 'date.position', value: value });
    },
}

const mutations = {
    updateApplicationField,
    updateField,
}


export default {
    state,
    getters,
    actions,
    mutations
};