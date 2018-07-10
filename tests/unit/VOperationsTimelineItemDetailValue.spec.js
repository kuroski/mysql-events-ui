import { shallowMount } from '@vue/test-utils'
import VOperationsTimelineItemDetailValue from '@/components/VOperationsTimelineItemDetailValue'
import socketFixture from './fixtures/socketServer'

describe('VOperationsTimelineItem', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VOperationsTimelineItemDetailValue, {
      propsData: props,
    })

    return {
      wrapper,
    }
  }

  beforeEach(() => {
    props = {
      name: 'id',
      value: 4,
    }
  })

  it('renders the component correctly', () => {
    // arranje
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })
})