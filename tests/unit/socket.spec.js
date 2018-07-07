jest.mock('@/store')
jest.mock('socket.io-client', () => jest.fn(() => ({
  on: jest.fn()
})))
import io from 'socket.io-client'
import flushPromises from 'flush-promises'
import store from '@/store'
import socket from '@/socket'
import env from '@/env'
import socketFixture from './fixtures/socketServer'

describe('socket service', () => {

  afterEach(() => {
    jest.resetModules()
    jest.resetAllMocks()
  })

  it('connects to the socket server if not instanciated', async () => {
    // arranje
    expect(socket.instance()).not.toBeDefined()

    // act
    const instance = socket.connect()
    await flushPromises()

    // assert
    expect(io).toHaveBeenCalledWith(env.socketServer)
    expect(instance.on).toHaveBeenCalledWith('connect', socket.onConnect)
    expect(instance.on).toHaveBeenCalledWith('operationReceived', socket.onOperationReceived)
    expect(socket.instance()).toBeDefined()
  })

  it('calls store insert action when INSERT operation is received', () => {
    // arranje
    const expectedPayload = socketFixture.response.INSERT

    // act
    socket.onOperationReceived(expectedPayload)

    // assert
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch.mock.calls[0][0]).toBe('INSERT')
    expect(store.dispatch.mock.calls[0][1]).toBe(expectedPayload)
  })

  it('calls store update action when UPDATE operation is received', () => {
    // arranje
    const expectedPayload = socketFixture.response.UPDATE

    // act
    socket.onOperationReceived(expectedPayload)

    // assert
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch.mock.calls[0][0]).toBe('UPDATE')
    expect(store.dispatch.mock.calls[0][1]).toBe(expectedPayload)
  })

  it('calls store delete action when DELETE operation is received', () => {
    // arranje
    const expectedPayload = socketFixture.response.DELETE

    // act
    socket.onOperationReceived(expectedPayload)

    // assert
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch.mock.calls[0][0]).toBe('DELETE')
    expect(store.dispatch.mock.calls[0][1]).toBe(expectedPayload)
  })
})