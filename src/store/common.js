const state = {
    isShowLoading: false
}

const mutations = {
    UPDATE_LOADING_STATE: (state, value) => {
        state.isShowLoading = value;
    }
}

const actions = {
   
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}