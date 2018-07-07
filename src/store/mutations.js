export default {
  ADD_INSERT_OPERATION: (state, payload) => {
    state.operations.push({...payload})
  },
  ADD_UPDATE_OPERATION: (state, payload) => {
    state.operations.push({...payload})
  },
  ADD_DELETE_OPERATION: (state, payload) => {
    state.operations.push({...payload})
  },
}