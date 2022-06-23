import BaseView from '@/components/BaseView.vue'
import { shallowMount } from '@vue/test-utils'

describe('BaseView.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'Custom title'
    const wrapper = shallowMount(BaseView, {
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
