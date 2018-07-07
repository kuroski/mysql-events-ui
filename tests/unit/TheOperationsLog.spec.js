import { shallowMount } from '@vue/test-utils'
import TheOperationsLog from '@/views/TheOperationsLog'
import VOperationsTimeline from '@/components/VOperationsTimeline'

describe('TheOperationsLog', () => {
  const build = () => {
    const wrapper = shallowMount(TheOperationsLog)

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
  })
})