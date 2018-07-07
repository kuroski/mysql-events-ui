import state from '@/store/state'
import mutations from '@/store/mutations'
import socketFixture from './fixtures/socketServer'

describe('store mutations', () => {
  let storeState

  beforeEach(() => {
    storeState = JSON.parse(JSON.stringify(state))
  })

  it('adds INSERT operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.INSERT

    // act
    mutations.ADD_INSERT_OPERATION(storeState, expectedPayload)

    // assert
    expect(storeState.operations).toHaveLength(1)
    expect(storeState.operations[0]).toEqual(expectedPayload)
    expect(storeState.operations[0]).not.toBe(expectedPayload)
  })

  it('adds UPDATE operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.UPDATE

    // act
    mutations.ADD_UPDATE_OPERATION(storeState, expectedPayload)

    // assert
    expect(storeState.operations).toHaveLength(1)
    expect(storeState.operations[0]).toEqual(expectedPayload)
    expect(storeState.operations[0]).not.toBe(expectedPayload)
  })

  it('adds DELETE operation', () => {
    // arranje
    const expectedPayload = socketFixture.response.DELETE

    // act
    mutations.ADD_DELETE_OPERATION(storeState, expectedPayload)

    // assert
    expect(storeState.operations).toHaveLength(1)
    expect(storeState.operations[0]).toEqual(expectedPayload)
    expect(storeState.operations[0]).not.toBe(expectedPayload)
  })
})