import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TheOperationsLog from '@/views/TheOperationsLog'
import VOperationsTimeline from '@/components/VOperationsTimeline'
import state from '@/store/state'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TheOperationsLog', () => {
  const build = () => {
    const wrapper = shallowMount(TheOperationsLog, {
      store: new Vuex.Store({ state }),
      localVue,
    })

    return {
      wrapper,
      operationsTimeline: () => wrapper.find(VOperationsTimeline)
    }
  }

  it('renders the component correctly', () => {
    // arranje
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main components', () => {
    // arranje
    const { operationsTimeline } = build()

    // assert
    expect(operationsTimeline().exists()).toBe(true)
    expect(operationsTimeline().props().operations).toBe(state.operations)
  })
})