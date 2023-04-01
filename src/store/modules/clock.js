import { getField, updateField} from "vuex-map-fields";


const state = {

    general: {
        useClock: true,
    },

    block: {
        background: '#333333FF',
        width: 100,
        height: 30,
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
        useDay: false
    },


    style: {

        // Color
        background: '#333333FF',
        color: '#FFFFFFFF',

        // Block size
        width: 100,
        height: 30,

        // Font
        fontSize: 100,
        fontWeight: 600,
    },
    format: {

    }
};

const getters = {
    getField,

    // Colors
    getBackground: state => {
        return state.style.background
    },
    getColor: state => {
        return state.style.color
    },

    // Block size
    getWidth: state => {
        return state.style.width
    },
    getHeight: state => {
        return state.style.height
    },

    // Font
    getFontSize: state => {
        return state.style.fontSize
    },
    getFontWeight: state => {
        return state.style.fontWeight
    },

    // Format
    useDate() {
        return state.format.useDate
    },

    useDay() {
        return state.format.useDay
    },
    useFullHours() {
        return state.format.useFullHours
    },

};

const mutations = {
    updateField,

    // Colors
    setBackground(state, data) {
        state.style.background = data;
    },
    setColor(state, data) {
        state.style.color = data;
    },

    // Block size
    setWidth(state, data) {
        state.style.width = data;
    },
    setHeight(state, data) {
        state.style.height = data;
    },

    // Font
    setFontSize(state, data) {
        state.style.fontSize = data;
    },
    setFontWeight(state, data) {
        state.style.fontWeight = data;
    },


}

const actions = {
    // Colors
    setBackground(ctx, value) {
        ctx.commit('setBackground', value);
    },
    setColor(ctx, value) {
        ctx.commit('setColor', value);
    },

    // Block size
    setWidth(ctx, value) {
        ctx.commit('setWidth', value);
    },
    setHeight(ctx, value) {
        ctx.commit('setHeight', value);
    },

    // Font
    setFontSize(ctx, value) {
        ctx.commit('setFontSize', value);
    },
    setFontWeight(ctx, value) {
        ctx.commit('setFontWeight', value);
    },

}


export default {
    state,
    getters,
    actions,
    mutations
};