export default {
  INSERT: ({ commit }, payload) => {
    commit('ADD_INSERT_OPERATION', payload)
  },
  UPDATE: ({ commit }, payload) => {
    commit('ADD_UPDATE_OPERATION', payload)
  },
  DELETE: ({ commit }, payload) => {
    commit('ADD_DELETE_OPERATION', payload)
  },
}