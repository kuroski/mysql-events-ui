import actions from '@/store/actions'
import socketFixture from './fixtures/socketServer'

describe('vuex actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('process INSERT operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.INSERT

    // act
    actions.INSERT({ commit }, expectedPayload)

    // assert
    expect(commit).toHaveBeenCalledWith('ADD_INSERT_OPERATION', expectedPayload)
  })

  it('process UPDATE operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.UPDATE

    // act
    actions.UPDATE({ commit }, expectedPayload)

    // assert
    expect(commit).toHaveBeenCalledWith('ADD_UPDATE_OPERATION', expectedPayload)
  })

  it('process DELETE operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.DELETE

    // act
    actions.DELETE({ commit }, expectedPayload)

    // assert
    expect(commit).toHaveBeenCalledWith('ADD_DELETE_OPERATION', expectedPayload)
  })
})