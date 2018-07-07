jest.mock('@/socket')
import { shallowMount } from '@vue/test-utils'
import socket from '@/socket'
import App from '@/App'

describe('App', () => {
  const build = () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    })

    return {
      wrapper,
    }
  }

  it('renders the component correctly', () => {
    // arranje
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('starts socket service', () => {
    // arranje
    build()

    // assert
    expect(socket.connect).toHaveBeenCalled()
  })
})