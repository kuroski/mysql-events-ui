import { shallowMount } from '@vue/test-utils'
import VOperationsTimelineItemDetail from '@/components/VOperationsTimelineItemDetail'
import VOperationsTimelineItemDetailValue from '@/components/VOperationsTimelineItemDetailValue'
import socketFixture from './fixtures/socketServer'

describe('VOperationsTimelineItem', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(VOperationsTimelineItemDetail, {
      propsData: props,
    })

    return {
      wrapper,
      content: () => wrapper.find('.timeline-item-detail__content'),
      values: () => wrapper.findAll(VOperationsTimelineItemDetailValue),
    }
  }

  beforeEach(() => {
    props = {
      type: '',
      rows: [],
    }
  })

  it('renders the component correctly', () => {
    // arranje
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correct INSERT operation details', () => {
    // arranje
    props.type = socketFixture.response.INSERT.type
    props.rows = socketFixture.response.INSERT.affectedRows
    const { values } = build()
    const firstValue = values().at(0)

    // assert
    expect(firstValue.props().prefix).toBe('+')
    expect(firstValue.props().name).toBe('id')
    expect(firstValue.props().value).toBe(4)
    expect(firstValue.props().highlight).toBe(false)
    expect(firstValue.props().add).toBe(true)
  })

  it('renders correct UPDATE operation details', () => {
    // arranje
    props.type = socketFixture.response.UPDATE.type
    props.rows = socketFixture.response.UPDATE.affectedRows
    const { values } = build()
    const firstValue = values().at(0)
    const secondValue = values().at(1)

    // assert
    expect(firstValue.props().prefix).toBe('-')
    expect(firstValue.props().name).toBe('id')
    expect(firstValue.props().value).toBe(4)
    expect(firstValue.props().highlight).toBe(false)
    expect(firstValue.props().remove).toBe(true)

    expect(secondValue.props().prefix).toBe('+')
    expect(secondValue.props().name).toBe('id')
    expect(secondValue.props().value).toBe(5)
    expect(secondValue.props().highlight).toBe(true)
    expect(secondValue.props().add).toBe(true)
  })

  it('renders correct DELETE operation details', () => {
    // arranje
    props.type = socketFixture.response.DELETE.type
    props.rows = socketFixture.response.DELETE.affectedRows
    const { values } = build()
    const firstValue = values().at(0)

    // assert
    expect(firstValue.props().prefix).toBe('-')
    expect(firstValue.props().name).toBe('id')
    expect(firstValue.props().value).toBe(5)
    expect(firstValue.props().highlight).toBe(false)
    expect(firstValue.props().remove).toBe(true)
  })
})