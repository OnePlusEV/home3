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
    getBlockWidth: state => state.block.width,
    getBlockHeight: state => state.block.height,
    getBlockBackground: state => state.block.background,

    // Time
    getUseTime: state =>  state.time.useTime,
    getTimeColor: state => state.time.color,
    getTimeFontSize: state => state.time.fontSize,
    getTimeFontWeight: state => state.time.fontWeight,
    getTimeUseFullHours: state => state.time.useFullHours,

    // Date
    getUseDate: state => state.date.useDate,
    getDateColor: state => state.date.color,
    getDateFontSize: state => state.date.fontSize,
    getDateFontWeight: state => state.date.fontWeight,
    getDateUseDay: state => state.date.useDay,
    getDatePosition: state => state.date.position
};

const actions = {

    // General
    setUseClock({ commit }, value) {
        commit('updateApplicationField', { path: 'general.useClock', value: value });
    },

    // Block
    setBlockWidth({ commit }, value) {
        commit('updateApplicationField', { path: 'block.width', value: value });
    },
    setBlockHeight({ commit }, value) {
        commit('updateApplicationField', { path: 'block.height', value: value });
    },
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
    setTimeFontSize({ commit }, value) {
        commit('updateApplicationField', { path: 'time.fontSize', value: value });
    },
    setTimeFontWeight({ commit }, value) {
        commit('updateApplicationField', { path: 'time.fontWeight', value: value });
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
    setDateFontSize({ commit }, value) {
        commit('updateApplicationField', { path: 'date.fontSize', value: value });
    },
    setDateFontWeight({ commit }, value) {
        commit('updateApplicationField', { path: 'date.fontWeight', value: value });
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
}


export default {
    state,
    getters,
    actions,
    mutations
};