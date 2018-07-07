import io from 'socket.io-client'
import env from '@/env'
import store from '@/store'

let instance

export default {
  instance: () => instance,
  connect() {
    if (!instance) instance = io(env.socketServer)
    instance.on('connect', this.onConnect)
    instance.on('operationReceived', this.onOperationReceived)
    return instance
  },
  onConnect() {
    console.log('user connected')
  },
  onOperationReceived(data) {
    return {
      INSERT: () => store.dispatch('INSERT', data),
      UPDATE: () => store.dispatch('UPDATE', data),
      DELETE: () => store.dispatch('DELETE', data),
    }[data.type]()
  },
}